import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/portfolio-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 80, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              What People Say About My Work
            </span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group p-8 bg-zinc-950/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <Quote className="text-cyan-400 mb-4" size={32} />
                <p className="text-zinc-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-zinc-400 text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
