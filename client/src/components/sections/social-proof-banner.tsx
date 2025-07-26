import { Star, Users, Clock, BookOpen } from "lucide-react";

export default function SocialProofBanner() {
  return (
    <section className="bg-secondary text-secondary-foreground py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center">
            <Star className="text-yellow-300 mr-2" size={20} />
            <span className="font-semibold premium-text">Research-Based Approach</span>
          </div>
          <div className="flex items-center">
            <Users className="text-yellow-300 mr-2" size={20} />
            <span className="font-semibold premium-text">Thousands Helped</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-yellow-300 mr-2" size={20} />
            <span className="font-semibold premium-text">Instant Download</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="text-yellow-300 mr-2" size={20} />
            <span className="font-semibold premium-text">Complete Solution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
