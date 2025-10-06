import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Inspire2Grow</h3>
            <p className="text-muted-foreground text-sm">
              Empowering individuals and organizations to achieve their full potential through expert career guidance and world-class training programs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:2inspire2grow@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                2inspire2grow@gmail.com
              </a>
              <a
                href="tel:+918600045797"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                +91 86000 45797
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inspire2Grow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
