import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import { Shield, Award, Users, TrendingUp } from "lucide-react";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const achievements = [
  {
    icon: TrendingUp,
    value: "25+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    icon: Users,
    value: "15+",
    label: "Happy Clients",
    description: "From startups to growing businesses"
  },
  {
    icon: Award,
    value: "100%",
    label: "Client Satisfaction", 
    description: "Every project delivered on time and within budget"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Data Security",
    description: "Protecting client information and privacy"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-navy/10 via-background to-forestgreen/10 lotus-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-portfolio-page-title">Our Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-portfolio-page-description">
              Explore our recent projects and see how we've helped businesses improve their operations, increase efficiency, and grow their digital presence. Each project represents real solutions for real businesses.
            </p>
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-discuss-project"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I've seen your portfolio and I'm interested in discussing a project with you. I'd like to know more about your services and get a quote.");
                openWhatsApp(whatsappUrl);
              }}
            >
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-achievements-title">Our Track Record</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-achievements-description">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 text-center hover-lift"
                data-testid={`achievement-${index}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2" data-testid={`text-achievement-value-${index}`}>
                  {achievement.value}
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-achievement-label-${index}`}>
                  {achievement.label}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Confidentiality Notice */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-forestgreen to-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-confidentiality-title">
              Privacy & Security
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-confidentiality-description">
              We respect our clients' privacy and only showcase projects with their permission. All client names and sensitive details are anonymized to protect business confidentiality while demonstrating our capabilities.
            </p>
            <Button 
              className="bg-gradient-to-r from-forestgreen to-gold text-white px-6 py-3 font-semibold hover:shadow-lg transition-all duration-300"
              data-testid="button-learn-more-nda"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'd like to learn more about your privacy policy and how you handle client data. Can you provide more information?");
                openWhatsApp(whatsappUrl);
              }}
            >
              Learn About Our Privacy Policy
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-saffron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-portfolio-cta-title">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-portfolio-cta-description">
              Join our portfolio of successful clients and transform your business with innovative technology solutions.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-300"
              data-testid="button-portfolio-cta"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'm ready to start my project with your team. I've seen your portfolio and I'm impressed. Let's discuss the next steps and get started!");
                openWhatsApp(whatsappUrl);
              }}
            >
              Start Your Project Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
