import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Marquee />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
