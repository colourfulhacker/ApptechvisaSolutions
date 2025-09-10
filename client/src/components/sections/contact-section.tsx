import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Clock, Headphones, Mail, Phone, MessageSquare, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const budgetRanges = [
  "$10K - $25K",
  "$25K - $50K", 
  "$50K - $100K",
  "$100K+"
];

const services = [
  "Web Development",
  "Mobile Apps",
  "AI/ML",
  "Cloud Solutions", 
  "DevOps",
  "Consulting"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    services: [] as string[],
    message: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    const whatsappUrl = createWhatsAppMessage(formData);
    openWhatsApp(whatsappUrl);
    
    toast({
      title: "Opening WhatsApp",
      description: "You'll be redirected to WhatsApp to send your message.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...(prev.services || []), service]
        : (prev.services || []).filter(s => s !== service)
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy/5 via-background to-saffron/5 geometric-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-contact-title">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Ready to transform your business with innovative technology solutions? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
              data-testid="card-contact-offices"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Our Offices</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground" data-testid="text-office-india-title">Main Office</div>
                  <div data-testid="text-office-india-location">5QGG+4QP, Rampurhat</div>
                  <div data-testid="text-office-india-description">West Bengal 731224, India</div>
                </div>
                <div>
                  <div className="font-medium text-foreground" data-testid="text-office-global-title">Global Services</div>
                  <div data-testid="text-office-global-location">Worldwide Clients</div>
                  <div data-testid="text-office-global-description">Remote & On-site Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
              data-testid="card-business-hours"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-forestgreen to-gold rounded-lg flex items-center justify-center mr-3">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span data-testid="text-hours-weekday">10:00 AM - 7:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span data-testid="text-hours-saturday">10:00 AM - 5:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span data-testid="text-hours-sunday">Emergency Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
              data-testid="card-quick-connect"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-navy to-saffron rounded-lg flex items-center justify-center mr-3">
                  <Headphones className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Quick Connect</h3>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-foreground mb-2">Primary Contact:</div>
                <a 
                  href="mailto:apptechvisa@gmail.com" 
                  className="flex items-center text-sm text-muted-foreground hover:text-saffron transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="mr-2" size={16} />
                  📧 apptechvisa@gmail.com
                </a>
                <div className="text-sm font-medium text-foreground mb-2 mt-4">Business Inquiries:</div>
                <a 
                  href="mailto:info@apptechvisasolutions.in" 
                  className="flex items-center text-sm text-muted-foreground hover:text-saffron transition-colors"
                  data-testid="link-email-info"
                >
                  <Mail className="mr-2" size={16} />
                  📧 info@apptechvisasolutions.in
                </a>
                <a 
                  href="tel:+919647457831" 
                  className="flex items-center text-sm text-muted-foreground hover:text-saffron transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="mr-2" size={16} />
                  +91 9647457831
                </a>
                <a 
                  href="https://wa.me/919647457831?text=Hi! I'm interested in your IT services. Please contact me to discuss my project requirements." 
                  className="flex items-center text-sm text-muted-foreground hover:text-saffron transition-colors"
                  data-testid="link-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2" size={16} />
                  WhatsApp Support
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone || ""}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      data-testid="input-contact-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger data-testid="select-budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company || ""}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    data-testid="input-contact-company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Services Interested In</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={(formData.services || []).includes(service)}
                          onCheckedChange={(checked) => handleServiceToggle(service, checked as boolean)}
                          data-testid={`checkbox-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                        <label 
                          htmlFor={service} 
                          className="text-sm cursor-pointer"
                          data-testid={`label-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    data-testid="textarea-contact-message"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                    required
                    data-testid="checkbox-terms"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-saffron to-navy text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    data-testid="button-send-message"
                  >
                    <MessageSquare className="mr-2" size={16} />
                    Send via WhatsApp
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                    data-testid="button-schedule-call"
                    onClick={() => {
                      const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'd like to schedule a call to discuss my project requirements. Please let me know your availability.");
                      openWhatsApp(whatsappUrl);
                    }}
                  >
                    <Calendar className="mr-2" size={16} />
                    Schedule Call
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
