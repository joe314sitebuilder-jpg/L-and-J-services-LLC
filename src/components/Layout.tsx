import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-slate-100">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-xl font-medium tracking-tight">
              L & J Services.
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-sm transition-colors ${location.pathname === '/' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Home</Link>
              <Link to="/services" className={`text-sm transition-colors ${location.pathname === '/services' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Services</Link>
              <Link to="/contact" className={`text-sm transition-colors ${location.pathname === '/contact' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Contact</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:314-949-3026" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                (314) 949-3026
              </a>
              <Link to="/contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                Get a quote
              </Link>
            </div>

            <button className="md:hidden p-2 -mr-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4">
            <Link to="/" className="block text-base text-slate-600">Home</Link>
            <Link to="/services" className="block text-base text-slate-600">Services</Link>
            <Link to="/contact" className="block text-base text-slate-600">Contact</Link>
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a href="tel:314-949-3026" className="text-base text-slate-900 font-medium">(314) 949-3026</a>
              <Link to="/contact" className="inline-block bg-slate-900 text-white px-5 py-3 rounded-full text-center text-sm font-medium">
                Get a quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="text-xl font-medium tracking-tight block mb-4">
                L & J Services.
              </Link>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Premium house cleaning services in St. Louis, MO. We focus on the details so you don't have to.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li>11628 Old Ballas Rd Ste 338<br />St. Louis, MO 63141</li>
                <li><a href="tel:314-949-3026" className="hover:text-slate-900">(314) 949-3026</a></li>
                <li>Open until 6:00 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4">Links</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/" className="hover:text-slate-900">Home</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900">Get a quote</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} L and J Services LLC.</p>
            <p className="mt-2 md:mt-0">St. Louis, Missouri</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
