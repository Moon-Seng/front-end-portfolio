import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ToastProvider } from "./contexts/ToastContext";
import { AnalyticsProvider } from "./components/Analytics";
import { SEO } from "./components/SEO";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Enhanced smooth scrolling
    let isScrolling = false;

    const smoothScroll = (target: Element) => {
      if (isScrolling) return;
      isScrolling = true;

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 1000);
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          isScrolling = false;
        }
      };

      requestAnimationFrame(animation);
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        if (target) {
          smoothScroll(target);
        }
      });
    });

    // Add smooth scroll behavior to body
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Register service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <AnalyticsProvider>
          <SEO
            title="Moon Seng | Full Stack Developer Portfolio"
            description="Full stack developer specializing in React/Next.js, Django, PostgreSQL, and GSAP-powered interfaces. I ship resilient APIs, polished UIs, and cloud-native deployments."
            image="/og-portfolio.jpg"
          />
          <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden transition-colors duration-300">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
            <PWAInstallPrompt />
          </div>
        </AnalyticsProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}
