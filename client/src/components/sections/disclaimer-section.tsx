import { AlertTriangle } from "lucide-react";

export default function DisclaimerSection() {
  return (
    <section className="bg-muted py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border premium-shadow">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center premium-heading">
            <AlertTriangle className="text-amber-500 mr-2" size={20} />
            Important Medical Disclaimer
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed premium-text">
            <p>
              This book reflects the author's personal insights and research. It is intended for informational purposes only and is not a substitute for medical advice, diagnosis, or treatment from a licensed healthcare provider.
            </p>
            <p>
              Readers are encouraged to speak with their doctor or another qualified health professional before making any decisions related to their health, including the use of dietary changes, supplements, or treatments discussed in this book.
            </p>
            <p>
              The author and publisher accept no responsibility for any outcomes resulting from the application of information in this book, the free chapter, or any content on this website. Use of the material is at the reader's own discretion and risk.
            </p>
            <p>
              While every effort has been made to ensure the accuracy of the information at the time of writing, medical knowledge is always evolving. The author and publisher cannot guarantee that all content remains current or complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
