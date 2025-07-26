import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function FreeChapterModal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const subscribeEmail = useMutation({
    mutationFn: async (data: { email: string; name?: string }) => {
      return apiRequest("POST", "/api/subscribe", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Check your email for the free chapter download link.",
      });
      setEmail("");
      setName("");
      hideFreeChapter();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const hideFreeChapter = () => {
    const modal = document.getElementById('freeChapterModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    subscribeEmail.mutate({
      email,
      name: name || undefined,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideFreeChapter();
    }
  };

  return (
    <div 
      id="freeChapterModal" 
      className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-card rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto modal-content premium-shadow">
          <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-primary premium-heading">Free Chapter Preview</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={hideFreeChapter}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </Button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Email Capture Form */}
            <div className="bg-muted rounded-lg p-6 premium-shadow">
              <h4 className="text-lg font-semibold mb-4 premium-heading">Get Your Free Chapter</h4>
              <p className="text-muted-foreground mb-4 premium-text">
                Enter your email to receive the complete first chapter and join thousands of others on their journey to freedom.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="focus-ring"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="focus-ring"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={subscribeEmail.isPending}
                >
                  {subscribeEmail.isPending ? "Sending..." : "Get Free Chapter"}
                </Button>
              </form>
            </div>

            {/* Chapter Preview Content */}
            <div className="space-y-4 text-foreground">
              <h4 className="text-xl font-bold premium-heading">Chapter 1: Into The World Of Functional Disorders</h4>
              <blockquote className="italic border-l-4 border-primary pl-4 text-muted-foreground premium-text">
                "Patients described IBS not only as symptoms (predominantly abdominal pain) but mainly as it affects daily function, thoughts, feelings, and behaviors. Common responses included uncertainty and unpredictability with loss of freedom, spontaneity, and social contacts, as well as feelings of fearfulness"
                <br /><span className="text-sm">-Professor Drossman</span>
              </blockquote>
              
              <h5 className="text-lg font-semibold premium-heading">Jane's Disappointment</h5>
              <p className="premium-text">Food and traveling were my biggest passions. My earliest memories take me back to times when it was my greatest delight to aid my mum in the kitchen. At meal preparation times, I would gaze in wonder at mum's seemingly unmatched skill to cut, sieve, mix, roast, boil, or fry different ingredients to come up with the most pleasing dishes to see...</p>
              <p className="premium-text">At 25, my passion was still burning hot. A big shift was soon to take shape. I was at a crossroads. On one path lay the route to further my academics, which promised a prestigious and high-paying office job; on the other, my two passions...</p>
              <p className="premium-text text-muted-foreground italic">[Preview continues with excerpts from Jane's harrowing journey...]</p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6 premium-shadow">
                <p className="text-center text-accent font-semibold premium-text">
                  Want to read the complete story and discover the path to healing?
                </p>
                <div className="text-center mt-4">
                  <a
                    href="https://memesioliver.gumroad.com/l/hlzrdq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    Get the Complete Book - $9.99
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
