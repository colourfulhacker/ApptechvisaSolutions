import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const privacySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting us (name, email, phone number)",
      "Project requirements and business information shared during consultations",
      "Communication records and correspondence",
      "Website usage data and analytics (anonymized)",
      "Technical information necessary for service delivery"
    ]
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our IT services",
      "To communicate about your projects and respond to inquiries",
      "To send project updates and important notifications",
      "To process payments and maintain business records",
      "To comply with legal and regulatory requirements"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: [
      "We implement appropriate security measures to protect your data",
      "Your information is stored securely and access is restricted",
      "We do not sell, trade, or rent your personal information to third parties",
      "Data is retained only as long as necessary for business purposes",
      "We comply with applicable data protection laws and regulations"
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["apptechvisa@gmail.com", "info@apptechvisasolutions.in"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9647457831"]
  }
];

export default function Privacy() {
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
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-saffron mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold font-serif">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2025 | <strong>Effective Date:</strong> January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-saffron mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Request access to your personal data</li>
                    <li>• Request correction of inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to processing of your data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Data Portability</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Receive your data in a structured format</li>
                    <li>• Transfer your data to another service</li>
                    <li>• Withdraw consent at any time</li>
                    <li>• File a complaint with authorities</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-saffron/10 to-navy/10 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Questions About Privacy?</h2>
              <p className="text-muted-foreground text-center mb-8">
                If you have any questions about this privacy policy or how we handle your data, please contact us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center">
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contact.title}</h3>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const whatsappUrl = createSimpleWhatsAppMessage("Hi! I have a question about your privacy policy and how you handle personal data. Could you please provide more information?");
                    openWhatsApp(whatsappUrl);
                  }}
                >
                  Contact Us About Privacy
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            This privacy policy may be updated from time to time. We will notify you of any significant changes by posting the new policy on this page.
          </p>
        </div>
      </section>
    </div>
  );
}
