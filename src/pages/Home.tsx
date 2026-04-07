import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-slate-50 px-3 py-1 rounded-full text-xs font-medium text-slate-600 mb-8 border border-slate-100"
        >
          <Star className="w-3.5 h-3.5 text-slate-900 fill-current" />
          <span>5.0 Rated in St. Louis</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          A spotless home, <br className="hidden md:block" /><span className="text-slate-400">without the effort.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Trusted, thorough house cleaning in St. Louis. We handle the mess so you can focus on what matters most.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link to="/contact" className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto">
            Get a free quote
          </Link>
          <a href="tel:314-949-3026" className="text-slate-600 hover:text-slate-900 text-sm font-medium px-8 py-3.5 w-full sm:w-auto">
            (314) 949-3026
          </a>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-3xl overflow-hidden bg-slate-100 aspect-[16/9] md:aspect-[21/9]"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Clean minimalist living room" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Simple, tailored services.</h2>
              <p className="text-slate-500 text-lg">Whether you need a weekly refresh or a deep seasonal clean, we have you covered.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">01</div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Standard Clean</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">Perfect for weekly or bi-weekly upkeep. We dust, vacuum, mop, and sanitize all main living areas, kitchens, and bathrooms.</p>
              <Link to="/services" className="text-sm font-medium text-slate-900 hover:text-slate-600">Learn more &rarr;</Link>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">02</div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Deep Clean</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">A thorough, top-to-bottom clean. Includes baseboards, blinds, inside appliances, and hard-to-reach areas. Ideal for spring cleaning.</p>
              <Link to="/services" className="text-sm font-medium text-slate-900 hover:text-slate-600">Learn more &rarr;</Link>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">03</div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Move In / Out</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">Make your transition seamless. We ensure the home is completely spotless for the next resident or your family's arrival.</p>
              <Link to="/services" className="text-sm font-medium text-slate-900 hover:text-slate-600">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <Star className="w-6 h-6 text-slate-900 fill-current mx-auto mb-8" />
        <blockquote className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight mb-8">
          "They were on time, professional, and my house has never looked this clean. I highly recommend them to anyone in St. Louis."
        </blockquote>
        <div className="text-sm font-medium text-slate-900">Sarah M.</div>
        <div className="text-sm text-slate-500">St. Louis, MO</div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready for a clean home?</h2>
          <p className="text-slate-400 text-lg mb-10">Get a free, no-obligation quote today.</p>
          <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
