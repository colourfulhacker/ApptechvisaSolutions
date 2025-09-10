import { Link } from "wouter";
import { Code, Linkedin, Twitter, Instagram, Github, Shield, Award } from "lucide-react";

const serviceLinks = [
  { name: "Web Development", href: "/services#web-development" },
  { name: "Mobile Apps", href: "/services#mobile-development" },
  { name: "Cloud Solutions", href: "/services#cloud-solutions" },
  { name: "AI & Machine Learning", href: "/services#ai-ml" },
  { name: "Data Analytics", href: "/services#data-analytics" },
  { name: "Cybersecurity", href: "/services#cybersecurity" }
];

const companyLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Our Team", href: "/#team" },
  { name: "Careers", href: "/careers" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

const resourceLinks = [
  { name: "Cost Calculator", href: "/services#calculator" },
  { name: "Free Demo", href: "/#demo" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Support", href: "/contact" }
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
            <div className="text-white/80 text-sm space-y-1 mb-6">
              <div>📧 apptechvisa@gmail.com</div>
              <div>📧 info@apptechvisasolutions.in</div>
              <div>📞 +91 9647457831</div>
              <div>📍 5QGG+4QP, Rampurhat, West Bengal 731224</div>
            </div>
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
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
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
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="hover:text-saffron transition-colors"
                    data-testid={`link-resource-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm" data-testid="text-copyright">
              © {new Date().getFullYear()} Apptechvisa. All rights reserved. Made with ❤️ in India for the world.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Developed and managed by{" "}
              <a 
                href="https://cehpoint.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-saffron hover:text-white transition-colors"
                data-testid="link-cehpoint"
              >
                Cehpoint
              </a>{" "}
              (Development Partner)
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Shield className="text-forestgreen" size={16} />
              <span data-testid="text-security">Secure & Reliable</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Award className="text-gold" size={16} />
              <span data-testid="text-quality">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
