import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Rocket, Users, Award, ChartLine, Home, Star, Globe } from "lucide-react";

const internshipFeatures = [
  { icon: Users, text: "Mentorship from industry experts" },
  { icon: Award, text: "Professional certification programs" },
  { icon: Users, text: "Latest technology stack exposure" },
  { icon: Users, text: "Potential full-time conversion" }
];

const positions = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote • 5+ years experience",
    salary: "₹15-25L"
  },
  {
    title: "AI/ML Engineer",
    location: "Hybrid • 3+ years experience", 
    salary: "₹20-35L"
  },
  {
    title: "DevOps Architect",
    location: "Remote • 7+ years experience",
    salary: "₹25-40L"
  },
  {
    title: "Mobile App Developer",
    location: "Remote • 4+ years experience",
    salary: "₹12-22L"
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work with clients from 15+ countries"
  },
  {
    icon: ChartLine,
    title: "Career Growth", 
    description: "Structured learning & advancement paths"
  },
  {
    icon: Home,
    title: "Work-Life Balance",
    description: "Flexible hours & remote options"
  },
  {
    icon: Star,
    title: "Innovation Culture",
    description: "Cutting-edge technology & creative freedom"
  }
];

export default function CareersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="gradient-text" data-testid="text-careers-title">Join Our Innovation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-careers-description">
            Be part of cutting-edge projects and accelerate your career with real-world experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internship Program */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-saffron/10 to-navy/10 rounded-xl p-8"
            data-testid="card-internship-program"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron to-navy rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-internship-title">Live Project Internships</h3>
            </div>
            
            <p className="text-muted-foreground mb-6" data-testid="text-internship-description">
              Work on real client projects alongside senior developers. Gain hands-on experience with Fortune 500 clients while contributing to meaningful solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              {internshipFeatures.map((feature, index) => (
                <div key={index} className="flex items-center" data-testid={`internship-feature-${index}`}>
                  <feature.icon className="text-forestgreen mr-3" size={20} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold gradient-text" data-testid="text-internship-duration">6-12</div>
                <div className="text-sm text-muted-foreground">Months Duration</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold gradient-text" data-testid="text-internship-stipend">₹25K+</div>
                <div className="text-sm text-muted-foreground">Monthly Stipend</div>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-saffron to-navy text-white font-semibold hover:shadow-lg transition-all duration-300"
              data-testid="button-apply-internship"
            >
              Apply for Internship
            </Button>
          </motion.div>

          {/* Full-time Positions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-forestgreen/10 to-gold/10 rounded-xl p-8"
            data-testid="card-fulltime-positions"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forestgreen to-gold rounded-lg flex items-center justify-center mr-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-fulltime-title">Full-time Opportunities</h3>
            </div>
            
            <p className="text-muted-foreground mb-6" data-testid="text-fulltime-description">
              Join our team of passionate developers, designers, and innovators working on transformative projects for global clients.
            </p>

            <div className="space-y-4 mb-8">
              {positions.map((position, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-lg p-4"
                  data-testid={`position-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold" data-testid={`text-position-title-${index}`}>
                        {position.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-position-location-${index}`}>
                        {position.location}
                      </p>
                    </div>
                    <div className="text-forestgreen font-semibold" data-testid={`text-position-salary-${index}`}>
                      {position.salary}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline"
              className="w-full border-2 border-forestgreen text-forestgreen hover:bg-forestgreen hover:text-white transition-all duration-300"
              data-testid="button-view-all-positions"
            >
              View All Positions
            </Button>
          </motion.div>
        </div>

        {/* Company Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-xl p-8"
          data-testid="section-company-benefits"
        >
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-benefits-title">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
