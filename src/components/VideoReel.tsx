'use client';

import { useState } from 'react';
import { Play, Pause, Volume2, Maximize, Film, Video, Monitor } from 'lucide-react';

interface VideoProject {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
}

const VideoReel = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoProjects: VideoProject[] = [
    {
      id: '1',
      title: 'Sci-Fi Film Trailer',
      description: 'Complete sound design and mixing for independent sci-fi feature',
      category: 'Film',
      duration: '2:15',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Sound Design', 'Mixing', 'Foley']
    },
    {
      id: '2',
      title: 'Action Game Cinematic',
      description: 'Immersive audio experience for AAA game title',
      category: 'Games',
      duration: '1:45',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Game Audio', 'Ambience', 'SFX']
    },
    {
      id: '3',
      title: 'Documentary Series',
      description: 'Natural sound recording and post-production for wildlife documentary',
      category: 'Documentary',
      duration: '3:30',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Field Recording', 'Natural Sound', 'Narration']
    },
    {
      id: '4',
      title: 'Commercial Spot',
      description: 'High-impact audio for automotive brand campaign',
      category: 'Commercial',
      duration: '0:30',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Voice Over', 'Music', 'SFX']
    },
    {
      id: '5',
      title: 'Horror Short Film',
      description: 'Atmospheric sound design for psychological horror',
      category: 'Film',
      duration: '4:20',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Atmosphere', 'Tension', 'Sound Effects']
    },
    {
      id: '6',
      title: 'VR Experience',
      description: '3D spatial audio for immersive virtual reality project',
      category: 'VR/AR',
      duration: '5:15',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      tags: ['Spatial Audio', '3D Sound', 'Immersion']
    }
  ];

  const handlePlayPause = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const categories = ['All', 'Film', 'Games', 'Documentary', 'Commercial', 'VR/AR'];

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Video Reel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch and listen to my sound design work in action. From film trailers to game cinematics, 
            each project showcases the power of audio in storytelling.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:text-green-500 hover:border-green-500 transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mb-16">
                        <div className="relative rounded-2xl overflow-hidden bg-orange-400/80 border-orange-300/90 backdrop-blur-sm">
                <div className="aspect-video bg-black/20 relative">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Film className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-300">Featured: Sci-Fi Film Trailer</p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                <div className="p-6 bg-green-500 rounded-full">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Sci-Fi Film Trailer</h3>
              <p className="text-gray-300 mb-4">
                Complete sound design and mixing for independent sci-fi feature film. 
                Features atmospheric ambience, dynamic sound effects, and immersive audio experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Sound Design', 'Mixing', 'Foley', 'Atmosphere'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.slice(1).map((project, index) => {
            const pastelColors = [
              'bg-teal-400/80 border-teal-300/90',
              'bg-orange-400/80 border-orange-300/90', 
              'bg-fuchsia-400/80 border-fuchsia-300/90',
              'bg-red-400/80 border-red-300/90',
              'bg-cyan-400/80 border-cyan-300/90',
              'bg-teal-400/80 border-teal-300/90'
            ];
            const colorClass = pastelColors[index % pastelColors.length];
            
            return (
            <div
              key={project.id}
              className={`${colorClass} rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 backdrop-blur-sm`}
            >
              {/* Video Thumbnail */}
                              <div className="relative aspect-video bg-black/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm">{project.category}</p>
                  </div>
                </div>
                
                {/* Play Button */}
                <button
                  onClick={() => handlePlayPause(project.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <div className="p-4 bg-green-500 rounded-full">
                    {playingVideo === project.id ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white" />
                    )}
                  </div>
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  {project.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="text-sm text-green-500 font-medium">{project.category}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Video Controls */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                                    <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                  <Volume2 className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                  <Maximize className="h-4 w-4" />
                </button>
                  </div>
                  
                  <button className="text-sm text-green-600 hover:text-green-700 transition-colors">
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-primary flex items-center space-x-2 mx-auto">
            <Monitor className="h-5 w-5" />
            <span>View All Videos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoReel;
