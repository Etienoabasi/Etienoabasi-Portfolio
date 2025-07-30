import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Play } from "lucide-react";
import TodoApp from "@/components/TodoApp";

const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A clean, responsive personal portfolio showcasing my skills and projects. Built with modern web technologies and featuring smooth animations and intuitive navigation.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/Etienoabasi/Portfolio",
      live: "#",
      featured: true,
      hasDemo: false
    },
    {
      title: "React To-Do App with Drag and Drop",
      description: "An interactive task management application with drag-and-drop functionality. Demonstrates component-based architecture, state management, and dynamic user interactions.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "DnD Kit"],
      github: "https://github.com/Etienoabasi/react-todo-app",
      live: "#",
      featured: true,
      hasDemo: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in frontend development, 
            responsive design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button variant="outline" size="sm" asChild className="hover-scale">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
                
                {project.hasDemo ? (
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="gradient" size="sm" className="hover-scale">
                        <Play className="w-4 h-4" />
                        Try Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle>React Todo App - Live Demo</DialogTitle>
                      </DialogHeader>
                      <TodoApp />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button variant="secondary" size="sm" asChild className="hover-scale">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More projects coming soon!</p>
          <Button variant="outline" asChild className="hover-scale">
            <a href="https://github.com/Etienoabasi" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;