import { Download, Clock, Smartphone } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 premium-heading">
          Your Freedom is Just One Click Away
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto premium-text">
          Stop letting IBS control your life. Stop suffering in silence. Stop accepting "there's nothing more we can do." Your journey to freedom starts now.
        </p>
        
        <div className="space-y-6">
          <a
            href="https://memesioliver.gumroad.com/l/hlzrdq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-xl py-6 px-12"
          >
            <Download className="inline mr-3" size={24} />
            Download "Trapped In The Gut" - $9.99
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center">
              <Clock className="mr-1" size={16} />
              Instant Download
            </span>
            <span className="flex items-center">
              <Smartphone className="mr-1" size={16} />
              Works on All Devices
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
