import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ValueProp() {
  return (
    <section className="py-20 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">No IT Staff Required</h3>
            </div>
            <p className="text-muted-foreground">
              You shouldn't need to hire a full IT department to take advantage of cloud services. We bring the expertise so your team can stay focused on running the business.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Affordable Cloud Solutions</h3>
            </div>
            <p className="text-muted-foreground">
              Our services are specifically designed for small business budgets. We leverage free and open-source tools to deliver enterprise-grade capability without enterprise pricing.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Tailored for Local Business</h3>
            </div>
            <p className="text-muted-foreground">
              We serve local small and mid-size businesses directly — in person and online. We take the time to understand your specific needs before recommending a solution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
