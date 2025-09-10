import { Link } from "wouter";
import { Code, Linkedin, Twitter, Instagram, Github, Shield, Award } from "lucide-react";

const serviceLinks = [
  "Web Development",
  "Mobile Apps", 
  "Cloud Solutions",
  "AI & Machine Learning",
  "DevOps",
  "Cybersecurity"
];

const companyLinks = [
  "About Us",
  "Our Team", 
  "Careers",
  "Case Studies",
  "Blog",
  "Contact"
];

const resourceLinks = [
  "Free Demo",
  "Documentation",
  "API Reference", 
  "Support Center",
  "Privacy Policy",
  "Terms of Service"
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-white rounded-lg flex items-center justify-center">
                <Code className="text-navy font-bold" size={20} />
              </div>
              <span className="font-bold text-xl">Apptechvisa</span>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Transforming businesses with innovative IT solutions. From concept to deployment, we deliver excellence that drives global success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                data-testid="link-twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                data-testid="link-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                data-testid="link-github"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Careers" ? "/careers" : link === "Contact" ? "/contact" : "#"}
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-company-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {resourceLinks.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-resource-${resource.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm" data-testid="text-copyright">
            © 2024 Apptechvisa. All rights reserved. Made with ❤️ in India for the world.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Shield className="text-forestgreen" size={16} />
              <span data-testid="text-iso-certification">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Award className="text-gold" size={16} />
              <span data-testid="text-cmmi-level">CMMI Level 3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
