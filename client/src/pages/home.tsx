import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero-section";
import SocialProofBanner from "@/components/sections/social-proof-banner";
import BookDetailsSection from "@/components/sections/book-details-section";
import ReviewsSection from "@/components/sections/reviews-section";
import AuthorSection from "@/components/sections/author-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import DisclaimerSection from "@/components/sections/disclaimer-section";
import Footer from "@/components/footer";
import FreeChapterModal from "@/components/modals/free-chapter-modal";
import ReviewModal from "@/components/modals/review-modal";

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Trapped In The Gut - Break Free From IBS Forever | Gershom Phiri";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trapped In The Gut - The definitive guide to understanding and overcoming IBS and functional gut disorders. Download your copy today for $9.99');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofBanner />
        <BookDetailsSection />
        <ReviewsSection />
        <AuthorSection />
        <FinalCTASection />
        <DisclaimerSection />
      </main>
      <Footer />
      <FreeChapterModal />
      <ReviewModal />
    </div>
  );
}
