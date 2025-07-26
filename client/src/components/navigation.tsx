import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-card shadow-sm border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary premium-heading">Trapped In The Gut</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('book')}
              className="text-muted-foreground hover:text-primary transition-colors premium-text"
            >
              About the Book
            </button>
            <button
              onClick={() => scrollToSection('author')}
              className="text-muted-foreground hover:text-primary transition-colors premium-text"
            >
              About Author
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-muted-foreground hover:text-primary transition-colors premium-text"
            >
              Reviews
            </button>
            <a
              href="https://memesioliver.gumroad.com/l/hlzrdq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Get Your Copy - $9.99
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('book')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors premium-text"
              >
                About the Book
              </button>
              <button
                onClick={() => scrollToSection('author')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors premium-text"
              >
                About Author
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors premium-text"
              >
                Reviews
              </button>
              <a
                href="https://memesioliver.gumroad.com/l/hlzrdq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent block text-center"
              >
                Get Your Copy - $9.99
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
