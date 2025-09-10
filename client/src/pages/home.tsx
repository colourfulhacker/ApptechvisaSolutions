import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import DemoSection from "@/components/sections/demo-section";
import CareersSection from "@/components/sections/careers-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PortfolioGrid />
      <DemoSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
