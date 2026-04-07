import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">Let's talk.</h1>
            <p className="text-lg text-slate-500 mb-12 max-w-md">
              Fill out the form to request a quote, or reach out to us directly. We'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-2">Phone</h3>
                <a href="tel:314-949-3026" className="text-slate-500 hover:text-slate-900 transition-colors">(314) 949-3026</a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-2">Location</h3>
                <p className="text-slate-500">11628 Old Ballas Rd Ste 338<br />St. Louis, MO 63141</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-2">Hours</h3>
                <p className="text-slate-500">Open today until 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {formStatus === 'success' ? (
              <div className="bg-slate-50 rounded-3xl p-10 text-center h-full flex flex-col justify-center">
                <h2 className="text-2xl font-medium text-slate-900 mb-2">Request received.</h2>
                <p className="text-slate-500 mb-8">Thank you for reaching out. We will contact you shortly with your free quote.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-sm font-medium text-slate-900 hover:text-slate-600"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input type="text" id="firstName" required className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input type="text" id="lastName" required className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" id="phone" required className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Service Needed</label>
                  <select id="service" required className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option value="standard">Standard Clean</option>
                    <option value="deep">Deep Clean</option>
                    <option value="move">Move In / Out</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Additional Details</label>
                  <textarea id="details" rows={4} className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors resize-none" placeholder="Square footage, specific requests..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-70 text-sm"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Request Quote'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
