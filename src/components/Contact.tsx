import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "etienoabasiasanga@gmail.com",
      href: "mailto:etienoabasiasanga@gmail.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/Etienoabasi",
      href: "https://github.com/Etienoabasi/Portfolio",
      description: "View my code and projects"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Nigeria",
      href: "#",
      description: "Open to remote & hybrid opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking remote or hybrid internship opportunities. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="skill-item border-0 shadow-card text-center h-full">
              <CardHeader className="pb-4">
                <div className="text-primary mb-3 flex justify-center">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild 
                  className="hover-scale w-full"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.value}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-card">
          <CardContent className="pt-8 text-center">
            <div className="mb-6">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready to Start a Conversation?</h3>
              <p className="text-muted-foreground">
                Whether you have an internship opportunity, want to discuss a project, 
                or just want to connect with a fellow developer, I'd love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" asChild className="hover-scale">
                <a href="mailto:etienoabasiasanga@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-scale">
                <a href="https://github.com/Etienoabasi/Portfolio" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Currently seeking remote or hybrid internship opportunities • Based in Nigeria • Available immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;