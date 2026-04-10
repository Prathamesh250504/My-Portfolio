import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "portfolio_db";
const COLLECTION = "messages";

if (!MONGO_URI) {
  console.error("MONGO_URI is not set in environment variables.");
  process.exit(1);
}

let db;

async function connectDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log("Connected to MongoDB Atlas");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendNotification({ firstName, lastName, email, subject, message }) {
  const fullName = `${firstName} ${lastName || ""}`.trim();
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `📬 New message from ${fullName}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:16px 16px 0 0;padding:40px 40px 30px;text-align:center;">
            <div style="width:60px;height:60px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px;line-height:60px;">📩</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">New Portfolio Message</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Someone reached out via your contact form</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">

            <!-- Sender card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9ff;border:1px solid #e8ecff;border-radius:12px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;">
                  <div style="display:inline-block;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-radius:50%;width:48px;height:48px;text-align:center;line-height:48px;font-size:20px;font-weight:700;margin-bottom:12px;">
                    ${firstName.charAt(0).toUpperCase()}
                  </div>
                  <h2 style="margin:0 0 4px;color:#1a1a2e;font-size:20px;font-weight:700;">${fullName}</h2>
                  <a href="mailto:${email}" style="color:#667eea;text-decoration:none;font-size:14px;">${email}</a>
                </td>
              </tr>
            </table>

            <!-- Details -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                  <p style="margin:0;font-size:16px;color:#1a1a2e;font-weight:600;background:#f8f9ff;border-left:4px solid #667eea;padding:12px 16px;border-radius:0 8px 8px 0;">${subject || "No subject provided"}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:28px;">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <div style="background:#f8f9ff;border:1px solid #e8ecff;border-radius:12px;padding:20px;font-size:15px;color:#374151;line-height:1.7;">
                    ${message.replace(/\n/g, "<br/>")}
                  </div>
                </td>
              </tr>
            </table>

            <!-- Reply button -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}" style="display:inline-block;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:50px;font-size:15px;font-weight:600;letter-spacing:0.3px;">
                    ↩ Reply to ${firstName}
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f9ff;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #e8ecff;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">Received on ${timestamp} IST &nbsp;·&nbsp; Prathamesh Pabe's Portfolio</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
    `,
  });
}

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "*",
  methods: ["POST"],
}));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: "firstName, email, and message are required." });
  }

  try {
    await db.collection(COLLECTION).insertOne({
      firstName,
      lastName: lastName || "",
      email,
      subject: subject || "",
      message,
      createdAt: new Date(),
    });

    // Send email notification (non-blocking — don't fail the request if email fails)
    sendNotification({ firstName, lastName, email, subject, message }).catch((err) =>
      console.error("Email notification failed:", err)
    );

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message." });
  }
});

// Health check
app.get("/health", (_, res) => res.json({ status: "ok" }));

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => { console.error("DB connection failed:", err); process.exit(1); });
