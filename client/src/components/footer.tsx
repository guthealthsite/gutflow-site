import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 premium-heading">Trapped In The Gut</h3>
          <p className="text-slate-400 mb-4 premium-text">Breaking free from IBS, one reader at a time</p>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">
              Copyright © 2025 by Gershom Phiri. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 flex items-center justify-center">
              <Mail className="mr-2" size={14} />
              Contact: 
              <a 
                href="mailto:gershgruve@gmail.com" 
                className="text-white hover:text-blue-300 transition-colors ml-1 focus-ring"
              >
                gershgruve@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
