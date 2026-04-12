import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message received",
        description: "I'll get back to you within 24 hours to schedule our call.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-secondary rounded-2xl border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's find the right solution for your business.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Send us a message and we'll get back to you to schedule a discovery call. We'll talk through your current situation, what you're trying to accomplish, and what a realistic, affordable path forward looks like.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded bg-background flex items-center justify-center border border-border">
                    <span className="text-primary font-mono text-sm">W</span>
                  </div>
                  <a href="https://mbabros.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    mbabros.vercel.app
                  </a>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded bg-background flex items-center justify-center border border-border">
                    <span className="text-primary font-mono text-sm">L</span>
                  </div>
                  <span>Serving local small and mid-size businesses — in person and online</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  required
                  id="name"
                  type="text" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  required
                  id="email"
                  type="email" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">What are you looking to solve?</label>
                <textarea 
                  required
                  id="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="We're currently spending $5k/mo on AWS and looking to migrate..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
