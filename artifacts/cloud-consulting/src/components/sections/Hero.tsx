import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6">
              <Terminal className="w-4 h-4" />
              <span>sudo apt-get optimize</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Cloud services built for<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                local businesses.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Small and mid-size businesses deserve enterprise-grade cloud technology — without the enterprise price tag or the need to hire a full IT department. We help you access powerful tools, streamline operations, and stay competitive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all">
                Book a free consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-semibold text-lg hover:bg-secondary/80 transition-all border border-border">
                See our services
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/images/hero.png" 
                alt="Modern cloud server infrastructure visualization" 
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto md:h-[600px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
