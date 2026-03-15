import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Zap, Lightbulb, ShieldCheck, Settings, AlertTriangle, CheckCircle2, Phone } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      id: 'repairs',
      icon: <Wrench className="h-6 w-6" />,
      tag: 'Maintenance',
      title: 'Electrical Repairs',
      desc: 'Expert troubleshooting and fixing of flickering lights, faulty outlets, tripping breakers, and power surges. We diagnose the root cause to prevent future issues.',
      img: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
      features: ['Fast Diagnostic Tools', 'Certified Components', '1-Year Service Warranty', 'Post-Repair Safety Check'],
      btnText: 'Book Repair'
    },
    {
      id: 'wiring',
      icon: <Zap className="h-6 w-6" />,
      tag: 'Infrastructure',
      title: 'Wiring & Rewiring',
      desc: 'Old wiring can be a major fire hazard. We provide complete home rewiring, new construction rough-ins, and data cabling to keep your home safe and connected.',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      features: ['Compliance with Local Codes', 'Fire-Resistant Materials', 'Minimal Wall Damage', 'Long-term Performance'],
      btnText: 'Get a Quote',
      reverse: true
    },
    {
      id: 'lighting',
      icon: <Lightbulb className="h-6 w-6" />,
      tag: 'Aesthetics',
      title: 'Lighting Installation',
      desc: 'Transform your space with energy-efficient LED lighting, outdoor security lights, or elegant indoor fixtures. We handle everything from design to installation.',
      img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
      features: ['Smart Home Integration', 'Energy-Saving Solutions', 'Custom Layout Design', 'Dimmable Options'],
      btnText: 'View Lighting Options'
    }
  ];

  const gridServices = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Circuit Breaker Repair',
      desc: 'Stop dealing with frequent power trips. We repair and replace faulty circuit breakers to restore stable power to your appliances.',
      features: ['Load balancing', 'GFCI protection repair', 'Short circuit protection'],
      btnText: 'Learn More'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Panel Upgrades',
      desc: 'Modernize your electrical panel to handle high-demand appliances and EV chargers. Essential for aging homes.',
      features: ['Capacity increase (Amperage)', 'Future-proofing your home', 'Full system labeling'],
      btnText: 'Schedule Upgrade'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
          Professional Electrical <span className="text-blue-600">Solutions</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Safe, reliable, and modern electrical services for residential and commercial properties. Our certified technicians ensure your peace of mind with every connection.
        </p>
      </div>

      {/* Detailed Services */}
      <div className="space-y-20 mb-20">
        {mainServices.map((service, i) => (
          <motion.section
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-1/2 h-80 lg:h-auto">
              <img src={service.img} alt={service.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-blue-600">
                {service.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{service.tag}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 text-lg">{service.desc}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <button className="w-fit bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:bg-blue-700">
                {service.btnText}
              </button>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Grid Services */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {gridServices.map((service, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="p-4 bg-blue-50 rounded-2xl w-fit mb-8 text-blue-600">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 mb-8">{service.desc}</p>
            <ul className="space-y-4 mb-10">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
              {service.btnText}
            </button>
          </motion.section>
        ))}
      </div>

      {/* Emergency CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-orange-600 text-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6 bg-white/20 w-fit px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            <AlertTriangle className="h-4 w-4 animate-pulse" /> 24/7 Response
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Emergency Electrical Services</h2>
          <p className="text-white/90 text-xl mb-8 leading-relaxed">Smoke coming from outlets? Burning smell? Total power loss? Our emergency electricians are on standby 24/7 to keep your family safe.</p>
          <div className="flex flex-wrap gap-4 text-sm font-bold">
            <span className="bg-white/10 px-5 py-2.5 rounded-xl">Rapid Response</span>
            <span className="bg-white/10 px-5 py-2.5 rounded-xl">Fully Equipped Vans</span>
            <span className="bg-white/10 px-5 py-2.5 rounded-xl">All Times & Days</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 min-w-[240px] w-full md:w-auto">
          <a href="tel:+15551234567" className="bg-white text-orange-600 text-center px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform flex items-center justify-center gap-4 shadow-xl">
            <Phone className="h-7 w-7" />
            Call Now
          </a>
          <p className="text-center text-sm font-medium text-white/80">Average response time: 45 mins</p>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
