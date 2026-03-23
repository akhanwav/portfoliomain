'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  MessageCircleMore, 
  AudioWaveform, 
  Mic, 
  Footprints, 
  Blend, 
  Zap,
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
}

const Services = () => {

  const services: Service[] = [
    {
      id: '1',
      title: 'Dialog Editing'
    },
    {
      id: '2',
      title: 'Sound Editing'
    },
    {
      id: '3',
      title: 'Foley'
    },
    {
      id: '4',
      title: 'ADR'
    },
    {
      id: '5',
      title: 'Music Recording'
    },
    {
      id: '6',
      title: 'Re-Recording Mixing'
    }
  ];

  const getServiceImage = (serviceTitle: string) => {
    switch (serviceTitle) {
      case 'Dialog Editing':
        return {
          src: "https://images.squarespace-cdn.com/content/v1/54d696e5e4b05ca7b54cff5c/7c813c96-4f1b-4398-b5de-0df5b85b365e/Production-Expert-EdiLoad-NB.jpg?format=2500w",
          alt: "Dialog Editing Interface - EdiLoad"
        };
      case 'Sound Editing':
        return {
          src: "https://cdn-www.avid.com/-/media/avid/images/pro-tools-2022/audio-post/29---clip_effects.png",
          alt: "Sound Editing Interface - Pro Tools"
        };
      case 'Foley':
        return {
          src: "https://cdn-ips3.pressidium.com/wp-content/uploads/2012/02/foley-studio-Emli_Bendixen.jpg",
          alt: "Foley Studio Setup"
        };
      case 'ADR':
        return {
          src: "https://i0.wp.com/viewinder.com/wp-content/uploads/2021/03/ADR-01.jpg?fit=1024%2C576&ssl=1",
          alt: "ADR Recording Session"
        };
      case 'Re-Recording Mixing':
        return {
          src: "https://futureworks.ac.uk/wp-content/uploads/2024/04/Picture4-1024x683.jpg",
          alt: "Professional Mixing Console"
        };
      default:
        return null;
    }
  };

  return (
    <section id="services" className="pt-4 pb-8 sm:pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
            Services
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-1 sm:space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-2 sm:p-6 hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-4 sm:mt-8">
          <a 
            href="/contact" 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 ease relative"
            style={{
              backgroundColor: '#91a8ed',
              color: 'black',
              border: '1px solid rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '4px 4px 0 0 #000000, 6px 6px 0 0 rgba(255,255,255,0.3)';
              e.currentTarget.style.border = '2px solid #000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.3)';
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
