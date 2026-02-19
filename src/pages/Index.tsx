import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AIFeatures from "@/components/AIFeatures";
import StudyGoals from "@/components/StudyGoals";
import TopColleges from "@/components/TopColleges";
import ExplorePrograms from "@/components/ExplorePrograms";
import MentorshipSection from "@/components/MentorshipSection";
import StatsBar from "@/components/StatsBar";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <AIFeatures />
        <StudyGoals />
        <StatsBar />
        <TopColleges />
        <ExplorePrograms />
        <MentorshipSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
