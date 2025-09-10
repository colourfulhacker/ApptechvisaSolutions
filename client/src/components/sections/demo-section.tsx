import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, PlaneTakeoff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertDemoRequest } from "@shared/schema";

const benefits = [
  {
    title: "No Commitment Required",
    description: "Experience our quality and expertise risk-free before making any investment decisions."
  },
  {
    title: "Tailored Solutions", 
    description: "Every demo is customized to your specific industry and business requirements."
  },
  {
    title: "Expert Consultation",
    description: "Get valuable insights and recommendations from our seasoned technical experts."
  },
  {
    title: "Quick Turnaround",
    description: "Receive your custom demo within 5-7 business days of initial consultation."
  }
];

const industries = [
  "Healthcare",
  "Finance", 
  "E-commerce",
  "Education",
  "Manufacturing",
  "Logistics",
  "Other"
];

export default function DemoSection() {
  const [formData, setFormData] = useState<InsertDemoRequest>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    projectDescription: ""
  });

  const { toast } = useToast();

  const demoMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      return apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "Our team will contact you within 24 hours to schedule your free demo.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        industry: "",
        projectDescription: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertDemoRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron/10 via-background to-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-demo-title">Experience Before You Invest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-demo-description">
            Get a hands-on demonstration of our capabilities with a free prototype tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-6" data-testid="text-demo-benefits-title">Why Choose Our Free Demo?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-8 h-8 bg-forestgreen rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Check className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center" data-testid="text-demo-form-title">
              Request Your Free Demo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Business Email *</label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <Select onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger data-testid="select-industry">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea
                  rows={4}
                  placeholder="Briefly describe your project requirements..."
                  value={formData.projectDescription || ""}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  data-testid="textarea-project-description"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-saffron to-navy text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                disabled={demoMutation.isPending}
                data-testid="button-submit-demo-request"
              >
                <PlaneTakeoff className="mr-2" size={16} />
                {demoMutation.isPending ? "Submitting..." : "Get My Free Demo"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
