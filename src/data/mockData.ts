import { VideoData, Summary } from '../types';

export const mockVideoData: VideoData = {
  id: 'dQw4w9WgXcQ',
  title: 'The Future of Artificial Intelligence: Understanding Large Language Models',
  description: 'In this comprehensive video, we explore the fascinating world of artificial intelligence and dive deep into how large language models are revolutionizing the way we interact with technology. From natural language processing to machine learning fundamentals, this video covers everything you need to know about AI\'s current state and future potential.',
  thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  duration: '18:42',
  channelName: 'TechInsights Pro',
  publishedAt: '2024-01-15',
  viewCount: '2.3M views'
};

export const mockSummary: Summary = {
  id: '1',
  videoData: mockVideoData,
  shortSummary: 'This video explains how large language models work and their impact on AI development. It covers transformer architecture, training processes, and real-world applications in various industries.',
  mediumSummary: 'This comprehensive video explores the revolutionary impact of large language models on artificial intelligence. The presenter discusses the transformer architecture that powers modern AI systems, explaining how these models are trained on massive datasets to understand and generate human-like text. Key topics include the evolution from traditional NLP to modern LLMs, the importance of scale in model performance, and how companies are leveraging these technologies for customer service, content creation, and decision-making processes.',
  detailedSummary: 'This in-depth exploration of large language models provides a comprehensive overview of one of the most significant developments in artificial intelligence. The video begins by establishing the historical context of natural language processing, tracing the evolution from rule-based systems to statistical methods, and finally to the transformer-based architectures that define modern AI. The presenter meticulously explains the transformer architecture, breaking down concepts like attention mechanisms, positional encoding, and multi-head attention in accessible terms. The discussion then moves to the training process, covering both pre-training on large corpora and fine-tuning for specific tasks. Real-world applications are extensively covered, including how major tech companies are integrating LLMs into their products, the emergence of AI assistants, and the potential for these models to revolutionize industries from healthcare to education. The video also addresses important considerations around ethics, bias, and the responsible development of AI systems.',
  keyPoints: [
    'Transformer architecture revolutionized natural language processing',
    'Scale is crucial for language model performance',
    'Pre-training and fine-tuning are key training strategies',
    'LLMs enable human-like text generation and understanding',
    'Real-world applications span multiple industries',
    'Ethical considerations are important for responsible AI development'
  ],
  timestamp: new Date().toISOString()
};