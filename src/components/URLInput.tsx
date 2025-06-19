import React, { useState } from 'react';
import { Link, AlertCircle, Search } from 'lucide-react';
import { isValidYouTubeUrl } from '../utils/youtube';

interface URLInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const URLInput: React.FC<URLInputProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!isValidYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setError('');
    onSubmit(url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Link className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="url"
            value={url}
            onChange={handleInputChange}
            placeholder="Paste YouTube URL here..."
            className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            disabled={isLoading}
          />
        </div>
        
        {error && (
          <div className="flex items-center space-x-2 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Analyzing Video...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Summarize Video</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default URLInput;