import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReasonsCarousel } from "@/components/sections/ReasonsCarousel";
import { AdmissionBanner } from "@/components/sections/AdmissionBanner";
import { ParentFeatures } from "@/components/sections/ParentFeatures";
import { AlefValues } from "@/components/sections/AlefValues";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ReasonsCarousel />
        <AdmissionBanner />
        <ParentFeatures />
        <AlefValues />
        <TestimonialsCarousel />
        <FaqAccordion />
        <NewsGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
