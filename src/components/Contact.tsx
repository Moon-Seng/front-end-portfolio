import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  useGSAP(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }
    );

    // Form animation
    gsap.fromTo('.contact-form',
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        opacity: 1,
        x: 0,
        ease: 'power3.out',
      }
    );

    // Contact info animation
    gsap.fromTo('.contact-info',
      { opacity: 0, x: 50 },
      {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        opacity: 1,
        x: 0,
        ease: 'power3.out',
      }
    );
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-zinc-300 mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-zinc-300 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-zinc-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all duration-300"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>

          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:hello@example.com"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Location</p>
                    <p className="text-white">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-white mb-4">Availability</h3>
              <p className="text-zinc-400 mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">Available for work</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <p className="text-zinc-300 mb-4">
                "Ready to turn your ideas into beautiful, interactive experiences"
              </p>
              <p className="text-cyan-400">Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
