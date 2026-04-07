import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">Our Services.</h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          Professional, thorough, and reliable house cleaning tailored to your needs in St. Louis.
        </p>
      </div>

      {/* Services List */}
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          
          {/* Standard Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">01</div>
              <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Standard Clean</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Perfect for maintaining a beautiful, healthy home. We recommend this service on a weekly, bi-weekly, or monthly basis.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 text-sm text-slate-600">
                <div className="flex items-center border-b border-slate-100 pb-2">Dusting all surfaces</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Vacuuming carpets</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Mopping hard floors</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Wiping countertops</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Cleaning sinks & mirrors</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Sanitizing bathrooms</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Emptying trash</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Making beds</div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
                Book this service <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Standard house cleaning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Deep Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-100 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Deep house cleaning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">02</div>
              <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Deep Clean</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                A thorough, top-to-bottom clean. Ideal for spring cleaning or if your home hasn't been professionally cleaned recently.
              </p>
              
              <p className="text-sm font-medium text-slate-900 mb-4">Everything in Standard, plus:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 text-sm text-slate-600">
                <div className="flex items-center border-b border-slate-100 pb-2">Hand-wiping baseboards</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Cleaning blinds</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Wiping ceiling fans</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Inside microwave</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Cabinet exteriors</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Door frames</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Heavy scrub of tubs</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Moving light furniture</div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
                Book this service <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Move In/Out Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">03</div>
              <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Move In / Out</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Moving is stressful enough. Let us handle the cleaning. We ensure the home is completely spotless for the next chapter.
              </p>
              
              <p className="text-sm font-medium text-slate-900 mb-4">Everything in Deep Clean, plus:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 text-sm text-slate-600">
                <div className="flex items-center border-b border-slate-100 pb-2">Inside all cabinets</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Inside refrigerator</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Inside oven</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Closet shelves</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Spot cleaning walls</div>
                <div className="flex items-center border-b border-slate-100 pb-2">Sweeping garage</div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
                Book this service <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Empty clean house" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
