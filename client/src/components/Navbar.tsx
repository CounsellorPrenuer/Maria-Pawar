import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@assets/logo_1759744643906.png";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/career-guidance", label: "Career Guidance" },
    { path: "/learning-development", label: "Learning & Development" },
    { path: "/aviation", label: "Aviation" },
    { path: "/our-impact", label: "Our Impact" },
    { path: "/pricing", label: "Pricing" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg" 
        : "backdrop-blur-md bg-background/60 border-b border-border/30"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center group" data-testid="link-home-logo">
            <img 
              src={logoImg} 
              alt="Inspire2Grow" 
              className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location === link.path 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                variant="default"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-contact"
              >
                Contact
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 backdrop-blur-xl bg-background/95 animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all ${
                  location === link.path 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full mt-4 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-mobile-contact"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
