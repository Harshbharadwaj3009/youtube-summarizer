import React, { useState } from 'react';
import { Copy, Check, List, FileText, BookOpen } from 'lucide-react';
import { Summary, SummaryLength } from '../types';

interface SummaryDisplayProps {
  summary: Summary;
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary }) => {
  const [activeTab, setActiveTab] = useState<SummaryLength>('medium');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const getSummaryText = () => {
    switch (activeTab) {
      case 'short':
        return summary.shortSummary;
      case 'medium':
        return summary.mediumSummary;
      case 'detailed':
        return summary.detailedSummary;
    }
  };

  const tabs = [
    { id: 'short', label: 'Quick', icon: FileText, color: 'text-green-400' },
    { id: 'medium', label: 'Standard', icon: BookOpen, color: 'text-blue-400' },
    { id: 'detailed', label: 'Detailed', icon: List, color: 'text-purple-400' }
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-xl p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SummaryLength)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/60 hover:text-white/80 hover:bg-white/10'
              }`}
            >
              <Icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : ''}`} />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Summary Content */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            {tabs.find(tab => tab.id === activeTab)?.label} Summary
          </h3>
          <button
            onClick={() => copyToClipboard(getSummaryText(), `summary-${activeTab}`)}
            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
          >
            {copiedStates[`summary-${activeTab}`] ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copiedStates[`summary-${activeTab}`] ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        
        <p className="text-white/90 leading-relaxed">
          {getSummaryText()}
        </p>
      </div>

      {/* Key Points */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Key Points</h3>
          <button
            onClick={() => copyToClipboard(summary.keyPoints.join('\n• '), 'keypoints')}
            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
          >
            {copiedStates.keypoints ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copiedStates.keypoints ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        
        <ul className="space-y-2">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start space-x-3 text-white/90">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryDisplay;