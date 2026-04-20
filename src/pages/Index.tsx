import Layout from "@/components/Layout";

// ── Home page sections ────────────────────────────────────────────────────────
import HeroSlider              from "@/components/home/HeroSlider";
import StatsBar                from "@/components/home/StatsBar";
import ComingSoonSection       from "@/components/home/ComingSoonSection";
import ServicesSection         from "@/components/home/ServicesSection";
import ThemedHolidaysSection   from "@/components/home/ThemedHolidaysSection";
import FeaturedDestinations    from "@/components/home/FeaturedDestinations";
import WhyChooseUs             from "@/components/home/WhyChooseUs";
import InternationalAdventures from "@/components/home/InternationalAdventures";
import TestimonialsSection     from "@/components/home/TestimonialsSection";
import CTASection              from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <StatsBar />
    <ComingSoonSection />
    <ServicesSection />
    <ThemedHolidaysSection />
    <FeaturedDestinations />
    <WhyChooseUs />
    <InternationalAdventures />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

export default Index;
