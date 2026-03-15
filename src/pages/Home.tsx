import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lightbulb, ShieldAlert, Settings, AlertTriangle, CheckCircle2, Clock, DollarSign, Award, Handshake, Phone, MessageCircle, MapPin, Mail, Calendar, Bolt, Star } from 'lucide-react';
import electrician1 from '../assets/electrician-1.jpg';
import electrician2 from '../assets/electrician-2.jpg';
import electrician3 from '../assets/electrician-3.jpg';
import electrician4 from '../assets/electrician-4.jpg';

const Home = () => {
  const services = [
    { icon: <Zap className="h-8 w-8" />, title: 'Electrical Repairs', desc: 'Fast and safe repairs for all your domestic and industrial electrical issues.' },
    { icon: <Bolt className="h-8 w-8" />, title: 'Wiring & Rewiring', desc: 'Complete home rewiring and new installations following safety standards.' },
    { icon: <Lightbulb className="h-8 w-8" />, title: 'Lighting Installation', desc: 'Custom indoor and outdoor lighting solutions to enhance your living spaces.' },
    { icon: <ShieldCheck className="h-8 w-8" />, title: 'Circuit Breaker Repair', desc: "Ensuring your home's safety by replacing faulty breakers and fuses promptly." },
    { icon: <Settings className="h-8 w-8" />, title: 'Panel Upgrades', desc: 'Modernize your electrical panel to support high-power modern appliances.' },
    { icon: <AlertTriangle className="h-8 w-8" />, title: 'Emergency Services', desc: '24/7 priority support for dangerous electrical failures or power outages.' },
  ];

  const whyChooseUs = [
    { icon: <Award />, title: 'Certified Professionals', desc: 'Fully licensed and insured teams.' },
    { icon: <Clock />, title: '24/7 Emergency', desc: 'Always here when you need us.' },
    { icon: <DollarSign />, title: 'Upfront Pricing', desc: 'No hidden costs or surprises.' },
    { icon: <Zap />, title: 'Fast Response', desc: 'Arrival within the hour.' },
    { icon: <ShieldCheck />, title: '10+ Years Exp.', desc: 'Decade of local expertise.' },
    { icon: <Handshake />, title: 'Trust Focused', desc: '100% Satisfaction Guaranteed.' },
  ];

  const testimonials = [
    {
      name: 'Alex M.',
      role: 'Dallas Resident',
      text: '"VoltFix saved us during a major power outage in Dallas. They arrived within 30 minutes and fixed the issue professionally. Highly recommended!"',
      img: 'https://picsum.photos/seed/person1/100/100'
    },
    {
      name: 'Jordan S.',
      role: 'Business Owner, Austin',
      text: '"Excellent service for our office rewiring project in Austin. The team was efficient and the pricing was very transparent. No hidden costs at all."',
      img: 'https://picsum.photos/seed/person2/100/100'
    },
    {
      name: 'Taylor R.',
      role: 'Homeowner, Houston',
      text: '"They installed modern lighting in our entire house. The finish is clean and they even helped us choose the best energy-efficient options. Great work!"',
      img: 'https://picsum.photos/seed/person3/100/100'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-1 flex-col gap-8"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                <CheckCircle2 className="h-4 w-4" />
                Licensed & Insured Electricians
              </div>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Professional <span className="text-blue-600">Electrical Services</span> You Can Trust
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                Expert electrical solutions for residential and commercial properties. Licensed electricians providing safe, reliable, and affordable services 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex h-14 min-w-[180px] items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-700">
                  Call Now
                </button>
                <button className="flex h-14 min-w-[180px] items-center justify-center rounded-xl border-2 border-slate-200 bg-transparent text-lg font-bold text-slate-900 transition-all hover:bg-slate-50">
                  Get a Free Quote
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-1"
            >
              <div className="aspect-square w-full rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional electrician" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl bg-orange-500 p-6 text-white shadow-xl">
                <ShieldAlert className="h-10 w-10" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Emergency Service</p>
                  <p className="text-xl font-black">Available 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20" id="services">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Our Professional Services</h2>
            <div className="h-1.5 w-20 rounded-full bg-orange-500"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black text-slate-900">Why Choose VoltFix?</h2>
              <p className="mb-10 text-slate-600">We pride ourselves on providing the highest quality electrical work in the region, focusing on safety, efficiency, and customer satisfaction.</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'h-5 w-5' })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img src={electrician1} className="h-full w-full object-cover" referrerPolicy="no-referrer" alt="Electrician at work" />
                </div>
                <div className="h-64 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img src={electrician2} className="h-full w-full object-cover" referrerPolicy="no-referrer" alt="Wiring and repair" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img src={electrician3} className="h-full w-full object-cover" referrerPolicy="no-referrer" alt="Safety gear" />
                </div>
                <div className="h-48 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img src={electrician4} className="h-full w-full object-cover" referrerPolicy="no-referrer" alt="Power equipment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-slate-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-6 italic text-slate-600">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-black">Need an Electrician Today?</h2>
          <p className="mb-10 text-xl text-white/80">Serving Austin, Dallas, and surrounding areas with 24/7 availability.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex h-14 min-w-[200px] items-center justify-center gap-3 rounded-xl bg-white px-8 text-lg font-bold text-blue-600 transition-transform hover:scale-105">
              <Phone className="h-5 w-5" />
              Call Now
            </button>
            <button className="flex h-14 min-w-[200px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 text-lg font-bold text-white transition-transform hover:scale-105">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-8 text-white lg:p-12">
              <h3 className="mb-8 text-3xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="text-lg">123 Main St, Austin, TX | 456 Commerce Blvd, Dallas, TX</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <p className="text-lg">(512) 555-0199</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="text-lg">support@voltfix.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Mon-Sun: 24/7 Availability</p>
                </div>
              </div>
              <div className="mt-12">
                <p className="mb-4 font-bold">Service Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {['Austin', 'Dallas', 'Houston', 'San Antonio'].map(area => (
                    <span key={area} className="rounded-full bg-white/10 px-4 py-1 text-sm">{area}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px] overflow-hidden rounded-3xl bg-slate-100 relative">
               {/* Placeholder for Map */}
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="font-bold text-slate-900">Interactive Map View</p>
                    <p className="text-sm text-slate-500">Serving Austin & Dallas Region</p>
                  </div>
               </div>
               <img 
                src="https://images.unsplash.com/photo-1549599440-e0ed3d56a21a?auto=format&fit=crop&q=80&w=1000" 
                className="h-full w-full object-cover opacity-50" 
                referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Home;
