'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResumePage = () => {

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="pt-20 sm:pt-24 max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Resume / CV
          </h1>
        </div>

              {/* Desktop PDF Preview */}
      <div className="hidden lg:block bg-gray-800 rounded-lg p-4 lg:p-6 border border-gray-700">
        <div className="w-full h-[500px] lg:h-[600px] xl:h-[700px]">
                               <iframe
                       src="/documents/Khan_Arbob_Resume2025.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=75&view=FitH"
                       className="w-full h-full rounded-lg border border-gray-600"
                       title="Arbob Khan Resume"
                     />
        </div>
        {/* Download Button for Desktop */}
        <div className="text-center mt-4">
          <a
            href="/documents/Khan_Arbob_Resume2025.pdf"
            download="Khan_Arbob_Resume2025.pdf"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

              {/* Mobile/Tablet Preview Card */}
      <div className="lg:hidden bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="text-center">
          <div className="mb-6">
            <a
              href="/documents/Khan_Arbob_Resume2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-65 h-81 max-sm:w-48 max-sm:h-64 mx-auto rounded-lg border border-gray-600 overflow-hidden hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src="/documents/resume-thumbnail.png"
                alt="Resume Preview"
                className="w-full h-full object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm mt-2">Click to view full resume</p>
          </div>
          {/* Download Button for Mobile/Tablet */}
          <div className="text-center mt-4">
            <a
              href="/documents/Khan_Arbob_Resume2025.pdf"
              download="Khan_Arbob_Resume2025.pdf"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200"
              style={{ backgroundColor: '#facc15', color: '#000000' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResumePage;
