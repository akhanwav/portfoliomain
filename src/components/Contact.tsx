'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const emailData = {
        to_email: 'arbobk@gmail.com',
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        reply_to: data.email
      };

      // For now, we'll use a simple fetch to a hypothetical API endpoint
      // You'll need to set up an API route or use a service like EmailJS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="pt-4 pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your audio vision to life?
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#91a8ed]/80 border-[#91a8ed]/90 rounded-xl p-3 backdrop-blur-sm max-w-xs mx-auto">
          <h3 className="text-lg font-bold text-white mb-3" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Send a Message</h3>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p className="text-green-200">Message sent successfully! I&apos;ll get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-red-200">Something went wrong. Please try again.</p>
                <p className="text-red-300 text-sm mt-1">If the problem persists, you can email me directly at arbobk@gmail.com</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                            Name *
                          </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                            Email *
                          </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                            Subject *
                          </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Enter subject"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                            Project Details *
                          </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

                                    {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 ease relative disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: '#000000',
                            color: 'white',
                            border: '1px solid rgba(0, 0, 0, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubmitting) {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '4px 4px 0 0 #000000, 6px 6px 0 0 rgba(255,255,255,0.3)';
                              e.currentTarget.style.border = '2px solid #000000';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSubmitting) {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                              e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.3)';
                            }
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
