import React from 'react';
import { Calendar, Eye, User, Clock } from 'lucide-react';
import { VideoData } from '../types';

interface VideoPreviewProps {
  videoData: VideoData;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoData }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={videoData.thumbnail}
              alt={videoData.title}
              className="w-full h-48 lg:h-32 object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {videoData.duration}
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 space-y-3">
          <h3 className="text-xl font-semibold text-white line-clamp-2">
            {videoData.title}
          </h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{videoData.channelName}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{videoData.viewCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(videoData.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{videoData.duration}</span>
            </div>
          </div>
          
          <p className="text-white/80 text-sm line-clamp-3">
            {videoData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;