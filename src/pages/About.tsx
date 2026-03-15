import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Zap, Clock, Award, Construction, CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '12+' },
    { label: 'Projects Completed', value: '5k+' },
    { label: 'Safety Record', value: '100%' },
    { label: 'Emergency Support', value: '24/7' },
  ];

  const team = [
    {
      name: 'Marcus Thorne',
      role: 'Founder & Master Electrician',
      desc: 'With 20 years in the field, Marcus leads the technical vision of VoltFix.',
      img: 'https://picsum.photos/seed/marcus/400/500'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Residential Project Lead',
      desc: 'Sarah specializes in smart home integration and sustainable lighting.',
      img: 'https://picsum.photos/seed/sarah/400/500'
    },
    {
      name: 'David Chen',
      role: 'Lead Industrial Technician',
      desc: 'Our expert for large-scale industrial wiring and power maintenance.',
      img: 'https://picsum.photos/seed/david/400/500'
    }
  ];

  const certifications = [
    { icon: <Zap />, label: 'OSHA CERTIFIED' },
    { icon: <ShieldCheck />, label: 'NECA MEMBER' },
    { icon: <Zap />, label: 'ECO-SMART' },
    { icon: <Award />, label: 'IEEE COMPLIANT' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-6"
          >
            Established 2012
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
          >
            About VoltFix Electrical Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl"
          >
            Powering your home and business with excellence, safety, and reliability for over a decade.
          </motion.p>
        </div>
      </section>

      {/* Stats Row */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-blue-600 text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">A Decade of Excellence in Every Wire</h3>
            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Founded with a vision to provide reliable and safe electrical solutions, VoltFix has grown from a small local team to a leading service provider in the region. We pride ourselves on our technical expertise and commitment to customer satisfaction.
            </p>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Our journey began with a single van and a commitment to never cut corners. Today, we manage complex industrial installations and residential emergencies with the same level of precision.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-10 rounded-r-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="text-blue-600 h-7 w-7" />
              Our Mission
            </h4>
            <p className="text-slate-700 text-lg italic leading-relaxed">
              "To provide the highest standard of electrical safety and quality through innovative solutions, continuous education, and an unwavering commitment to our clients' peace of mind."
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
              alt="Electrical workshop" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl hidden lg:block">
            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                <Construction className="h-8 w-8" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Licensed & Insured</p>
                <p className="text-sm text-slate-500">Full liability coverage</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4">The Experts</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Meet Our Master Electricians</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-bold text-sm mb-4">{member.role}</p>
                  <p className="text-slate-500 leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900">Trusted & Certified By</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-slate-400">
                {React.cloneElement(cert.icon as React.ReactElement, { className: 'h-10 w-10' })}
              </div>
              <span className="font-black text-slate-400 text-2xl italic tracking-tighter">{cert.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Need expert electrical help today?</h2>
          <p className="text-white/80 text-xl mb-12">Whether it's a small repair or a massive installation, we bring the same level of safety and excellence.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all text-xl shadow-xl">
              Schedule a Visit
            </button>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-100 transition-all text-xl shadow-xl">
              Call (555) VOLT-FIX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
