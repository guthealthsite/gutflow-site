import { useQuery } from "@tanstack/react-query";
import { Star, MessageSquare } from "lucide-react";
import { type Review } from "@shared/schema";

export default function ReviewsSection() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const submitReview = () => {
    const modal = document.getElementById('reviewModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 premium-heading">
            Real Stories From Real People
          </h2>
          <p className="text-xl text-muted-foreground premium-text">
            Not paid testimonials. Genuine experiences from those who found their path to healing.
          </p>
        </div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="medical-card h-64 loading-shimmer"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews?.map((review) => (
              <div key={review.id} className="medical-card transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Verified</span>
                </div>
                <blockquote className="text-muted-foreground mb-4 italic premium-text leading-relaxed">
                  "{review.comment}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">- {review.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(review.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Review Submission - Targeting Community Builders & Content Creators */}
        <div className="mt-16 text-center">
          <div className="medical-card max-w-md mx-auto p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Share Your Experience</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your story could help someone else find hope. Real experiences matter more than marketing.
            </p>
            <button
              onClick={submitReview}
              className="btn-primary w-full"
            >
              <MessageSquare className="inline mr-2" size={16} />
              Write Your Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
