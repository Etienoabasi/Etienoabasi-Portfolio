import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";
import profilePhoto from "/uploads/149a7b09-1310-4f34-90b5-e1590136ca1a.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Etienoabasi Asanga"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-elegant hover-scale"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Etienoabasi</span> Asanga
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Frontend Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Self-taught developer from Nigeria passionate about creating beautiful, 
              responsive web experiences. Seeking remote or hybrid internship opportunities 
              to grow through mentorship and real-world experience.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="sm"
            variant="gradient"
            onClick={() => scrollToSection('projects')}
            className="hover-scale"
          >
            View Projects
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="hover-scale"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button
            size="sm"
            className="hover-scale"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Etienoabasi/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:etienoabasiasanga@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;