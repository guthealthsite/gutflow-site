import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ReviewModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitReview = useMutation({
    mutationFn: async (data: { name: string; email: string; rating: number; comment: string }) => {
      return apiRequest("POST", "/api/reviews", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });
      toast({
        title: "Thank you!",
        description: "Your review has been submitted successfully.",
      });
      setName("");
      setEmail("");
      setRating(5);
      setComment("");
      hideReviewModal();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const hideReviewModal = () => {
    const modal = document.getElementById('reviewModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !comment.trim()) return;
    
    submitReview.mutate({
      name: name.trim(),
      email: email.trim(),
      rating,
      comment: comment.trim(),
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideReviewModal();
    }
  };

  const renderStarRating = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      const isActive = starValue <= (hoveredRating || rating);
      
      return (
        <button
          key={i}
          type="button"
          className={`text-2xl transition-colors focus-ring ${
            isActive ? 'text-yellow-400' : 'text-gray-300'
          } hover:text-yellow-400`}
          onClick={() => setRating(starValue)}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          <Star size={24} className={isActive ? 'fill-current' : ''} />
        </button>
      );
    });
  };

  return (
    <div 
      id="reviewModal" 
      className="fixed inset-0 bg-black bg-opacity-50 hidden z-50"
      onClick={handleBackdropClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="medical-card max-w-lg w-full elevated-shadow">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-primary premium-heading">Share Your Experience</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={hideReviewModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6 premium-text">
              Your honest review helps others who are struggling. Real experiences matter more than marketing.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reviewName" className="text-sm font-medium text-foreground">Your Name</Label>
                  <Input
                    id="reviewName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="focus-ring mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="reviewEmail" className="text-sm font-medium text-foreground">Your Email</Label>
                  <Input
                    id="reviewEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="focus-ring mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-foreground">Rating</Label>
                <div className="flex space-x-1 mt-2">
                  {renderStarRating()}
                </div>
              </div>
              
              <div>
                <Label htmlFor="reviewComment" className="text-sm font-medium text-foreground">Your Experience</Label>
                <Textarea
                  id="reviewComment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How did this book help you? What difference did it make? Be specific - your story could help someone else..."
                  required
                  className="focus-ring premium-text mt-1"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="btn-primary flex-1"
                  disabled={submitReview.isPending}
                >
                  {submitReview.isPending ? "Submitting..." : "Share Review"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={hideReviewModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
