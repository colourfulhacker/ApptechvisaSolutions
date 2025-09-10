import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 nav-blur border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home-logo">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center">
              <Code className="text-white font-bold" size={20} />
            </div>
            <span className="font-bold text-xl gradient-text">Apptechvisa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-saffron transition-colors relative",
                  location === item.href && "text-saffron"
                )}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
                {location === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-saffron rounded-full" />
                )}
              </Link>
            ))}
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-free-demo"
            >
              Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-foreground hover:text-saffron transition-colors",
                  location === item.href && "text-saffron bg-saffron/10"
                )}
                onClick={closeMobileMenu}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="w-full mt-2 bg-gradient-to-r from-saffron to-navy text-white"
              onClick={closeMobileMenu}
              data-testid="button-mobile-free-demo"
            >
              Free Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
