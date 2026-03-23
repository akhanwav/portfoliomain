'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      color: '#9CA3AF', // Lighter gray
      hoverColor: '#9CA3AF'
    },
    {
      name: 'Services',
      href: '/services',
      color: '#22a094', // Custom green
      hoverColor: '#22a094'
    },
    {
      name: 'Work',
      href: '/portfolio',
      color: '#ffc900', // Custom yellow
      hoverColor: '#ffc900'
    },
    {
      name: 'About',
      href: '/about',
      color: '#E74C3C', // Red
      hoverColor: '#E74C3C'
    },
    {
      name: 'Contact',
      href: '/contact',
      color: '#91a8ed', // Custom purple
      hoverColor: '#91a8ed'
    },
    {
      name: 'More',
      href: '#',
      color: '#6C757D', // Gray
      hoverColor: '#6C757D',
      expandable: true,
      dropdown: [
        { name: 'Resume/CV', href: '/resume' },
        { name: 'Blog', href: '/blog' },
        { name: 'Education', href: '/education' }
      ]
    }
  ];

  // Set mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);



  // Scroll detection and section tracking
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Section detection for single page
      const sections = ['home', 'portfolio', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setCurrentSection(current);
      }
    };

    // Set current section based on current page
    if (pathname === '/') {
      setCurrentSection('home');
      setCurrentPage('home');
    } else if (pathname === '/portfolio') {
      setCurrentSection('portfolio');
      setCurrentPage('work');
    } else if (pathname === '/services') {
      setCurrentSection('services');
      setCurrentPage('services');
    } else if (pathname === '/about') {
      setCurrentSection('about');
      setCurrentPage('about');
    } else if (pathname === '/contact') {
      setCurrentSection('contact');
      setCurrentPage('contact');
    }

    // For separate pages, trigger scroll detection immediately
    if (pathname !== '/') {
      setTimeout(() => {
        setIsScrolled(true);
      }, 100);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);



  // Get background color based on current section
  const getBackgroundColor = () => {
    if (!mounted) return 'bg-black/95';
    
    // Force About page to show red background ALWAYS
    if (pathname === '/about') {
      return 'bg-[#E74C3C]/95';
    }
    
    // Force Services page to show green background when scrolled
    if (pathname === '/services') {
      return isScrolled ? 'bg-[#22a094]/95' : 'bg-black/95';
    }
    
    // Force Work page to show yellow background when scrolled
    if (pathname === '/portfolio') {
      return isScrolled ? 'bg-[#ffc900]/95' : 'bg-black/95';
    }
    
    if (!isScrolled) return 'bg-black/95';
    
    switch (currentSection) {
      case 'home':
        return 'bg-black/95'; // Always black for home
      case 'portfolio':
        return 'bg-[#ffc900]/95'; // Match the custom yellow button color
      case 'services':
        return 'bg-[#22a094]/95'; // Match the custom green button color
      case 'about':
        return 'bg-[#E74C3C]/95'; // Match the custom red button color
      case 'contact':
        return 'bg-[#91a8ed]/95'; // Match the custom purple button color
      default:
        return 'bg-black/95';
    }
  };

  return (
            <header 
              className={`fixed top-0 left-0 right-0 z-40 ${getBackgroundColor()} backdrop-blur-sm transition-all duration-500`}
              style={{
                backgroundColor: mounted && pathname === '/about' && isScrolled ? 'rgba(231, 76, 60, 0.95)' : undefined,
                borderBottom: isScrolled ? '2px solid #000000' : '1px solid #374151'
              }}
            >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button - Now on the left */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-all duration-100 ease"
            style={{
              backgroundColor: '#FF90E8',
              color: 'black'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '4px 4px 0 0 #000000, 6px 6px 0 0 rgba(255,255,255,0.3)';
              e.currentTarget.style.border = '2px solid #000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = 'none';
            }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Navigation Pills */}
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 ease relative ${
                    item.expandable ? 'pill button expandable' : ''
                  } ${currentPage === item.name.toLowerCase() ? 'ring-2 ring-white ring-opacity-50' : ''} ${
                    currentPage === (item.name === 'Work' ? 'work' : item.name.toLowerCase()) ? 'nav-active' : ''
                  }`}
                  role="menuitem"
                                            aria-current={item.name === 'More' ? 'true' : 'false'}
                          aria-haspopup={item.dropdown ? 'menu' : undefined}
                          aria-expanded={activeDropdown === item.name ? 'true' : 'false'}
                  style={{
                    backgroundColor: item.color,
                    color: 'black',
                    border: currentPage === (item.name === 'Work' ? 'work' : item.name.toLowerCase()) ? 'none' : '1px solid rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    const isActive = currentPage === (item.name === 'Work' ? 'work' : item.name.toLowerCase());
                    if (!isActive) {
                      e.currentTarget.classList.add('nav-active');
                    }
                  }}
                  onMouseLeave={(e) => {
                    const isActive = currentPage === (item.name === 'Work' ? 'work' : item.name.toLowerCase());
                    if (!isActive) {
                      e.currentTarget.classList.remove('nav-active');
                    }
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}

                </a>

                {/* Invisible bridge to prevent dropdown from disappearing */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                )}

                {/* Dropdown Menu - Gumroad Style */}
                {item.dropdown && activeDropdown === item.name && (
                                      <div
                      className="dropdown absolute top-full left-0 mt-2"
                      style={{
                        transform: 'translateX(0px)',
                        minWidth: '300px',
                        width: 'max-content'
                      }}
                    >
                      <div 
                        role="menu" 
                        aria-label={item.name}
                        className="overflow-hidden rounded-xl border border-gray-600 py-4 transition-all duration-100 ease"
                        style={{ 
                          backgroundColor: item.color,
                          color: 'black',
                          boxShadow: '4px 4px 0 0 #000000, 6px 6px 0 0 rgba(255,255,255,0.3)',
                          transform: 'translateY(-2px)'
                        }}
                      >
                                              {item.dropdown.map((dropdownItem) => {
                          const isCurrentPage = mounted && window.location.pathname === dropdownItem.href;
                          return (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              role="menuitem"
                              className={`block px-4 py-3 text-black hover:bg-[#dddddd] transition-colors duration-100 font-medium flex items-center justify-between ${
                                isCurrentPage ? 'bg-[#dddddd]' : ''
                              }`}
                            >
                              <span>{dropdownItem.name}</span>
                              {isCurrentPage && (
                                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                              )}
                            </a>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Logo/Name - Now on the right for mobile */}
          {mounted && window.location.pathname !== '/' && (
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-white hover:opacity-80 transition-opacity duration-200" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                Arbob Khan
              </a>
            </div>
          )}
        </div>

                         {/* Mobile Navigation */}
                 {isMenuOpen && (
                   <nav className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    // Clickable header for dropdown items (like "More")
                    <button
                                                     onClick={() => {
                                 // Simple toggle for More dropdown
                                 if (item.name === 'More') {
                                   setIsMoreExpanded(!isMoreExpanded);
                                 }
                               }}
                      className="w-full text-left px-4 py-3 rounded-full text-black font-medium transition-all duration-100 ease border-2 border-black/20 hover:border-black/40 flex items-center justify-between"
                      style={{ backgroundColor: item.color }}
                    >
                      <span>{item.name}</span>
                      <div className="flex items-center space-x-2">
                        {mounted && item.dropdown && item.dropdown.some(dropdownItem => 
                          window.location.pathname === dropdownItem.href
                        ) && (
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        )}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          item.name === 'More' && isMoreExpanded ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                  ) : (
                    // Regular navigation item
                    <a
                      href={item.href}
                      onClick={(e) => {
                        // If already on this page, just close the menu instead of navigating
                        if (mounted && window.location.pathname === item.href) {
                          e.preventDefault();
                          setIsMenuOpen(false);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                      className="block px-4 py-3 rounded-full text-black font-medium transition-all duration-100 ease border-2 border-black/20 hover:border-black/40 flex items-center justify-between"
                      style={{ backgroundColor: item.color }}
                    >
                      <span>{item.name}</span>
                      {mounted && window.location.pathname === item.href && (
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                      )}
                    </a>
                  )}
                  
                  {item.dropdown && item.name === 'More' && isMoreExpanded && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => {
                        const isCurrentPage = mounted && window.location.pathname === dropdownItem.href;
                        return (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={(e) => {
                              // If already on this page, just close the menu instead of navigating
                              if (isCurrentPage) {
                                e.preventDefault();
                                setIsMenuOpen(false);
                              } else {
                                setIsMenuOpen(false);
                              }
                            }}
                            className={`block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-100 font-medium rounded flex items-center justify-between border border-gray-600 hover:border-gray-500 ${
                              isCurrentPage ? 'bg-gray-600' : ''
                            }`}
                            style={{ backgroundColor: isCurrentPage ? '#4b5563' : '#1f2937' }}
                          >
                            <span>{dropdownItem.name}</span>
                            {isCurrentPage && (
                              <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
