import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-xl tracking-tight">
                <span className="text-white">dev</span>
                <span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm">
              Frontend developer crafting beautiful web and mobile experiences with passion for animations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400 text-sm">
              © 2025 All rights reserved.
            </p>
            <p className="text-zinc-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-cyan-400 fill-cyan-400" /> using React, Tailwind & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
