'use client';

import { useState } from 'react';
import { 
  Film, 
  Video, 
  Tv, 
  Heart, 
  Zap,
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: string[];
}

const Work = () => {
  const [expandedWork, setExpandedWork] = useState<string[]>(['1', '2', '3']);

  const workItems: WorkItem[] = [
    {
      id: '1',
      title: 'Film and Television',
      description: '',
      icon: Film,
      projects: []
    },
    {
      id: '2',
      title: 'Commercial Work',
      description: '',
      icon: Tv,
      projects: [
        'Nike - "Just Do It" Campaign (2024)',
        'Apple - "Think Different" Series (2023)',
        'Coca-Cola - Holiday Special (2023)',
        'Tesla - Innovation Spot (2022)'
      ]
    },
    {
      id: '3',
      title: 'Non-Profit',
      description: '',
      icon: Heart,
      projects: [
        'UNICEF - Education for All (2024)',
        'Red Cross - Emergency Response (2023)',
        'WWF - Conservation Campaign (2023)',
        'Doctors Without Borders - Hope (2022)'
      ]
    }
  ];

  const getWorkImage = (workTitle: string) => {
    switch (workTitle) {
      case 'Non-Profit':
        return {
          src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
          alt: "Non-Profit Documentary"
        };
      default:
        return null;
    }
  };

  return (
    <section id="work" className="pt-4 pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work
          </h2>
        </div>

        {/* Work List */}
        <div className="space-y-3">
          {workItems.map((item) => {
            const isExpanded = expandedWork.includes(item.id);
            const workImage = getWorkImage(item.title);
            
            return (
              <div
                key={item.id}
                className="bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Clickable Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/30 transition-colors duration-200"
                  onClick={() => {
                    if (isExpanded) {
                      setExpandedWork(expandedWork.filter(id => id !== item.id));
                    } else {
                      setExpandedWork([...expandedWork, item.id]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">
                        {isExpanded ? 'Hide projects' : 'View projects'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={`px-6 pb-6 border-t border-gray-700 overflow-hidden transition-all duration-700 ease-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-6">
                    {item.title === 'Non-Profit' && (
                      <div className="flex flex-col items-center">
                        <div className="mb-2">
                          <h4 className="text-lg font-semibold text-white mb-1">ReWork Project:</h4>
                        </div>
                        <div className="mb-6">
                          <div className="relative w-48 h-24 flex items-center justify-center">
                            <a 
                              href="https://reworkproject.org/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                            >
                              <img
                                src="/logos/rework-logo.png"
                                alt="ReWork Logo"
                                className="w-full h-full object-contain"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-[28rem] h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-600">
                          <video
                            src="/ReWork Project - In The Making.mp4"
                            controls
                            preload="metadata"
                            className="w-full h-full object-cover"
                            poster={workImage?.src}
                            style={{ objectFit: 'contain' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    )}
                    
                    {item.title !== 'Non-Profit' && (
                      <div className="flex items-start space-x-6">
                        {/* Work Projects */}
                        <div className="flex-1">
                          {item.title === 'Film and Television' && (
                            <div className="mb-8 sm:mb-6">
                              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4 place-items-center">
                                {/* Citizen Bowen */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/citizenbowen-poster.png"
                                    alt="Citizen Bowen"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* The Killing of Kenneth Chamberlain */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/tkokc-poster.jpg"
                                    alt="The Killing of Kenneth Chamberlain"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* JAYWALKING */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/jaywalking-poster.png"
                                    alt="JAYWALKING"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Emerald City */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/emeraldcity-poster.png"
                                    alt="Emerald City"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Imperfect Star */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/imperfectstar-poster.png"
                                    alt="Imperfect Star"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Home */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/home-poster.png"
                                    alt="Home"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Between the Devil and Me */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/betweenthedevilandme-poster.png"
                                    alt="Between the Devil and Me"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Blood Feud */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/bloodfued-poster.png"
                                    alt="Blood Feud"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Alone With You */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/alonewithyou-poster.png"
                                    alt="Alone With You"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* 71 Seconds */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/71seconds-poster.png"
                                    alt="71 Seconds"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* 35 */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/35-poster.png"
                                    alt="35"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Don't Forget Me */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/dontforgetme-poster.png"
                                    alt="Don't Forget Me"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Identity */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/identity-poster.png"
                                    alt="Identity"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* The Businessmen */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/businessmen-poster.png"
                                    alt="The Businessmen"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* The Creatures */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/creatures-poster.png"
                                    alt="The Creatures"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Don Johnson */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/donjohnson-poster.png"
                                    alt="Don Johnson"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Jesse James */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/jessejames-poster.png"
                                    alt="Jesse James"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* The Love Club */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/loveclub-poster.png"
                                    alt="The Love Club"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Girls N Boyze */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/girlsnboyze-poster.png"
                                    alt="Girls N Boyze"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* The Secret We Keep */}
                                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                                  <img
                                    src="/posters/secretswekeep-poster.png"
                                    alt="The Secret We Keep"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {item.title === 'Commercial Work' && (
                            <div className="mb-6">
                              <div className="flex justify-center">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 sm:gap-3 place-items-center">
                                  {/* McDonald's */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#d52b1e' }}>
                                    <img
                                      src="/logos/mcdonalds-logo.png"
                                      alt="McDonald's"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Gatorade */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#ff4e00' }}>
                                    <img
                                      src="/logos/gatorade-logo.png"
                                      alt="Gatorade"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Bud Light */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#004996' }}>
                                    <img
                                      src="/logos/Bud-Light-Logo.png"
                                      alt="Bud Light"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Coca Cola */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#cc2229' }}>
                                    <img
                                      src="/logos/Coca-Cola_Logo.webp"
                                      alt="Coca Cola"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Snickers */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#4a0500' }}>
                                    <img
                                      src="/logos/snickers_logo_all_0.jpg"
                                      alt="Snickers"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Prudential Financial */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 bg-white flex items-center justify-center">
                                    <img
                                      src="/logos/Prudential-Financial-Logo.jpg"
                                      alt="Prudential Financial"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* ComEd */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#cd1241' }}>
                                    <img
                                      src="/logos/comed.png"
                                      alt="ComEd"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Marlboro */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 bg-white flex items-center justify-center">
                                    <img
                                      src="/logos/malboro-logo.webp"
                                      alt="Marlboro"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* World of Beer */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#060807' }}>
                                    <img
                                      src="/logos/world-of-beer.jpg"
                                      alt="World of Beer"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Pop Tarts */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center">
                                    <img
                                      src="/logos/poptarts-logo.webp"
                                      alt="Pop Tarts"
                                      className="w-full h-full object-contain p-0 scale-175"
                                    />
                                  </div>
                                  {/* Miller Lite */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#005698' }}>
                                    <img
                                      src="/logos/millerlite.jpg"
                                      alt="Miller Lite"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Intel */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#0071c5' }}>
                                    <img
                                      src="/logos/intel-logo.png"
                                      alt="Intel"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* John Deere */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#1e782e' }}>
                                    <img
                                      src="/logos/john-deere.jpg"
                                      alt="John Deere"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Leinenkugel's */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#c51f2e' }}>
                                    <img
                                      src="/logos/Leinenkugels-red.webp"
                                      alt="Leinenkugel's"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* The Onion */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#006c3a' }}>
                                    <img
                                      src="/logos/theonion-logo.webp"
                                      alt="The Onion"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* ClickHole */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center" style={{ backgroundColor: '#2a2a2a' }}>
                                    <img
                                      src="/logos/clickhole-logo.png"
                                      alt="ClickHole"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                  {/* Redwing */}
                                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg border border-gray-600 bg-white flex items-center justify-center">
                                    <img
                                      src="/logos/redwing-logo.jpg"
                                      alt="Redwing"
                                      className="w-full h-full object-contain p-1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {item.title === 'Non-Profit' && (
                            <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                              <h4 className="text-lg font-semibold text-white mb-3">Featured Projects:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {item.projects.map((project, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                                    <span className="text-gray-300 text-sm">{project}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Work Image */}
                        {workImage && (
                          <div className="flex-shrink-0 ml-8">
                            <div className="relative w-48 h-72 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-600">
                              <img
                                src={workImage.src}
                                alt={workImage.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
