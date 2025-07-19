import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-background/20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45 bg-background/15 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-background/80 text-sm font-medium tracking-wider uppercase mb-4 block">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 leading-tight">
              Prathamesh
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Ravindra Pabe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/90 mb-4 font-medium">
              AI & ML Enthusiast | Python Developer
            </p>
            
            <p className="text-lg text-background/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Computer Science student specializing in Artificial Intelligence and Machine Learning, 
              passionate about Data Science and Web Development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="group">
                <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              
              <Button variant="glass" size="lg" className="group">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-xl scale-110 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-background/20 scale-110"></div>
              
              {/* Main image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background/30 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Prathamesh Ravindra Pabe"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full shadow-elegant animate-float font-medium">
                🚀 Available for Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};