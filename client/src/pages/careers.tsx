import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CareersSection from "@/components/sections/careers-section";
import { MapPin, Users, Briefcase, Heart } from "lucide-react";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const cultureValues = [
  {
    icon: Users,
    title: "Collaborative Excellence",
    description: "We believe in the power of teamwork and collective intelligence to solve complex challenges."
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Continuous learning and skill development are at the core of our career advancement philosophy."
  },
  {
    icon: Heart,
    title: "Work-Life Balance", 
    description: "We support flexible working arrangements that help our team members thrive both personally and professionally."
  },
  {
    icon: MapPin,
    title: "Global Impact",
    description: "Work on projects that make a difference for clients across the globe and shape the future of technology."
  }
];

const perks = [
  "Competitive salary packages (up to 6 LPA)",
  "Health insurance coverage",
  "Professional development opportunities",
  "Flexible working hours",
  "Remote work options",
  "Latest technology equipment",
  "Mentorship programs",
  "Performance bonuses",
  "Learning & development budget",
  "Team building activities",
  "Career growth opportunities",
  "Work-life balance support"
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-forestgreen/10 via-background to-gold/10 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-careers-page-title">Build Your Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-careers-page-description">
              Join a team of passionate innovators, work on cutting-edge projects, and shape the future of technology while growing your career in a supportive environment.
            </p>
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-view-openings"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'm interested in career opportunities at your company. I'd like to know more about open positions and the application process.");
                openWhatsApp(whatsappUrl);
              }}
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-culture-title">Our Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-culture-description">
              We foster an environment where innovation thrives, diversity is celebrated, and every team member can reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 hover-lift"
                data-testid={`culture-value-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid={`text-culture-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-culture-value-description-${index}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-perks-title">Benefits & Perks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-perks-description">
              We believe in taking care of our team members with comprehensive benefits and exciting perks.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3"
                  data-testid={`perk-${index}`}
                >
                  <div className="w-2 h-2 bg-saffron rounded-full flex-shrink-0"></div>
                  <span data-testid={`text-perk-${index}`}>{perk}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <CareersSection />

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-application-process-title">Application Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-application-process-description">
              Our streamlined hiring process is designed to be fair, transparent, and respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Apply Online", description: "Submit your application through our portal" },
              { title: "Initial Screening", description: "HR review and initial phone screening" },
              { title: "Technical Assessment", description: "Skills evaluation and technical interview" },
              { title: "Final Interview", description: "Meet the team and cultural fit assessment" }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`application-step-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-saffron to-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-application-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-application-step-description-${index}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forestgreen to-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-careers-cta-title">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-careers-cta-description">
              Take the next step in your career journey and become part of our innovative team.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-forestgreen px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-300"
              data-testid="button-careers-cta"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'm ready to apply for a position at your company. I'd like to discuss my qualifications and the next steps in the application process.");
                openWhatsApp(whatsappUrl);
              }}
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
