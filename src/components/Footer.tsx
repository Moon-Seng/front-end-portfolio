import { socialLinks } from "@/portfolio-config";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import moment from "moment";

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-xl flex items-center justify-start tracking-tight">
                <img
                  className="w-[32px] mr-2"
                  src="../assets/fav/moon-vector-png-3.png"
                  alt=""
                />
                <span className="text-white">Moon Seng</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm">
              Full stack developer crafting resilient APIs and delightful
              interfaces for web and mobile.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400 text-sm">
              (c) {moment().format("YYYY")} All rights reserved.
            </p>
            <p className="text-zinc-400 text-sm flex items-center gap-2">
              Made with{" "}
              <Heart size={16} className="text-cyan-400 fill-cyan-400" /> using
              React, Vite, Tailwind & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
