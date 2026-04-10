import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Brain, 
  Database, 
  GitBranch, 
  Smartphone,
  Server,
  Eye
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      color: "bg-blue-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-green-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "bg-purple-500",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "OpenCV", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "Machine Learning", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      color: "bg-orange-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "MongoDB", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Linux", level: 70 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.color} text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`${getSkillColor(skill.level)} text-white border-none text-xs`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${getSkillColor(skill.level)} transition-all duration-1000 rounded-full`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Additional Technologies & Frameworks
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Express.js", "JWT Authentication", "Bootstrap", "Tailwind CSS", 
              "NumPy", "Pandas", "Matplotlib", "SSD MobileNet",
              "RESTful APIs", "Form Validation", "Dynamic Routing"
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default px-3 py-1"
                style={{ animationDelay: `${0.5 + (index * 0.05)}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};