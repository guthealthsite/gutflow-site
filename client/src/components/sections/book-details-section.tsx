import { Microscope, Heart, Users, Check, Download } from "lucide-react";

export default function BookDetailsSection() {
  return (
    <section id="book" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 premium-heading">
            More Than Just Another IBS Book
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto premium-text">
            This isn't about managing symptoms. It's about understanding the complete picture and finding your path to genuine healing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Targeting Researchers, Angry Analysts, Budget Warriors, Overwhelmed */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground premium-heading">What Makes This Different?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3 mt-1 medical-shadow">
                    <Microscope size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Research-Driven, Not Marketing-Driven</h4>
                    <p className="text-muted-foreground premium-text">Real science explained simply. No false promises, no miracle cures - just honest research and practical insights backed by medical literature.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-3 mt-1 medical-shadow">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Complete Healing, Not Band-Aids</h4>
                    <p className="text-muted-foreground premium-text">Goes beyond symptom management to address root causes. This isn't about coping - it's about genuine recovery and reclaiming your life.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-accent-foreground rounded-full p-3 mt-1 medical-shadow">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Your Story, Finally Understood</h4>
                    <p className="text-muted-foreground premium-text">Jane's devastating journey mirrors your experience. Emily's recovery shows what's possible. Real stories, not testimonials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Targeting Overwhelmed, Budget Warriors, Newly Diagnosed */}
            <div className="medical-card p-6">
              <h4 className="font-semibold text-lg mb-4 text-primary">Clear Path Forward - No Overwhelm:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Why your gut became a battleground (the real triggers)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>The puppet master controlling your symptoms (finally exposed)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Breaking the fear-symptom cycle that keeps you trapped</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>A step-by-step path to genuine healing (not just management)</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-accent/10 rounded border-l-4 border-accent">
                <p className="text-sm text-foreground font-medium">Under $10 - Less than you'd spend on a single meal that might trigger your symptoms</p>
              </div>
            </div>

            <a
              href="https://memesioliver.gumroad.com/l/hlzrdq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block"
            >
              <Download className="inline mr-2" size={20} />
              Get Your Copy Now - $9.99
            </a>
          </div>

          {/* Jane's Story Preview - Targeting IBS Veterans, Trapped Travelers, Identity Entwined */}
          <div className="medical-card p-8 elevated-shadow">
            <h3 className="text-2xl font-bold text-primary mb-6 premium-heading">Jane's Story Will Break Your Heart</h3>
            <div className="space-y-4 text-muted-foreground italic premium-text text-lg leading-relaxed">
              <p>"Food and traveling were my biggest passions... But my trip was about to take a turn for the worse."</p>
              <p>"Around midnight, in my hotel room, I was plagued with a very bad case of explosive diarrhea—the worst I had ever experienced..."</p>
              <p>"I couldn't foresee that that was my final trip and the end of everything I perceived as normal."</p>
              <p>"These episodes meant I had to give up traveling... Living indoors was never part of me. I felt a huge part of me was missing."</p>
            </div>
            <div className="mt-8 p-6 medical-gradient border border-border rounded-lg">
              <p className="text-foreground premium-text font-medium text-center">
                <strong className="text-primary">Sound familiar?</strong> Jane's story might be your story. But it doesn't have to end the same way.
              </p>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                - For those who've lost their identity to IBS, feel trapped by their symptoms, or have been battling this for years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
