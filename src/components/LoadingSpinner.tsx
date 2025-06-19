import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-purple-500 rounded-full animate-spin" />
        <Brain className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          <h3 className="text-xl font-semibold text-white">Analyzing Video</h3>
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
        </div>
        <p className="text-white/70">
          Our AI is extracting key insights from the video content...
        </p>
      </div>
      
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;