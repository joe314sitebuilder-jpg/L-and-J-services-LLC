import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Cleaning Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Professional, thorough, and reliable house cleaning tailored to your needs in St. Louis, MO.</p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Standard Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard Cleaning</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our standard cleaning service is perfect for maintaining a beautiful, healthy home. We recommend this service on a weekly, bi-weekly, or monthly basis to keep your house looking its best.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Dusting all surfaces</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Vacuuming carpets & rugs</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Mopping hard floors</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Wiping down countertops</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Cleaning sinks & mirrors</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Sanitizing toilets & tubs</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Emptying trash bins</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Making beds (upon request)</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Get a quote for standard cleaning <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Standard house cleaning" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Deep Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Deep house cleaning" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Deep Cleaning</h2>
              <p className="text-lg text-gray-600 mb-6">
                A thorough, top-to-bottom clean. This is ideal for spring cleaning, preparing for holidays, or if your home hasn't been professionally cleaned in a few months.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Everything in Standard, PLUS:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Hand-wiping baseboards</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Cleaning blinds & shutters</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Wiping ceiling fans & vents</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Cleaning inside microwave</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Wiping cabinet exteriors</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Detailed door frame cleaning</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Heavy scrub of bathrooms</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Moving light furniture to clean</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Get a quote for deep cleaning <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Move In/Out Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Move-In / Move-Out Cleaning</h2>
              <p className="text-lg text-gray-600 mb-6">
                Moving is stressful enough. Let us handle the cleaning. We ensure the home is completely spotless and ready for the next resident or your family's arrival.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Everything in Deep Clean, PLUS:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Inside all cabinets & drawers</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Inside the refrigerator</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Inside the oven</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Cleaning closet shelves</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Spot cleaning walls</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> <span className="text-gray-600">Sweeping garage/patio</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Get a quote for move-in/out cleaning <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Empty clean house" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-xl mb-8 text-emerald-50">Call us today. We'll ask a few simple questions and recommend the best cleaning package for your home.</p>
          <a href="tel:314-949-3026" className="inline-block bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
            Call (314) 949-3026
          </a>
        </div>
      </div>
    </div>
  );
}
