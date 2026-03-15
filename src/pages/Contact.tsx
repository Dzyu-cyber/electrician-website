import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '24/7 Emergency Support']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['service@voltfix.com', 'info@voltfix.com']
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office Address',
      details: ['789 Industrial Way', 'Austin, TX 78701']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon-Fri: 8am - 6pm', 'Sat: 9am - 2pm']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-slate-900/70 z-10 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-6xl font-black mb-6"
            >
              Contact Our Experts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-200 text-xl max-w-2xl mx-auto"
            >
              Licensed electricians available 24/7 for residential and commercial needs.
            </motion.p>
          </div>
        </div>
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200")' }}
        ></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl font-black mb-8 text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-xl">
              Have an electrical issue or a new project in mind? Fill out the form and our team will get back to you within 2 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl h-fit text-blue-600">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{info.title}</h4>
                  {info.details.map((line, idx) => (
                    <p key={idx} className="text-slate-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-slate-200">
            <button className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:brightness-110 transition-all text-lg">
              <MessageCircle className="h-6 w-6" />
              <span>Message on WhatsApp</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100"
        >
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Request a Quote</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                  placeholder="john@example.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input 
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                  placeholder="(555) 000-0000" 
                  type="tel" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Type</label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none">
                  <option>Residential Repair</option>
                  <option>Commercial Installation</option>
                  <option>Electrical Panel Upgrade</option>
                  <option>Lighting Design</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea 
                className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none transition-all" 
                placeholder="Describe your electrical needs..." 
                rows={5}
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 text-xl">
              <Send className="h-6 w-6" />
              Send Request
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <div className="text-center z-20 bg-white/90 backdrop-blur p-8 rounded-3xl shadow-2xl border border-white">
            <div className="bg-blue-600 p-4 rounded-full text-white w-fit mx-auto mb-4 shadow-lg">
              <MapPin className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">VoltFix Headquarters</h4>
            <p className="text-slate-600 font-medium">789 Industrial Way, Austin, TX 78701</p>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
          className="h-full w-full object-cover opacity-60 grayscale" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default Contact;
