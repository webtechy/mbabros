import React from 'react';
import { motion } from 'framer-motion';
import { SiDocker, SiKubernetes, SiGrafana, SiPrometheus, SiNextcloud, SiWireguard, SiLinux, SiNginx } from 'react-icons/si';

const techItems = [
  { icon: <SiDocker className="w-10 h-10" />, name: "Docker" },
  { icon: <SiKubernetes className="w-10 h-10" />, name: "Kubernetes" },
  { icon: <SiNextcloud className="w-10 h-10" />, name: "Nextcloud" },
  { icon: <SiGrafana className="w-10 h-10" />, name: "Grafana" },
  { icon: <SiPrometheus className="w-10 h-10" />, name: "Prometheus" },
  { icon: <SiWireguard className="w-10 h-10" />, name: "WireGuard" },
  { icon: <SiLinux className="w-10 h-10" />, name: "Linux" },
  { icon: <SiNginx className="w-10 h-10" />, name: "Nginx" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlocking the Open Source Ecosystem</h2>
            <p className="text-xl text-muted-foreground mb-6">
              The tools that power the biggest tech companies in the world are free and open source. Most businesses just lack the expertise to deploy and maintain them.
            </p>
            <p className="text-muted-foreground mb-8">
              We implement and manage self-hosted alternatives to expensive SaaS products — including private cloud hardware from Synology and QNAP for businesses that want to own their storage infrastructure.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3"><span className="text-primary">→</span> Synology &amp; QNAP for private cloud storage</li>
              <li className="flex items-center gap-3"><span className="text-primary">→</span> Nextcloud instead of Google Drive / Dropbox</li>
              <li className="flex items-center gap-3"><span className="text-primary">→</span> Authentik instead of Okta / Auth0</li>
              <li className="flex items-center gap-3"><span className="text-primary">→</span> Coolify instead of Vercel / Heroku</li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techItems.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs font-mono font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
