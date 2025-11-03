import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAnalytics } from "../components/Analytics";

function NavigationLink({ item }: { item: { name: string; href: string } }) {
  const { trackClick } = useAnalytics();

  return (
    <a
      href={item.href}
      onClick={() => trackClick("nav_link", item.name.toLowerCase())}
      className="text-zinc-400 hover:text-white transition-colors duration-300 relative group"
    >
      {item.name}
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
    </a>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let targetProgress = 0;
    let currentProgress = 0;

    const updateProgress = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = (window.scrollY / totalScroll) * 100;

      // Smooth interpolation
      currentProgress += (targetProgress - currentProgress) * 0.1;
      setScrollProgress(currentProgress);

      if (Math.abs(targetProgress - currentProgress) > 0.1) {
        requestAnimationFrame(updateProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="relative group">
            <span className="text-xl flex items-center justify-start tracking-tight">
              <img
                className="w-[32px] mr-2"
                src="../assets/fav/moon-vector-png-3.png"
                alt=""
              />
              <span className="text-white">Moon Seng</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavigationLink key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-800/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800/50">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
