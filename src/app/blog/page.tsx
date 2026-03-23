'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Blog Newsletter Signup',
          email: email,
          message: `New blog newsletter signup from: ${email}`,
          subject: 'Blog Newsletter Signup'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Header />
        <div className="pt-20 sm:pt-24 max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              You've been successfully added to our blog newsletter list. We'll notify you when the blog launches with exciting content about sound design!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Sign Up Another Email
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="pt-20 sm:pt-24 max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Blog
          </h1>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-8 border border-gray-700">
                          <div className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                  Get notified when the blog launches and receive updates about new content, sound design tips, and industry insights.
                </p>
              
                             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2 text-left">
                     Email Address
                   </label>
                   <input
                     type="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                     placeholder="Enter your email address"
                     required
                   />
                 </div>
                
                {error && (
                  <div className="flex items-center justify-center space-x-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
                
                                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                 >
                   {isSubmitting ? (
                     <>
                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                       <span>Signing Up...</span>
                     </>
                   ) : (
                     <span>Subscribe to Newsletter</span>
                   )}
                 </button>
               </form>
               
               <p className="text-gray-400 text-sm mt-3 sm:mt-4">
                 We respect your privacy. Unsubscribe at any time.
               </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
