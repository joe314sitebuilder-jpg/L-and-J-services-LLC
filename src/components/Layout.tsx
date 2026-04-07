import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-300" /> Serving St. Louis, MO & Surrounding Areas</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-300" /> Open Today Until 6:00 PM</span>
          </div>
          <div className="flex items-center text-yellow-400 font-medium">
            <Star className="w-4 h-4 mr-1 fill-current" /> 5.0 Top Rated Cleaning Service
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-700 tracking-tight">L and J Services<span className="text-emerald-500">.</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}>Home</Link>
              <Link to="/services" className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-600'}`}>Services</Link>
              <Link to="/contact" className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'}`}>Contact</Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:314-949-3026" className="flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                (314) 949-3026
              </a>
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-sm hover:shadow-md">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">Contact</Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a href="tel:314-949-3026" className="flex items-center justify-center w-full bg-blue-50 text-blue-700 px-4 py-3 rounded-md font-bold">
                <Phone className="w-5 h-5 mr-2" />
                Call (314) 949-3026
              </a>
              <Link to="/contact" className="flex items-center justify-center w-full bg-emerald-500 text-white px-4 py-3 rounded-md font-bold">
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">L and J Services<span className="text-emerald-500">.</span></h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Top-rated house cleaning service in St. Louis, MO. We make your home spotless so you can focus on what matters most.
              </p>
              <div className="flex items-center text-yellow-400 font-medium">
                <Star className="w-5 h-5 mr-1 fill-current" />
                <Star className="w-5 h-5 mr-1 fill-current" />
                <Star className="w-5 h-5 mr-1 fill-current" />
                <Star className="w-5 h-5 mr-1 fill-current" />
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="text-white">5.0 Rating</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-0.5" />
                  <span>11628 Old Ballas Rd Ste 338<br />St. Louis, MO 63141</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                  <a href="tel:314-949-3026" className="hover:text-white transition-colors">(314) 949-3026</a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                  <span>Open Today Until 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} L and J Services LLC. All rights reserved.</p>
            <p className="mt-2">Serving St. Louis, MO and surrounding areas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
