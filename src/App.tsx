import React, { useState } from 'react';
import Header from './components/Header';
import URLInput from './components/URLInput';
import VideoPreview from './components/VideoPreview';
import SummaryDisplay from './components/SummaryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { Summary } from './types';
import { mockSummary } from './data/mockData';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);

  const handleURLSubmit = async (url: string) => {
    setIsLoading(true);
    setSummary(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // For demo purposes, we'll use mock data
    setSummary(mockSummary);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Hero Section */}
          {!summary && !isLoading && (
            <div className="text-center space-y-6 py-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Summarize Any
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> YouTube Video</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Get instant AI-powered summaries, key points, and insights from any YouTube video. 
                  Save time and extract the most important information in seconds.
                </p>
              </div>
            </div>
          )}

          {/* URL Input */}
          <URLInput onSubmit={handleURLSubmit} isLoading={isLoading} />

          {/* Loading State */}
          {isLoading && <LoadingSpinner />}

          {/* Results */}
          {summary && !isLoading && (
            <div className="space-y-8">
              <VideoPreview videoData={summary.videoData} />
              <SummaryDisplay summary={summary} />
            </div>
          )}

          {/* Features Section */}
          {!summary && !isLoading && (
            <div className="py-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
                  <p className="text-white/70">Get comprehensive summaries in seconds, not minutes</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Key Insights</h3>
                  <p className="text-white/70">Extract the most important points and takeaways</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multiple Formats</h3>
                  <p className="text-white/70">Choose from quick, standard, or detailed summaries</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;