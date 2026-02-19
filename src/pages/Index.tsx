import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import BookingSection from "@/components/landing/BookingSection";
import WhatsappSection from "@/components/landing/WhatsappSection";
import FinancialSection from "@/components/landing/FinancialSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full dark">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <DashboardShowcase />
        <BookingSection />
        <WhatsappSection />
        <FinancialSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;