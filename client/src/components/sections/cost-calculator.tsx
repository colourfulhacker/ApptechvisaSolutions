import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Smartphone, Globe, Cloud, Brain, Database, Shield, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { createWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

// Service categories with Indian market pricing
const serviceCategories = [
  {
    id: "web-development",
    name: "Web Development",
    icon: Globe,
    basePrice: 25000,
    description: "Custom websites and web applications",
    features: [
      { name: "Basic Website (5-10 pages)", price: 15000, duration: "2-3 weeks" },
      { name: "E-commerce Store", price: 45000, duration: "4-6 weeks" },
      { name: "Custom Web Application", price: 75000, duration: "6-10 weeks" },
      { name: "Enterprise Portal", price: 120000, duration: "8-12 weeks" }
    ]
  },
  {
    id: "mobile-development",
    name: "Mobile App Development",
    icon: Smartphone,
    basePrice: 35000,
    description: "iOS and Android mobile applications",
    features: [
      { name: "Simple Mobile App", price: 25000, duration: "3-4 weeks" },
      { name: "E-commerce Mobile App", price: 55000, duration: "6-8 weeks" },
      { name: "Social Media App", price: 85000, duration: "8-12 weeks" },
      { name: "Enterprise Mobile App", price: 120000, duration: "10-16 weeks" }
    ]
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    icon: Cloud,
    basePrice: 20000,
    description: "Cloud migration and infrastructure",
    features: [
      { name: "Cloud Migration", price: 30000, duration: "2-4 weeks" },
      { name: "DevOps Setup", price: 40000, duration: "3-5 weeks" },
      { name: "Microservices Architecture", price: 60000, duration: "6-8 weeks" },
      { name: "Cloud Security Audit", price: 25000, duration: "1-2 weeks" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: Brain,
    basePrice: 40000,
    description: "Artificial intelligence solutions",
    features: [
      { name: "Chatbot Development", price: 20000, duration: "2-3 weeks" },
      { name: "Data Analysis Dashboard", price: 35000, duration: "4-6 weeks" },
      { name: "Custom AI Model", price: 80000, duration: "8-12 weeks" },
      { name: "Computer Vision App", price: 100000, duration: "10-14 weeks" }
    ]
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    icon: Database,
    basePrice: 25000,
    description: "Business intelligence and analytics",
    features: [
      { name: "Basic Analytics Dashboard", price: 20000, duration: "2-3 weeks" },
      { name: "Business Intelligence Setup", price: 40000, duration: "4-6 weeks" },
      { name: "Real-time Analytics", price: 60000, duration: "6-8 weeks" },
      { name: "Big Data Processing", price: 80000, duration: "8-10 weeks" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    basePrice: 30000,
    description: "Security solutions and audits",
    features: [
      { name: "Security Audit", price: 15000, duration: "1-2 weeks" },
      { name: "Penetration Testing", price: 25000, duration: "2-3 weeks" },
      { name: "Security Implementation", price: 50000, duration: "4-6 weeks" },
      { name: "Compliance Management", price: 35000, duration: "3-4 weeks" }
    ]
  }
];

// Industry types with complexity multipliers
const industryTypes = [
  { id: "startup", name: "Startup", multiplier: 0.8, description: "Early-stage companies" },
  { id: "small-business", name: "Small Business", multiplier: 1.0, description: "Local businesses" },
  { id: "medium-business", name: "Medium Business", multiplier: 1.2, description: "Growing companies" },
  { id: "enterprise", name: "Enterprise", multiplier: 1.5, description: "Large organizations" },
  { id: "ecommerce", name: "E-commerce", multiplier: 1.3, description: "Online retail" },
  { id: "healthcare", name: "Healthcare", multiplier: 1.4, description: "Medical & health" },
  { id: "fintech", name: "Fintech", multiplier: 1.6, description: "Financial services" },
  { id: "education", name: "Education", multiplier: 1.1, description: "EdTech solutions" }
];

// Additional features that affect pricing
const additionalFeatures = [
  { id: "responsive-design", name: "Responsive Design", price: 5000, description: "Mobile-friendly design" },
  { id: "seo-optimization", name: "SEO Optimization", price: 8000, description: "Search engine optimization" },
  { id: "payment-integration", name: "Payment Integration", price: 12000, description: "Payment gateway setup" },
  { id: "user-authentication", name: "User Authentication", price: 10000, description: "Login/registration system" },
  { id: "admin-panel", name: "Admin Panel", price: 15000, description: "Content management system" },
  { id: "api-development", name: "API Development", price: 20000, description: "RESTful API services" },
  { id: "third-party-integration", name: "Third-party Integration", price: 10000, description: "External service integration" },
  { id: "performance-optimization", name: "Performance Optimization", price: 8000, description: "Speed and efficiency improvements" },
  { id: "security-features", name: "Advanced Security", price: 12000, description: "Enhanced security measures" },
  { id: "analytics-tracking", name: "Analytics & Tracking", price: 6000, description: "User behavior tracking" }
];

interface CalculatorState {
  selectedServices: string[];
  selectedIndustry: string;
  selectedFeatures: string[];
  projectTimeline: string;
  maintenanceRequired: boolean;
  totalCost: number;
}

export default function CostCalculator() {
  const [state, setState] = useState<CalculatorState>({
    selectedServices: [],
    selectedIndustry: "small-business",
    selectedFeatures: [],
    projectTimeline: "standard",
    maintenanceRequired: false,
    totalCost: 0
  });

  const [showResults, setShowResults] = useState(false);

  // Calculate total cost based on selections
  useEffect(() => {
    let total = 0;

    // Calculate service costs
    state.selectedServices.forEach(serviceId => {
      const service = serviceCategories.find(s => s.id === serviceId);
      if (service) {
        total += service.basePrice;
      }
    });

    // Calculate feature costs
    state.selectedFeatures.forEach(featureId => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });

    // Apply industry multiplier
    const industry = industryTypes.find(i => i.id === state.selectedIndustry);
    if (industry) {
      total *= industry.multiplier;
    }

    // Apply timeline multiplier
    const timelineMultipliers = {
      "rush": 1.5,
      "standard": 1.0,
      "flexible": 0.9
    };
    total *= timelineMultipliers[state.projectTimeline as keyof typeof timelineMultipliers] || 1.0;

    // Add maintenance cost if required
    if (state.maintenanceRequired) {
      total += total * 0.2; // 20% additional for maintenance
    }

    // Cap at 3,00,000 INR as requested
    total = Math.min(total, 300000);

    setState(prev => ({ ...prev, totalCost: Math.round(total) }));
  }, [state.selectedServices, state.selectedIndustry, state.selectedFeatures, state.projectTimeline, state.maintenanceRequired]);

  const handleServiceToggle = (serviceId: string) => {
    setState(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setState(prev => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter(id => id !== featureId)
        : [...prev.selectedFeatures, featureId]
    }));
  };

  const handleGetQuote = () => {
    const selectedServiceNames = state.selectedServices.map(id => 
      serviceCategories.find(s => s.id === id)?.name
    ).filter(Boolean);

    const selectedFeatureNames = state.selectedFeatures.map(id => 
      additionalFeatures.find(f => f.id === id)?.name
    ).filter(Boolean);

    const industry = industryTypes.find(i => i.id === state.selectedIndustry)?.name;

    const message = `Hi! I'm interested in getting a quote for my project.

Project Details:
• Services Required: ${selectedServiceNames.join(', ')}
• Industry: ${industry}
• Additional Features: ${selectedFeatureNames.join(', ')}
• Timeline: ${state.projectTimeline}
• Maintenance Required: ${state.maintenanceRequired ? 'Yes' : 'No'}

Estimated Cost: ₹${state.totalCost.toLocaleString('en-IN')}

I'd like to discuss this further and get a detailed proposal. Please contact me to schedule a consultation.

Thank you!`;

    const whatsappUrl = `https://wa.me/919647457831?text=${encodeURIComponent(message)}`;
    openWhatsApp(whatsappUrl);
  };

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron/5 via-background to-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-8 w-8 text-saffron mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold font-serif">
                <span className="gradient-text">Project Cost Calculator</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get an instant estimate for your project. Our transparent pricing is designed for the Indian market with competitive rates.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Transparent Pricing:</strong> All costs are calculated in real-time. No hidden fees. 
                Maximum project cost capped at ₹3,00,000 for your budget protection.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-saffron" />
                  Configure Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Industry Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Industry Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {industryTypes.map((industry) => (
                      <Button
                        key={industry.id}
                        variant={state.selectedIndustry === industry.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setState(prev => ({ ...prev, selectedIndustry: industry.id }))}
                        className="justify-start text-left h-auto p-3"
                      >
                        <div>
                          <div className="font-medium">{industry.name}</div>
                          <div className="text-xs text-muted-foreground">{industry.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Services Required</label>
                  <div className="space-y-2">
                    {serviceCategories.map((service) => (
                      <div
                        key={service.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          state.selectedServices.includes(service.id)
                            ? 'border-saffron bg-saffron/5'
                            : 'border-border hover:border-saffron/50'
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <service.icon className="h-5 w-5 mr-3 text-saffron" />
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-sm text-muted-foreground">{service.description}</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-saffron">
                            {formatCurrency(service.basePrice)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Additional Features</label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {additionalFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-2 rounded border cursor-pointer transition-all ${
                          state.selectedFeatures.includes(feature.id)
                            ? 'border-saffron bg-saffron/5'
                            : 'border-border hover:border-saffron/50'
                        }`}
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">{feature.name}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                          <div className="text-sm font-medium text-saffron">
                            +{formatCurrency(feature.price)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Project Timeline</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "rush", name: "Rush (1-2 months)", multiplier: "1.5x" },
                      { id: "standard", name: "Standard (2-4 months)", multiplier: "1.0x" },
                      { id: "flexible", name: "Flexible (4+ months)", multiplier: "0.9x" }
                    ].map((timeline) => (
                      <Button
                        key={timeline.id}
                        variant={state.projectTimeline === timeline.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setState(prev => ({ ...prev, projectTimeline: timeline.id }))}
                        className="text-center"
                      >
                        <div>
                          <div className="text-xs font-medium">{timeline.name}</div>
                          <div className="text-xs text-muted-foreground">{timeline.multiplier}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Maintenance */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="maintenance"
                    checked={state.maintenanceRequired}
                    onChange={(e) => setState(prev => ({ ...prev, maintenanceRequired: e.target.checked }))}
                    className="rounded border-border"
                  />
                  <label htmlFor="maintenance" className="text-sm">
                    Include 6 months maintenance & support (+20%)
                  </label>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-fit sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Project Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-saffron mb-2">
                    {formatCurrency(state.totalCost)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estimated project cost
                  </div>
                  {state.totalCost >= 300000 && (
                    <div className="text-xs text-orange-500 mt-2">
                      ⚠️ Maximum cost reached (₹3,00,000 cap applied)
                    </div>
                  )}
                </div>

                {state.selectedServices.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Selected Services:</h4>
                    <div className="space-y-2">
                      {state.selectedServices.map(serviceId => {
                        const service = serviceCategories.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between text-sm">
                            <span>{service.name}</span>
                            <span className="text-saffron">{formatCurrency(service.basePrice)}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {state.selectedFeatures.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Additional Features:</h4>
                    <div className="space-y-2">
                      {state.selectedFeatures.map(featureId => {
                        const feature = additionalFeatures.find(f => f.id === featureId);
                        return feature ? (
                          <div key={featureId} className="flex justify-between text-sm">
                            <span>{feature.name}</span>
                            <span className="text-saffron">+{formatCurrency(feature.price)}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Industry Multiplier ({industryTypes.find(i => i.id === state.selectedIndustry)?.name})</span>
                    <span className="text-saffron">
                      {industryTypes.find(i => i.id === state.selectedIndustry)?.multiplier}x
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Timeline ({state.projectTimeline})</span>
                    <span className="text-saffron">
                      {state.projectTimeline === 'rush' ? '1.5x' : state.projectTimeline === 'flexible' ? '0.9x' : '1.0x'}
                    </span>
                  </div>
                  {state.maintenanceRequired && (
                    <div className="flex justify-between text-sm">
                      <span>Maintenance & Support</span>
                      <span className="text-saffron">+20%</span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleGetQuote}
                  className="w-full bg-gradient-to-r from-saffron to-navy text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Detailed Quote via WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    This is an estimate. Final pricing may vary based on detailed requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
