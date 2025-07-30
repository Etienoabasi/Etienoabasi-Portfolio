import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Self-Taught Journey",
      description: "Passionate about learning and mastering new technologies through hands-on practice and dedication."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding elegant solutions through clean, efficient code."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Always eager to learn from experienced developers and contribute to meaningful projects."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Goals",
      description: "Seeking remote or hybrid internship opportunities to grow through mentorship and real-world experience."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a self-taught frontend developer from Nigeria with a passion for creating 
            beautiful, responsive web experiences. My journey in web development started with 
            curiosity and has grown into a deep commitment to crafting clean, user-friendly interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="skill-item border-0 shadow-card text-center h-full">
              <CardContent className="pt-6">
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardContent className="pt-6">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My development journey began with a simple curiosity about how websites work. 
                  What started as tinkering with HTML and CSS quickly evolved into a passion for 
                  creating meaningful digital experiences. I've spent countless hours learning, 
                  practicing, and building projects that challenge me to grow.
                </p>
                <p>
                  I believe in the power of clean, maintainable code and user-centered design. 
                  Every project I work on is an opportunity to learn something new and push my 
                  boundaries. I'm particularly drawn to the intersection of functionality and 
                  aesthetics, where technical skill meets creative vision.
                </p>
                <p>
                  As I continue to grow as a developer, I'm eager to collaborate with experienced 
                  teams, contribute to meaningful projects, and learn from mentors who can guide 
                  my professional development. I'm actively seeking remote or hybrid internship 
                  opportunities where I can apply my skills while continuing to learn and grow.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;