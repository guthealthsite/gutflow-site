import { Download, Eye, Shield } from "lucide-react";

export default function HeroSection() {
  const showFreeChapter = () => {
    const modal = document.getElementById('freeChapterModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <section className="hero-gradient text-primary-foreground py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Targeting Desperate Searchers */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight premium-heading">
                Break Free From The{" "}
                <span className="text-yellow-300">IBS Prison</span>{" "}
                Forever
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 font-light premium-text">
                You've tried everything. The pain persists. The fear controls you.{" "}
                <strong className="text-primary-foreground">What if there's a way out?</strong>
              </p>
            </div>

            {/* Targeting Silent & Ashamed + Misdiagnosed + Stigma-Trapped */}
            <div className="medical-card bg-white/95 text-foreground border border-white/30">
              <p className="text-lg italic premium-text text-center">
                "You're not crazy. This is real. And you're not fighting this alone anymore."
              </p>
              <p className="text-sm text-muted-foreground mt-2 text-center">- For those who suffer in silence, feel misunderstood, or have been dismissed</p>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <a
                href="https://memesioliver.gumroad.com/l/hlzrdq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-lg py-5 px-10"
              >
                <Download className="inline mr-2" size={20} />
                Download Now - Only $9.99
              </a>
              <div className="flex items-center justify-center space-x-2 text-sm text-primary-foreground/80">
                <Shield size={16} />
                <span>Instant download • Secure payment</span>
              </div>
            </div>

            {/* Free Chapter CTA */}
            <div className="flex items-center space-x-4">
              <button
                onClick={showFreeChapter}
                className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-white/30 px-6 py-3 rounded-lg transition-colors interactive-element"
              >
                <Eye className="inline mr-2" size={16} />
                Read Free Chapter
              </button>
              <span className="text-sm text-blue-200">Get a taste before you buy</span>
            </div>
          </div>

          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="book-shadow bg-gradient-to-br from-slate-800 to-slate-900 w-80 h-96 rounded-lg flex items-center justify-center text-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4 premium-heading">TRAPPED IN THE GUT</h3>
                  <p className="text-sm mb-6 premium-text">The Complete Guide to Understanding & Overcoming IBS</p>
                  <p className="text-lg font-semibold">GERSHOM PHIRI</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-lg opacity-20 -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
