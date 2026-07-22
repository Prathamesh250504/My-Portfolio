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
      status: "Completed",
      github: "https://github.com/Prathamesh250504/Project-Review-Platform"
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
      status: "Completed",
      github: "https://github.com/Prathamesh250504/CCTV-Camera-Human-Detection"
    },
    {
      id: 3,
      title: "Visage AI",
      description: "An AI-powered skincare analysis platform that uses trained CNN models to analyze facial images from three angles (left, right, front) and detect skin condition, skin type, skin tone, pores, pigmentation, and dark circles. Combines computer vision with a personalized quiz, product recommendations, and Ayurvedic content to deliver a complete skincare journey.",
      technologies: ["React", "Firebase", "Python", "FastAPI", "TensorFlow", "MongoDB", "OpenCV", "Framer Motion", "Tailwind CSS"],
      features: [
        "Multi-angle CNN facial analysis (skin condition, type, tone, pores, pigmentation, dark circles)",
        "Face landmark detection with OpenCV and quality scoring",
        "Personalized skincare quiz with AI-generated analysis saved to MongoDB",
        "Budget-based product recommendation system with OpenAI integration",
        "Skin reports dashboard with analysis history, quiz history, and combined final reports",
        "Skincare streak tracker synced across localStorage and MongoDB",
        "Ayurveda blog, DIY remedies guide, and Skin Essentials educational section",
        "Firebase authentication (email/password + Google OAuth + password reset)",
        "Protected routes with persistent session management",
        "3 more features..."
      ],
      type: "AI / Full-Stack Web Application",
      status: "Completed",
      github: "https://github.com/Prathamesh250504/Prathamesh250504-visage-ai-prathamesh-and-sanika",
      liveUrl: "https://visage-ai.netlify.app//",
      featured: true
    },
    {
      id: 4,
      title: "AI Content Creator",
      description: "A full-stack AI-powered content generation platform for creating, analyzing, and optimizing content across multiple formats. Features multi-model LLM integration, real-time quality analysis, A/B testing, batch processing, and a rich template library — all backed by a secure user authentication system.",
      technologies: ["React", "Python", "Flask", "MongoDB", "OpenRouter API", "Tailwind CSS", "JWT", "Google OAuth", "spaCy", "Chart.js", "Framer Motion"],
      features: [
        "Multi-model AI generation (GPT-OSS-20B, Llama 3.3 70B, Gemma 2 27B, Hermes 3 405B) with automatic fallback",
        "Content quality analysis — readability, sentiment, engagement, and keyword density scoring",
        "A/B testing with statistical significance and AI-powered winner prediction",
        "Batch processing with queue management and rate limiting",
        "Content enhancement engine — tone adjustment, length modification, style refinement",
        "Custom prompt template builder with variable support",
        "User authentication with JWT and Google OAuth 2.0"
      ],
      type: "Full-Stack Web Application / AI SaaS",
      status: "Completed",
      github: "https://github.com/Prathamesh250504/AI-Content-Creator-2026",
      liveUrl: "https://ai-content-creator-2026.netlify.app/"
    },
    {
      id: 5,
      title: "SevaSutra",
      description: "A comprehensive offline-first Progressive Web App (PWA) designed for community healthcare field workers to conduct household health surveys in rural India. Features AI-powered data validation, real-time synchronization, bilingual support (English/Marathi), voice-to-text input, GPS capture, and a full admin analytics dashboard — all optimized for low-connectivity, mobile-first field conditions.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "React Query", "Framer Motion", "Recharts", "PWA", "IndexedDB", "i18next", "PostgreSQL"],
      features: [
        "Offline-first architecture with IndexedDB, auto background sync, and exponential backoff retry",
        "AI-powered data validation with real-time quality scoring (0–100) and field-level issue detection",
        "Multi-step survey form — health screening, GPS capture, photo, voice-to-text, BMI auto-calculation",
        "Role-based access control (Admin, Supervisor, Field Worker) with PostgreSQL Row-Level Security",
        "Admin analytics dashboard — 14-day trends, worker leaderboard, geographic coverage, CSV export",
        "Bilingual support (English / Marathi) with 400+ translation keys and runtime language toggle",
        "Installable PWA with Workbox offline caching, push notifications, and mobile-native navigation"
      ],
      type: "Healthcare PWA / Field Survey Platform",
      status: "Completed",
      github: "https://github.com/Prathamesh250504/sevasutra-ai-bilingual-health-data-platform",
      liveUrl: "https://seva-sutra-2026.lovable.app"
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, AI/ML, and software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <Card
              key={project.id}
              className="lg:col-span-2 relative bg-gradient-card border-2 border-primary/40 shadow-elegant hover:shadow-elegant transition-all duration-500 hover:scale-[1.01] group animate-fade-in-up overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-sm">
                      ⭐ Major B.E. Project
                    </span>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border font-medium`}>
                    {project.status}
                  </Badge>
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {project.type}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
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

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 5 && (
                        <li className="text-sm text-muted-foreground italic">
                          + {project.features.length - 5} more features...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" className="flex-1 group" onClick={() => window.open(project.github, '_blank')}>
                    <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="group" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm" className="group" disabled={!project.liveUrl} onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Other Projects */}
          {projects.filter(p => !p.featured).map((project, index) => (
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
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

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

                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1 group" onClick={() => window.open(project.github, '_blank')}>
                    <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="group" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm" className="group" disabled={!project.liveUrl} onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="https://github.com/Prathamesh250504?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="group">
              <Github className="mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
