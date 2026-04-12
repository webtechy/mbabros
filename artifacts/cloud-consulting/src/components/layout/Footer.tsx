import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50 grayscale">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold font-mono text-xs">
            /
          </div>
          <span className="font-bold tracking-tight">RootCloud Consulting</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RootCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
