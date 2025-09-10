import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicesGrid from "@/components/sections/services-grid";
import CostCalculator from "@/components/sections/cost-calculator";
import { ArrowRight, Code, Zap, Users, Target } from "lucide-react";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const processSteps = [
  {
    icon: Users,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements through detailed consultations."
  },
  {
    icon: Code,
    title: "Design & Development", 
    description: "Our expert team creates intuitive designs and develops robust solutions using cutting-edge technologies."
  },
  {
    icon: Zap,
    title: "Testing & Optimization",
    description: "Rigorous testing ensures your solution performs flawlessly across all platforms and scenarios."
  },
  {
    icon: Target,
    title: "Launch & Support",
    description: "We handle deployment and provide ongoing support to ensure your solution continues to deliver value."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-saffron/10 via-background to-navy/10 mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-services-page-title">Our Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-services-page-description">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-get-started"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'm interested in your services. I'd like to discuss which services would be best for my project and get more information.");
                openWhatsApp(whatsappUrl);
              }}
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-process-title">Our Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-description">
              A proven methodology that ensures successful project delivery and exceeds client expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`process-step-${index}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid={`text-process-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-process-step-description-${index}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-cta-description">
              Let's discuss how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                className="bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-300"
                data-testid="button-cta-contact"
                onClick={() => {
                  const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'd like to contact you about your services. Please let me know when you're available to discuss my project requirements.");
                  openWhatsApp(whatsappUrl);
                }}
              >
                Contact Us Today
              </Button>
              <Button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300"
                data-testid="button-cta-demo"
                onClick={() => {
                  const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'd like to request a demo of your services. Please let me know when you can show me your work.");
                  openWhatsApp(whatsappUrl);
                }}
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
