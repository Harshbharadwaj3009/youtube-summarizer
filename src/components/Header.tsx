import React from 'react';
import { Youtube, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Youtube className="w-8 h-8 text-red-500" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                YouTube Summarizer
              </h1>
              <p className="text-sm text-white/70">
                AI-powered video insights
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <Sparkles className="w-4 h-4" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;