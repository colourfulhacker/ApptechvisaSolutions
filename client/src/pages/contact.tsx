import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/sections/contact-section";
import { MessageCircle, Phone, Mail, MapPin, Clock, Headphones, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    contact: "+91 80000 00000",
    availability: "Mon-Sat, 9 AM - 6 PM IST"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your inquiries",
    contact: "hello@apptechvisa.com",
    availability: "24/7 Response within 4 hours"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support for quick questions",
    contact: "Chat Widget",
    availability: "Mon-Fri, 9 AM - 9 PM IST"
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Dedicated support for existing clients",
    contact: "support@apptechvisa.com",
    availability: "24/7 Emergency Support"
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most projects range from 3-8 months. We provide detailed timelines during the initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We serve clients across 15+ countries including USA, UK, Canada, Australia, and throughout Europe and Asia."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern tech stacks including React, Node.js, Python, Java, cloud platforms (AWS, Azure, GCP), AI/ML frameworks, and mobile technologies."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely! We offer comprehensive maintenance packages, technical support, and ongoing development services to ensure your solution continues to evolve."
  },
  {
    question: "How do you ensure project confidentiality?",
    answer: "We maintain strict NDA protocols, implement secure development practices, and have ISO 27001 certification for information security management."
  },
  {
    question: "Can you work within our existing team structure?",
    answer: "Yes, we offer flexible engagement models including dedicated teams, staff augmentation, and collaborative development approaches."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-navy/10 via-background to-saffron/10 mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-contact-page-title">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-contact-page-description">
              Ready to transform your business with innovative technology solutions? Our team of experts is here to discuss your project and provide tailored recommendations.
            </p>
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-start-conversation"
            >
              Start the Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-contact-methods-title">Multiple Ways to Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-methods-description">
              Choose the communication method that works best for you. Our team is available across multiple channels to provide support and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift"
                data-testid={`contact-method-${index}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid={`text-contact-method-title-${index}`}>
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-contact-method-description-${index}`}>
                  {method.description}
                </p>
                <div className="space-y-2">
                  <div className="font-semibold text-saffron" data-testid={`text-contact-method-contact-${index}`}>
                    {method.contact}
                  </div>
                  <div className="text-xs text-muted-foreground" data-testid={`text-contact-method-availability-${index}`}>
                    {method.availability}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-faq-title">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-faq-description">
              Get quick answers to common questions about our services, processes, and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
                data-testid={`faq-${index}`}
              >
                <h3 className="text-lg font-semibold mb-3" data-testid={`text-faq-question-${index}`}>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="gradient-text" data-testid="text-global-presence-title">Global Presence, Local Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-global-presence-description">
              With offices in India and the USA, we provide round-the-clock support and combine local market knowledge with global technological expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-forestgreen rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid="text-india-office-title">
                  India Development Center
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="text-india-office-description">
                  Our primary development hub in Bangalore houses our core engineering team and serves as the center for innovation and technical excellence.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="text-saffron" size={16} />
                    <span data-testid="text-india-office-timezone">IST (GMT +5:30)</span>
                  </div>
                  <div className="text-muted-foreground" data-testid="text-india-office-specialization">
                    Specialization: Development, AI/ML, Data Analytics
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid="text-usa-office-title">
                  USA Business Office
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="text-usa-office-description">
                  Our Silicon Valley presence ensures close collaboration with North American clients and access to the latest technology trends and partnerships.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="text-saffron" size={16} />
                    <span data-testid="text-usa-office-timezone">PST (GMT -8:00)</span>
                  </div>
                  <div className="text-muted-foreground" data-testid="text-usa-office-specialization">
                    Specialization: Client Relations, Strategy, Partnerships
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-contact-cta-title">
              Let's Turn Your Vision Into Reality
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-contact-cta-description">
              Every great project starts with a conversation. Reach out today and let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                className="bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-300"
                data-testid="button-contact-cta-primary"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300"
                data-testid="button-contact-cta-secondary"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
