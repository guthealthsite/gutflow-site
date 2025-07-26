import { Mail, Phone } from "lucide-react";

export default function AuthorSection() {
  return (
    <section id="author" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 premium-heading">About the Author</h2>
          <p className="text-xl text-muted-foreground premium-text">
            Not a doctor, but someone who bridges the gap between complex research and real understanding
          </p>
        </div>
        
        <div className="medical-card p-8 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Author Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground text-5xl font-bold medical-shadow">
                GP
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4 premium-heading">Gershom Phiri</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed premium-text">
                  <p className="text-lg">
                    <strong className="text-foreground">I'm not a doctor or healthcare professional.</strong> I'm someone who delights in explaining complex medical concepts in simple terms that anyone can understand, backed by actual research.
                  </p>
                  <p>
                    My passion lies in making sense of the chaos that chronic illness brings, and helping others find clarity in a world of medical confusion. This book represents years of research, countless hours of studying medical literature, and a deep commitment to helping those who feel trapped by their own bodies.
                  </p>
                  <p>
                    I believe that understanding your condition shouldn't require a medical degree. Everyone deserves access to clear, honest information about their health - without the jargon, without the false promises, and without the condescension.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-lg mb-4 text-primary">Get In Touch</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="medical-gradient p-4 rounded border border-border">
                    <p className="flex items-center text-foreground font-medium">
                      <Mail className="text-primary mr-3" size={18} />
                      Email
                    </p>
                    <a 
                      href="mailto:gershgruve@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors focus-ring text-sm ml-9"
                    >
                      gershgruve@gmail.com
                    </a>
                  </div>
                  <div className="medical-gradient p-4 rounded border border-border">
                    <p className="flex items-center text-foreground font-medium">
                      <Phone className="text-primary mr-3" size={18} />
                      Phone
                    </p>
                    <a 
                      href="tel:+260970162702" 
                      className="text-primary hover:text-primary/80 transition-colors focus-ring text-sm ml-9"
                    >
                      +260 970 162 702
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
