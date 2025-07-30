import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Tailwind CSS"],
      icon: "⚛️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Vite"],
      icon: "🛠️"
    },
    {
      title: "Core Competencies",
      skills: ["Responsive Design", "Component Architecture", "Version Control", "Problem Solving", "Debugging"],
      icon: "🎯"
    }
  ];

  const learningNext = [
    "TypeScript", "Node.js", "Next.js", "Testing Libraries", "Backend Development"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring 
            ideas to life. Always learning and expanding my toolkit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-item border-0 shadow-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Committed to continuous learning and professional growth through hands-on practice and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;