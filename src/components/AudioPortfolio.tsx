'use client';

import { useState } from 'react';
import { Play, Pause, Volume2, Download, ExternalLink } from 'lucide-react';

interface AudioTrack {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  audioUrl: string;
  waveform: number[];
}

const AudioPortfolio = () => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const audioTracks: AudioTrack[] = [
    {
      id: '1',
      title: 'Cinematic Ambience',
      description: 'Atmospheric soundscape for sci-fi film sequence',
      category: 'Film',
      duration: '2:34',
      audioUrl: '#',
      waveform: [20, 45, 30, 60, 25, 80, 35, 70, 40, 55, 30, 65, 25, 50, 35, 75]
    },
    {
      id: '2',
      title: 'Game Combat SFX',
      description: 'Dynamic sound effects for action RPG',
      category: 'Games',
      duration: '1:45',
      audioUrl: '#',
      waveform: [15, 35, 50, 25, 70, 40, 60, 30, 45, 65, 35, 55, 25, 40, 30, 50]
    },
    {
      id: '3',
      title: 'Nature Documentary',
      description: 'Immersive wildlife audio for documentary series',
      category: 'Documentary',
      duration: '3:12',
      audioUrl: '#',
      waveform: [10, 25, 40, 15, 35, 50, 20, 45, 30, 40, 25, 35, 15, 30, 20, 25]
    },
    {
      id: '4',
      title: 'Electronic Music Mix',
      description: 'High-energy electronic track with complex layering',
      category: 'Music',
      duration: '4:28',
      audioUrl: '#',
      waveform: [30, 60, 45, 75, 35, 80, 50, 70, 40, 65, 55, 85, 45, 75, 60, 90]
    },
    {
      id: '5',
      title: 'Horror Soundscape',
      description: 'Tense atmospheric audio for horror game',
      category: 'Games',
      duration: '2:15',
      audioUrl: '#',
      waveform: [5, 15, 25, 10, 30, 20, 35, 15, 25, 30, 20, 35, 15, 25, 10, 20]
    },
    {
      id: '6',
      title: 'Corporate Video',
      description: 'Professional audio for corporate presentation',
      category: 'Commercial',
      duration: '1:58',
      audioUrl: '#',
      waveform: [25, 40, 30, 50, 35, 45, 40, 55, 30, 45, 35, 50, 25, 40, 30, 35]
    }
  ];

  const handlePlayPause = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const categories = ['All', 'Film', 'Games', 'Documentary', 'Music', 'Commercial'];

  return (
    <section id="portfolio" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Audio Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest sound design work across film, games, and multimedia projects. 
            Each piece is crafted with attention to detail and emotional impact.
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

        {/* Audio Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioTracks.map((track, index) => {
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
              key={track.id}
              className={`${colorClass} rounded-xl p-6 hover:shadow-lg transition-all duration-200 backdrop-blur-sm`}
            >
              {/* Track Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{track.title}</h3>
                  <p className="text-sm text-green-500 font-medium">{track.category}</p>
                </div>
                <span className="text-sm text-gray-400">{track.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6">{track.description}</p>

              {/* Waveform Visualization */}
              <div className="flex items-end justify-between h-16 mb-4">
                {track.waveform.map((height, i) => (
                  <div
                    key={i}
                    className="bg-green-500 rounded-sm flex-1 mx-0.5"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Audio Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handlePlayPause(track.id)}
                  className="p-3 bg-green-500 hover:bg-green-600 rounded-full text-white transition-colors duration-200"
                >
                  {playingTrack === track.id ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>

                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                    <Volume2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default AudioPortfolio;
