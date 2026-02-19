import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StudyGoals from "@/components/StudyGoals";
import TopColleges from "@/components/TopColleges";
import ExplorePrograms from "@/components/ExplorePrograms";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StudyGoals />
        <StatsBar />
        <TopColleges />
        <ExplorePrograms />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
