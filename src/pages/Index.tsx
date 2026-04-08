import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RisksSection from "@/components/RisksSection";
import GuideSection from "@/components/GuideSection";
import EthicsSection from "@/components/EthicsSection";
import QuizSection from "@/components/QuizSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RisksSection />
      <GuideSection />
      <EthicsSection />
      <QuizSection />
      <FooterSection />
    </div>
  );
};

export default Index;
