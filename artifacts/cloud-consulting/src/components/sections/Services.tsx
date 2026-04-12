import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, CloudCog, Database, Box, Globe, ShoppingCart, Users } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Custom Domain Cloud Websites",
    description: "Professional websites hosted on your own domain in a secure, reliable cloud environment. From simple business sites to full-featured web platforms with flexible pricing options."
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "eCommerce Solutions",
    description: "Get your business selling online with a fully self-hosted eCommerce platform. Own your store, your data, and your customer relationships — without monthly per-transaction fees."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "CRM & Business Tools",
    description: "Implement a custom CRM tailored to your workflows. Track leads, manage customer relationships, and improve team collaboration using powerful open-source platforms."
  },
  {
    icon: <CloudCog className="w-8 h-8" />,
    title: "Cloud Strategy & Navigation",
    description: "Not sure which cloud services are right for your business? We assess your needs, cut through the noise, and build a clear, affordable roadmap — no expensive vendor commitments required."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Private & Hybrid Cloud Setup",
    description: "Deploy robust private cloud infrastructure using Synology, QNAP, and open-source tools. Store your data on your own hardware with the convenience of cloud access anywhere."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "SaaS Replacement",
    description: "Replace expensive per-seat SaaS subscriptions with self-hosted alternatives like Nextcloud, Authentik, and Mattermost — delivering the same features at a fraction of the cost."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Web Hosting Platforms",
    description: "Flexible, scalable web hosting built around your budget. We offer tiered pricing options and self-managed solutions so you're never locked into a plan that doesn't fit."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Backup",
    description: "Harden your cloud environment with Zero Trust access, encrypted backups, and disaster recovery planning. Protect your business data without enterprise-level complexity."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            A tailored portfolio of semi-public and private cloud computing services for small businesses. We address the challenges of cloud service selection, setup, and cost — so you can focus on running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
