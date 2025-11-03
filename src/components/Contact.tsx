import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormField } from "./ui/FormField";
import { Loading } from "./ui/Loading";
import { useToast } from "../contexts/ToastContext";
import { useAnalytics } from "../components/Analytics";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { showToast } = useToast();
  const { trackEvent } = useAnalytics();

  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          ease: "power3.out",
        }
      );

      // Form animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      );

      // Contact info animation
      gsap.fromTo(
        ".contact-info",
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Email is invalid";
    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("error", "Please fix the errors below");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9behbt3", // replace with your Service ID
        "template_y8hbvog", // replace with your Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "6tkYn90Zu-NJxnm3x" // replace with your Public Key
      );

      trackEvent({
        action: "form_submit",
        category: "contact",
        label: "contact_form",
      });

      showToast(
        "success",
        "Message sent successfully!",
        "I'll get back to you soon."
      );
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      showToast("error", "Failed to send message", "Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have an idea for a website or web app? I’d love to collaborate and
            bring your vision to life with clean code and elegant design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form space-y-6 p-8 h-fit bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-lg shadow-cyan-500/5"
          >
            <FormField label="Name" error={errors.name} required>
              <Input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className={`w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your name"
              />
            </FormField>

            <FormField label="Email" error={errors.email} required>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="your.email@example.com"
              />
            </FormField>

            <FormField label="Message" error={errors.message} required>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                className={`w-full bg-zinc-900 border-zinc-800 text-white focus:border-cyan-400 transition-colors resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Tell me about your project..."
              />
            </FormField>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loading size="sm" />
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
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
                      href="mailto:moonseng.dev@gmail.com"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      moonseng.dev@gmail.com
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
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-green-400/40 shadow-sm"></div>
                <span className="text-green-400">Available for work</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <p className="text-zinc-300 mb-4">
                "Ready to turn your ideas into beautiful, interactive
                experiences"
              </p>
              <p className="text-cyan-400">
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
