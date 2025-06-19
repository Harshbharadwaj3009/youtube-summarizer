export interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  channelName: string;
  publishedAt: string;
  viewCount: string;
}

export interface Summary {
  id: string;
  videoData: VideoData;
  shortSummary: string;
  mediumSummary: string;
  detailedSummary: string;
  keyPoints: string[];
  timestamp: string;
}

export type SummaryLength = 'short' | 'medium' | 'detailed';