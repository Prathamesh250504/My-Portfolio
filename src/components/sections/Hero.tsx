import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-accent opacity-30 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary-glow/40 blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45 bg-background/20 blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-accent/25 blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary-glow animate-pulse" />
              <span className="text-background/80 text-sm font-medium tracking-wider uppercase bg-background/10 backdrop-blur-sm px-3 py-1 rounded-full border border-background/20">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-background mb-6 leading-tight">
              <span className="block">Prathamesh</span>
              <span className="bg-gradient-accent bg-clip-text text-transparent inline-flex items-center gap-3">
                Ravindra Pabe
                <Code className="w-8 h-8 md:w-10 md:h-10 text-primary-glow animate-pulse" />
              </span>
            </h1>
            
            <div className="mb-6">
              <p className="text-2xl md:text-3xl text-background/95 mb-2 font-semibold">
                AI & ML Enthusiast
              </p>
              <p className="text-xl md:text-2xl text-background/85 font-medium">
                Python Developer | Web Developer
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science student specializing in Artificial Intelligence and Machine Learning, 
              passionate about building intelligent solutions and modern web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="accent" size="lg" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </Button>
              
              <Button variant="glass" size="lg" className="group relative">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button variant="outline" size="lg" className="group relative border-background/30 hover:border-background/50">
                <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact Me
              </Button>
            </div>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Python', 'React', 'AI/ML', 'TensorFlow', 'MongoDB'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-background/10 backdrop-blur-sm text-background/80 rounded-full border border-background/20 hover:bg-background/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-2xl scale-125 group-hover:scale-130 transition-transform duration-700"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-background/20 scale-115 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Static decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-background/30 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background/40 shadow-glow group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="Prathamesh Ravindra Pabe"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500"></div>
              </div>
              
              {/* Enhanced floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-elegant animate-float font-semibold text-sm border-2 border-background/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for Opportunities
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-float border-2 border-background/20" style={{ animationDelay: '1s' }}>
                <Code className="w-6 h-6 text-background" />
              </div>
              
              <div className="absolute top-1/4 -right-8 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-elegant animate-float border border-background/20" style={{ animationDelay: '2.5s' }}>
                <Sparkles className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};