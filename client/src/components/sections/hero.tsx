import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { createSimpleWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp-utils";

const stats = [
  { value: 25, label: "Projects Completed", suffix: "+" },
  { value: 15, label: "Happy Clients", suffix: "+" },
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        const increment = stat.value / 100;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(interval);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 20);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mandala-pattern">
      <div className="absolute inset-0 geometric-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-saffron/20 to-navy/20 rounded-full floating-animation" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-forestgreen/20 to-gold/20 rounded-full floating-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-navy/20 to-saffron/20 rounded-full floating-animation" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="slide-in-bottom"
        >
          <h1 className="text-responsive-3xl font-bold font-serif mb-6 break-words">
            <span className="gradient-text" data-testid="text-hero-title-innovative">Innovative IT Solutions</span>
            <br />
            <span className="text-foreground" data-testid="text-hero-title-excellence">for Global Excellence</span>
          </h1>
          
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed break-words" data-testid="text-hero-description">
            Empowering small to medium businesses with modern software development, web applications, and digital solutions. We focus on delivering quality results that help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="bg-gradient-to-r from-saffron to-navy text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-start-project"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'm interested in starting a new project with your team. I'd like to discuss my requirements and get a quote.");
                openWhatsApp(whatsappUrl);
              }}
            >
              <Rocket className="mr-2" size={20} />
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-saffron text-saffron px-8 py-4 text-lg font-semibold hover:bg-saffron hover:text-white transition-all duration-300"
              data-testid="button-watch-demo"
              onClick={() => {
                const whatsappUrl = createSimpleWhatsAppMessage("Hi! I'd like to see a demo of your work and understand how you can help with my project.");
                openWhatsApp(whatsappUrl);
              }}
            >
              <Play className="mr-2" size={20} />
              Get Demo
            </Button>
          </div>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div 
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}-value`}
                >
                  {animatedStats[index]}{stat.suffix}
                </div>
                <div 
                  className="text-muted-foreground text-sm md:text-base"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}-label`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
