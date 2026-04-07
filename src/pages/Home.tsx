import { Link } from 'react-router-dom';
import { CheckCircle2, Star, ShieldCheck, Clock, Home as HomeIcon, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000" 
            alt="Clean living room" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-blue-800/50 rounded-full px-4 py-1.5 mb-6 border border-blue-700 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
              <span className="text-sm font-medium">5.0 Rated Cleaning Service in St. Louis</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Come Home to a <span className="text-emerald-400">Spotless House</span> Every Time.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed"
            >
              Trusted, reliable, and thorough house cleaning in St. Louis, MO. We handle the mess so you can enjoy your free time.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-colors shadow-lg hover:shadow-xl flex items-center justify-center">
                Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:314-949-3026" className="bg-white text-blue-900 hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg text-center transition-colors shadow-lg flex items-center justify-center">
                Call (314) 949-3026
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center space-x-6 text-sm text-blue-200"
            >
              <span className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-emerald-400" /> Fully Insured</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-400" /> Satisfaction Guaranteed</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cleaning Services Built for You</h2>
            <p className="text-lg text-gray-600">From weekly upkeep to deep cleaning, we have a service that fits your needs and schedule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <HomeIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Cleaning</h3>
              <p className="text-gray-600 mb-6">Perfect for maintaining a clean home. Includes dusting, vacuuming, mopping, and bathroom/kitchen sanitation.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Weekly, bi-weekly, or monthly</li>
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Keeps your home fresh</li>
              </ul>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Cleaning</h3>
              <p className="text-gray-600 mb-6">A thorough top-to-bottom clean. We scrub baseboards, blinds, inside appliances, and hard-to-reach areas.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Great for spring cleaning</li>
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Removes built-up grime</li>
              </ul>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Move-In / Move-Out</h3>
              <p className="text-gray-600 mb-6">Make your transition stress-free. We ensure the home is spotless for the next resident or your arrival.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Get your deposit back</li>
                <li className="flex items-start text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> Fresh start in a new home</li>
              </ul>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional cleaner" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why St. Louis Trusts L and J Services</h2>
              <p className="text-lg text-gray-600 mb-8">We don't just clean houses; we give you back your time. Our team is dedicated to providing a reliable, high-quality service every single visit.</p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Vetted & Trusted Cleaners</h4>
                    <p className="mt-1 text-gray-600">Every cleaner is background-checked, trained, and insured for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Consistent Quality</h4>
                    <p className="mt-1 text-gray-600">We follow a strict checklist to ensure no corner is missed. We clean it right, every time.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Simple & Reliable Scheduling</h4>
                    <p className="mt-1 text-gray-600">We show up on time, with all the supplies needed. Easy booking and clear communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "L and J Services did an incredible job. They were on time, professional, and my house has never looked this clean. They paid attention to every detail. I highly recommend them to anyone in St. Louis looking for a reliable cleaning service!"
          </blockquote>
          <div className="font-bold text-lg">Sarah M.</div>
          <div className="text-blue-300">St. Louis, MO</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Getting a spotless home is easy. Just follow these three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-100 rounded-full flex items-center justify-center shadow-sm mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-gray-600">Call us or fill out our short online form to tell us about your home and cleaning needs.</p>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-100 rounded-full flex items-center justify-center shadow-sm mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Clean</h3>
              <p className="text-gray-600">Pick a date and time that works best for you. We offer flexible scheduling options.</p>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center shadow-sm mb-6">
                <span className="text-3xl font-bold text-emerald-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy Your Clean Home</h3>
              <p className="text-gray-600">Our professionals arrive, clean your home top to bottom, and leave it sparkling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl p-10 md:p-16 text-center border border-blue-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for a Cleaner Home?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Stop spending your weekends cleaning. Let our St. Louis experts handle the mess. Get your free, no-obligation quote today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-md hover:shadow-lg">
              Get a Free Quote Online
            </Link>
            <a href="tel:314-949-3026" className="bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-bold text-lg transition-colors">
              Call (314) 949-3026
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
