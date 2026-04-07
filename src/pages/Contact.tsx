import { useState } from 'react';
import { MapPin, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-gray-600">
            Fill out the short form below or give us a call. We'll provide a fast, accurate estimate for your St. Louis home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h2>
                <p className="text-gray-600 mb-8">Thank you for contacting L and J Services. We will call you shortly with your free quote.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="(314) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                  <select id="service" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                    <option value="">Select a service...</option>
                    <option value="standard">Standard Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move-In / Move-Out</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Home Details (Optional)</label>
                  <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Approximate square footage, number of bedrooms/bathrooms, or any specific focus areas..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-md transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Get My Free Quote'}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by L and J Services regarding your cleaning request.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-300 mr-4 shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">Call Us Directly</p>
                    <a href="tel:314-949-3026" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">(314) 949-3026</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-300 mr-4 shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">Business Hours</p>
                    <p className="text-blue-100">Open Today Until 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4 shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">Location</p>
                    <p className="text-blue-100 leading-relaxed">
                      11628 Old Ballas Rd Ste 338<br />
                      St. Louis, MO 63141
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">100% Satisfaction</h3>
              </div>
              <p className="text-gray-600">
                We stand behind our work. If you're not completely satisfied with your cleaning, let us know within 24 hours and we'll re-clean the area for free.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
