import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const About = () => {
  const education = [
    {
      degree: "B.E. in Computer Science (AI & ML)",
      institution: "Gharda Institute of Technology",
      period: "2022 - 2026",
      grade: "CGPA: 7.2/10",
      icon: GraduationCap,
      current: true
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dnyandeep College of Science & Commerce",
      period: "2022",
      grade: "67.67%",
      icon: Award,
      current: false
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Dnyandeep Vidya Mandir",
      period: "2020",
      grade: "93.40%",
      icon: Award,
      current: false
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent solutions and modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                I am a Computer Science student specializing in <strong className="text-primary">Artificial Intelligence & Machine Learning</strong>, 
                passionate about Data Science. I enjoy building intelligent solutions and modern web applications using 
                <strong className="text-primary"> Python</strong> and <strong className="text-primary">React</strong>.
              </p>
              
              <p className="mb-6 leading-relaxed">
                My journey in technology started with a curiosity about how machines can learn and make decisions. 
                This led me to explore various domains including computer vision, web development, and data analysis.
              </p>
              
              <p className="leading-relaxed">
                I believe in continuous learning and staying updated with the latest technological trends. 
                My goal is to contribute to innovative projects that make a positive impact on society.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${edu.current ? 'bg-gradient-primary' : 'bg-muted'}`}>
                        <edu.icon className={`w-6 h-6 ${edu.current ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground text-lg">
                            {edu.degree}
                          </h4>
                          {edu.current && (
                            <span className="bg-gradient-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <span className="font-medium text-primary">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};