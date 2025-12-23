import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import FeatureCards from "../sections/FeatureCards";
import Features from "../sections/Features";
import FeaturesGrid from "../sections/FeaturesGrid";
import BottomSection from "../sections/BottomSection";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testinomials";
import WhyChooseUs from "../sections/WhyChooseUs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export function LandingPage (){
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-pink-50 overflow-x-hidden">
      <Header />
      <main className="relative px-4 sm:px-60 py-8 sm:py-12 overflow-x-hidden">
        <Hero />
        <Stats />
        <FeatureCards />
        <Features />
        <FeaturesGrid />
        <BottomSection />
        <Pricing />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}