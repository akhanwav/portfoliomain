'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EducationPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    if (password === 'sounddesign2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Header />
        <div className="pt-16 min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-6">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-700">
              <h1 className="text-2xl font-bold text-white mb-6 text-center">
                Education Portal
              </h1>
              <p className="text-gray-300 mb-6 text-center">
                This page is password protected. Please enter the password to continue.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Enter password"
                    required
                  />
                </div>
                
                {error && (
                  <div className="text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Access Education Portal
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to the education portal. Content coming soon...
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🎓 Educational Content
            </h2>
            <p className="text-gray-300 mb-6">
              This section will contain educational materials, tutorials, and resources related to sound design.
            </p>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-400 italic">
                Content will be added here in the future...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;
