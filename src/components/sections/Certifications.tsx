import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Certifications = () => {
  // Sort certifications by date ascending
  const certifications = [
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL (IIT Madras)",
      date: "April 2024",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs57/Course/NPTEL24CS57S56580002530478250.pdf",
    },
    {
      title: "What Is Generative AI?",
      issuer: "LinkedIn Learning",
      date: "August 22, 2024",
      link: "https://www.linkedin.com/learning/certificates/ec068c35d5d8824e1635e6e12add16d03ff0b3c8660537fde438410976ffadd0?trk=share_certificate",
    },
    {
      title: "Introduction to Generative AI - Art of the Possible",
      issuer: "AWS Training and Certification",
      date: "August 30, 2024",
      link: "https://drive.google.com/file/d/17Ub8wndYx3SIlnCzsfRmEkfsLTmHm6CU/view?usp=sharing",
    },
    {
      title: "Generative AI for Executives",
      issuer: "AWS Training and Certification",
      date: "September 21, 2024",
      link: "https://drive.google.com/file/d/1ktLjUqAom5ogkqj69ZJT-_xCZhZF9JJK/view?usp=sharing",
    },
    {
      title: "Building a Machine Learning Ready Organization",
      issuer: "AWS Training and Certification",
      date: "September 21, 2024",
      link: "https://drive.google.com/file/d/12g0rhsxCqrB8oAyfaod10B7f1Ip-C_oz/view?usp=sharing",
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      issuer: "LinkedIn & Microsoft",
      date: "September 14, 2024",
      link: "https://www.linkedin.com/learning/certificates/74ae85180e8952cf174f3a84fca7961fb3b2d361811a6f87caba9ca74a482379?trk=share_certificate",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "March 27, 2025",
      link: "https://www.credly.com/badges/855975c3-ae70-4492-8c86-afb6e7449422/public_url",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "June 18, 2025",
      link: "https://drive.google.com/file/d/1nk5ebWCp1F3PPZwwYAER9tYisljjIQIV/view?usp=sharing",
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      date: "June 19, 2025",
      link: "https://drive.google.com/file/d/1yQM-en9ByopJ4LBrje_Pc_t8YdoC9Pmp/view?usp=sharing",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "June 26, 2025",
      link: "https://drive.google.com/file/d/1mvtN9W2t4dFxnljN6d6iIPXdli1HrEZW/view?usp=sharing",
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      date: "June 30, 2025",
      link: "https://drive.google.com/file/d/1LQSsa_03mCOGAHJT27DKxBcZXCCnhwF8/view?usp=sharing",
    },
    {
      title: "Principles of Generative AI Certication",
      issuer: "Infosys Springboard",
      date: "Oct 15, 2025",
      link: "https://drive.google.com/file/d/1Xn8B5cq57kryQYkKwbDIVS4M_y_M9dEG/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my professional certifications and achievements
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <Badge variant="outline" className="mb-2">
                  {cert.issuer}
                </Badge>
                <div className="text-muted-foreground text-sm mb-2">{cert.date}</div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 