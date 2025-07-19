import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Review Platform",
      description: "A comprehensive full-stack MERN web application designed for academic project management. Features include secure user authentication, intuitive project submission forms, advanced review systems, and dynamic content management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST APIs"],
      features: [
        "User authentication with login/signup",
        "Form validation and error handling",
        "Dynamic routing and navigation",
        "RESTful API design",
        "MongoDB database integration",
        "Responsive design"
      ],
      type: "Full-Stack Web Application",
      status: "Completed"
    },
    {
      id: 2,
      title: "CCTV Human Detection System",
      description: "An intelligent computer vision application that provides real-time human detection in CCTV feeds. Built with advanced machine learning models for accurate object classification and tracking.",
      technologies: ["Python", "OpenCV", "TensorFlow", "SSD MobileNet", "Computer Vision"],
      features: [
        "Real-time video processing",
        "Human detection and tracking",
        "SSD MobileNet model integration",
        "Alert system for detection events",
        "Performance optimization",
        "Configurable detection parameters"
      ],
      type: "Computer Vision / AI",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, AI/ML, and software engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`${getStatusColor(project.status)} border font-medium`}>
                    {project.status}
                  </Badge>
                </div>
                
                <Badge variant="outline" className="w-fit text-xs">
                  {project.type}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-sm text-muted-foreground italic">
                        + {project.features.length - 4} more features...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1 group">
                    <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Details
                  </Button>
                  
                  <Button variant="outline" size="sm" className="group">
                    <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                  
                  <Button variant="outline" size="sm" className="group">
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="group">
            <Github className="mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};