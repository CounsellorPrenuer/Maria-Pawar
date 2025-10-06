import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@assets/logo_1759744643906.png";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img src={logoImg} alt="Inspire2Grow" className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
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
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-contact"
              >
                Contact
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 backdrop-blur-lg bg-background/95">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 text-sm font-medium ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
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
                className="w-full rounded-full bg-accent text-accent-foreground"
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
