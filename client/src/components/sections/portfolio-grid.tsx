import { motion } from "framer-motion";
import { TrendingUp, Hospital, University, Car } from "lucide-react";

const projects = [
  {
    id: "PRJ-2024-001",
    icon: TrendingUp,
    title: "E-commerce Platform Modernization",
    client: "Regional Retail Chain",
    description: "Modernized legacy e-commerce system for a mid-size retail chain, implementing modern architecture with real-time inventory sync and mobile-first design. Project included migration from legacy PHP system to React-based platform.",
    metrics: [
      { label: "Page Load Speed", value: "65% faster" },
      { label: "Mobile Conversion", value: "+40%" },
      { label: "Development Time", value: "6 months" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    gradient: "from-saffron to-navy",
    caseStudy: "Replaced outdated PHP system with modern React architecture, implementing real-time inventory management and responsive design. Resulted in significant performance improvements and better user experience."
  },
  {
    id: "PRJ-2024-002", 
    icon: Hospital,
    title: "Patient Management System",
    client: "Local Healthcare Clinic",
    description: "Developed a comprehensive patient management system for a growing healthcare clinic, including appointment scheduling, patient records, and basic telemedicine features. Ensured HIPAA compliance throughout development.",
    metrics: [
      { label: "Appointment Efficiency", value: "+50%" },
      { label: "Patient Satisfaction", value: "92%" },
      { label: "Data Security", value: "HIPAA Compliant" }
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    gradient: "from-forestgreen to-navy",
    caseStudy: "Built from scratch using Vue.js frontend and Python backend, implementing secure patient data handling and appointment management. System handles 200+ patients with 99.9% uptime."
  },
  {
    id: "PRJ-2024-003",
    icon: University,
    title: "Educational Learning Platform",
    client: "Online Education Startup",
    description: "Created a learning management system for an online education startup, featuring course management, student progress tracking, and interactive content delivery. Integrated payment processing and certificate generation.",
    metrics: [
      { label: "Student Engagement", value: "+60%" },
      { label: "Course Completion", value: "78%" },
      { label: "Platform Uptime", value: "99.5%" }
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
    gradient: "from-navy to-saffron",
    caseStudy: "Developed full-stack learning platform with video streaming, quiz system, and progress tracking. Integrated Stripe for payments and automated certificate generation upon course completion."
  },
  {
    id: "PRJ-2024-004",
    icon: Car,
    title: "Fleet Management System",
    client: "Local Delivery Service",
    description: "Built a fleet management solution for a local delivery company, including route optimization, driver tracking, and delivery confirmation. Implemented real-time GPS tracking and automated dispatch system.",
    metrics: [
      { label: "Route Efficiency", value: "+25%" },
      { label: "Fuel Savings", value: "18%" },
      { label: "Delivery Accuracy", value: "96%" }
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    gradient: "from-gold to-forestgreen",
    caseStudy: "Created mobile app for drivers with React Native and backend API for route optimization. Integrated Google Maps for real-time tracking and automated dispatch based on location and capacity."
  },
  {
    id: "PRJ-2024-005",
    icon: TrendingUp,
    title: "Restaurant POS System",
    client: "Local Restaurant Chain",
    description: "Developed a point-of-sale system for a small restaurant chain with 3 locations. Features include order management, inventory tracking, staff scheduling, and sales analytics. Integrated with existing payment processors.",
    metrics: [
      { label: "Order Processing", value: "3x faster" },
      { label: "Inventory Accuracy", value: "95%" },
      { label: "Implementation", value: "2 months" }
    ],
    technologies: ["React", "Express.js", "SQLite", "Socket.io"],
    gradient: "from-saffron to-forestgreen",
    caseStudy: "Built custom POS system replacing outdated cash registers. Implemented real-time order updates between kitchen and front-of-house, with automated inventory tracking and sales reporting."
  },
  {
    id: "PRJ-2024-006",
    icon: Hospital,
    title: "Inventory Management System",
    client: "Small Manufacturing Company",
    description: "Created an inventory management system for a small manufacturing company, tracking raw materials, work-in-progress, and finished goods. Includes supplier management and automated reorder notifications.",
    metrics: [
      { label: "Inventory Accuracy", value: "98%" },
      { label: "Stockout Reduction", value: "70%" },
      { label: "Cost Savings", value: "22%" }
    ],
    technologies: ["Angular", "Python", "PostgreSQL", "Cron Jobs"],
    gradient: "from-forestgreen to-gold",
    caseStudy: "Developed comprehensive inventory tracking system with barcode scanning, automated reorder points, and supplier integration. Reduced manual tracking time by 80% and improved inventory accuracy significantly."
  }
];

const techColors = {
  "React": "bg-saffron/10 text-saffron",
  "Node.js": "bg-navy/10 text-navy", 
  "PostgreSQL": "bg-forestgreen/10 text-forestgreen",
  "Redis": "bg-gold/10 text-yellow-700",
  "Vue.js": "bg-saffron/10 text-saffron",
  "Python": "bg-navy/10 text-navy",
  "Docker": "bg-forestgreen/10 text-forestgreen", 
  "Express.js": "bg-gold/10 text-yellow-700",
  "MongoDB": "bg-saffron/10 text-saffron",
  "Stripe API": "bg-navy/10 text-navy",
  "React Native": "bg-forestgreen/10 text-forestgreen",
  "Google Maps API": "bg-gold/10 text-yellow-700",
  "SQLite": "bg-saffron/10 text-saffron",
  "Socket.io": "bg-navy/10 text-navy",
  "Angular": "bg-forestgreen/10 text-forestgreen",
  "Cron Jobs": "bg-gold/10 text-yellow-700"
};

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-muted/30 lotus-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-portfolio-title">Our Recent Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
            Real projects with real results. We work with businesses of all sizes to deliver innovative technology solutions that drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground" data-testid={`text-project-id-${index}`}>
                      {project.id}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground" data-testid={`text-project-client-${index}`}>
                    {project.client}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Case Study:</h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-project-case-study-${index}`}>
                  {project.caseStudy}
                </p>
              </div>
              
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
