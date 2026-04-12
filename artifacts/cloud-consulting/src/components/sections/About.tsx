import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl"></div>
            <img 
              src="/images/workspace.png" 
              alt="Consultant Workspace" 
              className="relative rounded-xl border border-border/50 object-cover w-full h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Expertise Built for Local Business</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We understand the reality that most small business owners face: you want the benefits of cloud technology, but you don't have the budget for a dedicated IT team and you don't have time to navigate an increasingly complex landscape of services and tools.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              That's exactly why we exist. We work directly with local small and mid-size businesses — both in person and online — to find the right cloud solutions for your specific situation. Before taking on any client, we take the time to build a full picture of your operations and goals so that every recommendation fits your team, your budget, and your growth plans.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From private cloud storage using Synology and QNAP hardware, to custom websites, eCommerce, and CRM platforms built on open-source tools — we give local businesses access to the same technology stack that powers large enterprises, at a price that actually makes sense.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-border">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">SMB</h4>
                <p className="text-sm font-mono text-muted-foreground">Focused exclusively on small &amp; mid-size businesses</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">Local</h4>
                <p className="text-sm font-mono text-muted-foreground">Serving your community in person and remotely</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
