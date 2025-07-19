import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Code } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Python Developer Intern",
      company: "iBase Electrosoft LLP",
      type: "Internship",
      duration: "June 30 – July 6, 2025",
      location: "Remote",
      status: "Upcoming",
      description: "Upcoming Python development internship focusing on hands-on practical exposure to real-world development scenarios and industry best practices.",
      highlights: [
        "Python development with hands-on practical exposure",
        "Working on real-world development projects",
        "Learning industry best practices",
        "Collaborative development environment"
      ],
      technologies: ["Python", "Software Development", "Industry Practices"],
      icon: Code
    },
    {
      id: 2,
      title: "AI & ML Intern",
      company: "TechCorp Solutions",
      type: "Internship",
      duration: "October 2024 (1 Month)",
      location: "Hybrid",
      status: "Completed",
      description: "Completed a comprehensive AI & ML internship focusing on machine learning algorithms, data preprocessing, and model development.",
      highlights: [
        "Hands-on experience with ML algorithms",
        "Data preprocessing and analysis",
        "Model training and evaluation",
        "Real-world AI project implementation"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
      icon: Building
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'current':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experiences and internships that have shaped my technical journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.01] group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Company Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <exp.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-muted-foreground font-medium">
                              {exp.company}
                            </p>
                          </div>
                          
                          <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                            <Badge className={`${getStatusColor(exp.status)} border font-medium w-fit`}>
                              {exp.status}
                            </Badge>
                            <Badge variant="outline" className="w-fit text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Key Highlights</h4>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking internships and entry-level positions in AI/ML, Data Science, and Software Development. 
              Let's connect and explore how I can contribute to your team!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};