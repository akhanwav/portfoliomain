'use client';

import { 
  Award, 
  Clock, 
  Users, 
  Star,
  Monitor
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Star, label: 'Industry Awards', value: '3' }
  ];

  const skills = [
    'Pro Tools HD',
    'Avid Media Composer',
    'Adobe Audition',
    'Logic Pro X',
    'Final Cut Pro',
    'DaVinci Resolve',
    'Sound Design',
    'Foley Recording',
    'ADR Sessions',
    'Re-Recording Mixing'
  ];

  return (
    <section id="about" className="pt-4 pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Arbob Khan, a passionate sound editor and re-recording mixer based in Chicago, IL. 
                  With over 5 years of experience in audio post-production, I specialize in bringing stories 
                  to life through sound.
                </p>
                <p>
                  My journey in audio began with a deep fascination for how sound shapes our emotional 
                  connection to visual media. From the subtle rustle of leaves to the thunderous impact 
                  of action sequences, I believe every sound contributes to the storytelling experience.
                </p>
                <p>
                  I've had the privilege of working on a diverse range of projects, from independent 
                  films to commercial campaigns, always striving to deliver the highest quality audio 
                  that enhances the viewer's experience.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Professional Image */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Arbob Khan - Sound Editor and Re-Recording Mixer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Arbob Khan</h4>
                <p className="text-gray-300">Sound Editor & Re-Recording Mixer</p>
                <p className="text-gray-400 text-sm mt-1">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">My Philosophy</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              "Sound is not just what you hear—it's what you feel. Every project I work on, 
              I approach with the understanding that audio has the power to transport audiences, 
              evoke emotions, and create unforgettable moments. My goal is to craft soundscapes 
              that don't just complement the visual story, but become an integral part of the 
              narrative itself."
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="/contact" className="btn-primary inline-flex items-center space-x-2 mx-auto px-8 py-3">
            <Monitor className="h-5 w-5" />
            <span>Let's Work Together</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
