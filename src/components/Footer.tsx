import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Name and tagline */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Etienoabasi Asanga</h3>
            <p className="text-muted-foreground">Aspiring Frontend Developer</p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Etienoabasi/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:etienoabasiasanga@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Etienoabasi Asanga.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;