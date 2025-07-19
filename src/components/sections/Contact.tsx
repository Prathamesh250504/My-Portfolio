import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  Send,
  MapPin,
  MessageSquare
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9503583713",
      href: "tel:+919503583713",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "prathameshpabe@gmail.com",
      href: "mailto:prathameshpabe@gmail.com",
      color: "bg-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/prathameshpabe",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/prathameshpabe",
      color: "bg-gray-800"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Follow me",
      href: "https://instagram.com/prathameshpabe",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Send a Message
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="Let's discuss an opportunity"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={4}
                    className="border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having 
                a conversation about technology and innovation. Feel free to reach out through 
                any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <CardContent className="p-4">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 w-full"
                    >
                      <div className={`p-3 rounded-lg ${contact.color} text-white group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {contact.value}
                        </p>
                      </div>
                      
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location Info */}
            <Card className="bg-gradient-card border shadow-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-accent">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-display font-semibold text-foreground">
                    Based in India
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing B.E. in Computer Science at Gharda Institute of Technology. 
                  Open to remote opportunities and willing to relocate for the right position.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};