import { motion } from "framer-motion";
import { TrendingUp, Hospital, University, Car } from "lucide-react";

const projects = [
  {
    icon: TrendingUp,
    title: "Global E-commerce Platform",
    client: "Fortune 500 Retail Client",
    description: "Developed a multi-tenant e-commerce platform handling 10M+ daily transactions across 25 countries with real-time inventory management and AI-powered recommendations.",
    metrics: [
      { label: "Performance Improvement", value: "300%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Deployment Time", value: "8 months" }
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    gradient: "from-saffron to-navy"
  },
  {
    icon: Hospital,
    title: "Healthcare Management System",
    client: "International Healthcare Provider",
    description: "Built a comprehensive healthcare platform integrating patient records, telemedicine, and AI diagnostics, serving 500+ hospitals across multiple continents.",
    metrics: [
      { label: "Patient Satisfaction", value: "95%" },
      { label: "Processing Speed", value: "10x faster" },
      { label: "Compliance", value: "HIPAA/GDPR" }
    ],
    technologies: ["Angular", "Python", "Azure", "PostgreSQL"],
    gradient: "from-forestgreen to-navy"
  },
  {
    icon: University,
    title: "Fintech Trading Platform",
    client: "Leading Investment Bank",
    description: "Developed a high-frequency trading platform with microsecond latency, real-time risk management, and blockchain integration for institutional clients.",
    metrics: [
      { label: "Transaction Volume", value: "$5B+ daily" },
      { label: "Latency", value: "<100μs" },
      { label: "Uptime", value: "99.99%" }
    ],
    technologies: ["C++", "Java", "Kubernetes", "Redis"],
    gradient: "from-navy to-saffron"
  },
  {
    icon: Car,
    title: "Smart Logistics Platform",
    client: "Global Shipping Company",
    description: "Created an AI-powered logistics platform optimizing routes, predicting demand, and automating warehouse operations across 50+ countries.",
    metrics: [
      { label: "Route Optimization", value: "35%" },
      { label: "Fuel Savings", value: "25%" },
      { label: "Delivery Time", value: "-40%" }
    ],
    technologies: ["Vue.js", "Django", "GCP", "TensorFlow"],
    gradient: "from-gold to-forestgreen"
  }
];

const techColors = {
  "React": "bg-saffron/10 text-saffron",
  "Node.js": "bg-navy/10 text-navy", 
  "AWS": "bg-forestgreen/10 text-forestgreen",
  "MongoDB": "bg-gold/10 text-yellow-700",
  "Angular": "bg-saffron/10 text-saffron",
  "Python": "bg-navy/10 text-navy",
  "Azure": "bg-forestgreen/10 text-forestgreen", 
  "PostgreSQL": "bg-gold/10 text-yellow-700",
  "C++": "bg-saffron/10 text-saffron",
  "Java": "bg-navy/10 text-navy",
  "Kubernetes": "bg-forestgreen/10 text-forestgreen",
  "Redis": "bg-gold/10 text-yellow-700",
  "Vue.js": "bg-saffron/10 text-saffron",
  "Django": "bg-navy/10 text-navy",
  "GCP": "bg-forestgreen/10 text-forestgreen",
  "TensorFlow": "bg-gold/10 text-yellow-700"
};

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-muted/30 lotus-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-portfolio-title">Confidential Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
            Due to NDA agreements, we present anonymized case studies showcasing our expertise and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover-lift"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mr-4`}>
                  <project.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground" data-testid={`text-project-client-${index}`}>
                    {project.client}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between">
                    <span className="text-sm text-muted-foreground" data-testid={`text-metric-label-${index}-${metricIndex}`}>
                      {metric.label}
                    </span>
                    <span className="text-sm font-semibold text-forestgreen" data-testid={`text-metric-value-${index}-${metricIndex}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs ${techColors[tech as keyof typeof techColors] || 'bg-gray-100 text-gray-700'}`}
                    data-testid={`badge-tech-${index}-${techIndex}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
