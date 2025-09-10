import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, CheckCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const termsSections = [
  {
    icon: CheckCircle,
    title: "Service Agreement",
    content: [
      "Services are provided based on agreed project specifications and timelines",
      "All deliverables will meet the quality standards outlined in the project proposal",
      "Client is responsible for providing accurate requirements and timely feedback",
      "We reserve the right to modify project scope with client approval",
      "Payment terms are as specified in individual project agreements"
    ]
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      "Client retains ownership of their existing intellectual property",
      "Custom code and solutions developed for clients become client property upon full payment",
      "We retain rights to general methodologies, frameworks, and reusable components",
      "Open source components used in projects remain under their respective licenses",
      "Client grants us permission to use project work for portfolio and marketing purposes"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitations & Liability",
    content: [
      "Our liability is limited to the total amount paid for the specific project",
      "We are not liable for indirect, incidental, or consequential damages",
      "Client is responsible for data backups and security measures",
      "We provide services 'as is' without warranties beyond those explicitly stated",
      "Force majeure events may affect project timelines and deliverables"
    ]
  }
];

const paymentTerms = [
  "Payment schedules are outlined in individual project agreements",
  "Invoices are due within 15 days of receipt unless otherwise specified",
  "Late payments may incur additional charges as per agreement",
  "Project work may be suspended for overdue payments",
  "Refunds are provided only as specified in the project agreement"
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

export default function Terms() {
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
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-saffron mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold font-serif">
                <span className="gradient-text">Terms of Service</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              These terms govern the use of our services and the relationship between Apptechvisa and our clients.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2025 | <strong>Effective Date:</strong> January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {termsSections.map((section, index) => (
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

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Payment Terms</h2>
              <ul className="space-y-3 text-muted-foreground">
                {paymentTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-saffron mr-3 mt-1">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Project Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-saffron/10 to-navy/10 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Client Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Provide clear and detailed project requirements</li>
                    <li>• Respond to queries and feedback requests promptly</li>
                    <li>• Provide necessary access to systems and resources</li>
                    <li>• Make timely payments as per agreement</li>
                    <li>• Test and approve deliverables within agreed timeframes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Our Commitments</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Deliver high-quality solutions as per specifications</li>
                    <li>• Maintain regular communication and project updates</li>
                    <li>• Provide support during the project lifecycle</li>
                    <li>• Respect client confidentiality and data security</li>
                    <li>• Deliver projects within agreed timelines and budget</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Questions About Terms?</h2>
              <p className="text-muted-foreground text-center mb-8">
                If you have any questions about these terms of service or need clarification on any points, please contact us.
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
                    const whatsappUrl = createSimpleWhatsAppMessage("Hi! I have a question about your terms of service. Could you please clarify some points for me?");
                    openWhatsApp(whatsappUrl);
                  }}
                >
                  Contact Us About Terms
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
            These terms of service may be updated from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </div>
      </section>
    </div>
  );
}
