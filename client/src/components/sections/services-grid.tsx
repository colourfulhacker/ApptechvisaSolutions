import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Brain, Database, Shield, Check } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    features: ["React Native & Flutter", "iOS & Android Native", "Progressive Web Apps"],
    gradient: "from-saffron to-navy"
  },
  {
    icon: Globe,
    title: "Web Development", 
    description: "Scalable web applications built with modern frameworks and technologies for optimal performance and user engagement.",
    features: ["React, Next.js, Vue.js", "Node.js, Python, Java", "E-commerce Solutions"],
    gradient: "from-forestgreen to-navy"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Comprehensive cloud migration and infrastructure services to enhance scalability and reduce operational costs.",
    features: ["AWS, Azure, Google Cloud", "DevOps & CI/CD", "Microservices Architecture"],
    gradient: "from-navy to-saffron"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and drive insights.",
    features: ["Custom AI Models", "Natural Language Processing", "Computer Vision"],
    gradient: "from-gold to-forestgreen"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
    features: ["Big Data Processing", "Business Intelligence", "Real-time Analytics"],
    gradient: "from-saffron to-forestgreen"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management"],
    gradient: "from-navy to-gold"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-services-title">Our Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive IT solutions that transform businesses and drive innovation across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover-lift"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.description}
              </p>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center"
                    data-testid={`text-service-feature-${service.title.toLowerCase().replace(/\s+/g, '-')}-${featureIndex}`}
                  >
                    <Check className="text-forestgreen mr-2 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
