import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ArrowUpRight, Check, ChevronDown, Github, Linkedin, Mail, MapPin, Menu, Send, X } from "lucide-react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AnalyticsProvider, useAnalytics } from "./components/Analytics";
import { SEO } from "./components/SEO";
import { ToastProvider, useToast } from "./contexts/ToastContext";
import { about, contact, experience, personalInfo, projects, skills, socialLinks, testimonials } from "./portfolio-config";

type ExperienceItem = (typeof experience)[number];
type Project = (typeof projects)[number];

function Portfolio() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const { trackEvent } = useAnalytics();
  const currentExperience = experience[activeExperience] as ExperienceItem;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".field-hero > *", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  const selectExperience = (index: number) => {
    setActiveExperience(index);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector("#route-detail")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formState.name.trim()) next.name = "Add your name so I know who is reaching out.";
    if (!formState.email.trim()) next.email = "Add an email for the reply.";
    else if (!/\S+@\S+\.\S+/.test(formState.email)) next.email = "Use a valid email address.";
    if (!formState.message.trim()) next.message = "Tell me what you are building.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      showToast("error", "Please check the marked fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send("service_9behbt3", "template_y8hbvog", { from_name: formState.name, from_email: formState.email, message: formState.message }, "6tkYn90Zu-NJxnm3x");
      trackEvent({ action: "form_submit", category: "contact", label: "contact_form" });
      showToast("success", "Message sent successfully!", "I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      showToast("error", "Failed to send message", "Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="field-site">
      <header className="field-nav">
        <a href="#home" className="field-mark" aria-label="Moon Seng home"><span>MS</span><strong>FIELD MANUAL</strong></a>
        <nav className={menuOpen ? "field-links is-open" : "field-links"} aria-label="Primary navigation">
          <a href="#route" onClick={() => setMenuOpen(false)}>Career route</a>
          <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-action">Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="field-hero section-frame">
          <div className="hero-route-label"><span className="live-dot" /> AVAILABLE FOR SELECT WORK <span>MM / 2026</span></div>
          <div className="hero-copy">
            <p className="field-note">/ 00. INTRODUCTION</p>
            <h1>Building interfaces<br /><em>that hold up.</em></h1>
            <p className="hero-identity">MOON SENG / FULL-STACK DEVELOPER</p>
            <p className="hero-description">Frontend-focused full-stack developer shipping production-ready web, mobile, and API experiences end to end.</p>
            <div className="hero-actions"><a className="button button-primary" href="#route">Review career route <ChevronDown size={17} /></a><a className="button button-quiet" href="#systems">Open selected systems <ArrowUpRight size={17} /></a></div>
          </div>
          <div className="hero-record">
            <div className="record-top"><span>ACTIVE RECORD</span><span>AXIOM MYANMAR</span></div>
            <div className="record-figure"><span className="record-year">2024 — NOW</span><strong>SENIOR<br />FULL STACK<br />DEVELOPER</strong><span className="record-stamp">IN<br />PRODUCTION</span></div>
            <div className="record-foot"><span>React / Expo / Django / PostgreSQL</span><span>01 / 04</span></div>
          </div>
          <div className="hero-foot"><span>REMOTE / WORLDWIDE</span><span>SCROLL TO TRACE THE WORK <ChevronDown size={14} /></span></div>
        </section>

        <section id="route" className="route-section section-frame">
          <div className="section-heading"><p className="field-note">/ CAREER ROUTE</p><h2>A route through<br /><em>the work.</em></h2><p>Three years of building across interface, API, data, and delivery. Select a point on the route to inspect the record.</p></div>
          <div className="route-layout">
            <div className="route-list" role="tablist" aria-label="Career history">
              {experience.map((item, index) => <button key={`${item.company}-${item.period}`} id={`route-tab-${index}`} className={index === activeExperience ? "route-stop active" : "route-stop"} onClick={() => selectExperience(index)} role="tab" aria-selected={index === activeExperience} aria-controls="route-detail" onKeyDown={(event) => { if (event.key === "ArrowDown" || event.key === "ArrowRight") { event.preventDefault(); document.getElementById(`route-tab-${Math.min(index + 1, experience.length - 1)}`)?.focus(); } if (event.key === "ArrowUp" || event.key === "ArrowLeft") { event.preventDefault(); document.getElementById(`route-tab-${Math.max(index - 1, 0)}`)?.focus(); } }}><span className="route-index">0{index + 1}</span><span className="route-line" /><span className="route-stop-copy"><strong>{item.title}</strong><small>{item.company} / {item.period}</small></span><ArrowUpRight size={16} /></button>)}
            </div>
            <article id="route-detail" className="route-detail" key={activeExperience} role="tabpanel" tabIndex={0} aria-labelledby={`route-tab-${activeExperience}`}>
              <div className="detail-header"><span>{currentExperience.type === "education" ? "EDUCATION RECORD" : "WORK RECORD"}</span><span>{currentExperience.period}</span></div>
              <h3>{currentExperience.title}</h3><p className="detail-company">{currentExperience.company}</p><p className="detail-description">{currentExperience.description}</p>
              {"highlight" in currentExperience && <p className="detail-highlight">{currentExperience.highlight}</p>}
              <div className="detail-achievements"><p className="field-note">VERIFIED NOTES</p>{currentExperience.achievements.map((achievement) => <div className="achievement" key={achievement}><Check size={15} /> <span>{achievement}</span></div>)}</div>
              <div className="detail-stack">{currentExperience.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          </div>
        </section>

        <section id="systems" className="systems-section section-frame">
          <div className="section-heading systems-heading"><div><p className="field-note">/ SYSTEM RECORDS</p><h2>Selected<br /><em>systems.</em></h2></div><p>Interfaces, APIs, and delivery pipelines documented from the field. Open a record for the full evidence currently on hand.</p></div>
          <div className="system-grid">{projects.map((project, index) => <article className={project.featured ? "system-card featured" : "system-card"} key={project.title}><div className="system-media"><span className="media-index">0{index + 1} / SYSTEM</span>{project.image.endsWith(".mp4") ? <video src={project.image} autoPlay muted loop playsInline /> : <img src={project.image} alt={`${project.title} project preview`} />}</div><div className="system-card-body"><div className="system-meta"><span>{project.subtitle}</span><span>{project.featured ? "FEATURED" : "ARCHIVE"}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="card-footer"><div className="tag-row">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><button onClick={() => setActiveProject(project)}>Open record <ArrowUpRight size={15} /></button></div></div></article>)}</div>
        </section>

        <section id="capabilities" className="capabilities-section section-frame">
          <div className="section-heading"><p className="field-note">/ CAPABILITY INDEX</p><h2>What I bring<br /><em>to the table.</em></h2></div>
          <div className="capability-table">{skills.map((skill, index) => <div className="capability-row" key={skill.title}><span className="capability-number">0{index + 1}</span><h3>{skill.title}</h3><div>{skill.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><ArrowUpRight size={17} /></div>)}</div>
          <div className="about-strip"><p>{about.introParagraphs[1]}</p><div><span className="field-note">CORE STACK</span><p className="stack-line">{about.stackGroups.flatMap((group) => group.items).slice(0, 10).join("  /  ")}</p></div></div>
        </section>

        <section className="testimonials-section section-frame"><div className="section-heading"><p className="field-note">/ FIELD NOTES</p><h2>Good work is<br /><em>collaborative.</em></h2></div><div className="testimonial-grid">{testimonials.map((testimonial) => <blockquote key={testimonial.name}><span className="quote-mark">“</span><p>{testimonial.content}</p><footer><strong>{testimonial.name}</strong><span>{testimonial.role} / {testimonial.company}</span></footer></blockquote>)}</div></section>

         <section id="contact" className="contact-section section-frame"><div className="contact-intro"><p className="field-note">/ OPEN CHANNEL</p><h2>Let’s make<br /><em>something hold.</em></h2><p>{contact.description}</p><div className="contact-facts"><a href="mailto:moonseng.dev@gmail.com"><Mail size={17} /> moonseng.dev@gmail.com</a><span><MapPin size={17} /> Remote / Worldwide</span><span className="available"><span className="live-dot" /> Open to full-time roles and select freelance</span></div></div><form className="contact-form" onSubmit={submitContact} noValidate><div className="form-kicker">MESSAGE INTAKE <span>REPLY WITHIN 2–3 DAYS</span></div><label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name && <small id="contact-name-error">{errors.name}</small>}</label><label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email && <small id="contact-email-error">{errors.email}</small>}</label><label htmlFor="contact-message">What are you building?<textarea id="contact-message" name="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="A little context goes a long way." aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message && <small id="contact-message-error">{errors.message}</small>}</label><button className="button button-primary submit-button" disabled={isSubmitting}>{isSubmitting ? "TRANSMITTING..." : <>Send message <Send size={16} /></>}</button></form></section>
      </main>

      <footer className="field-footer"><span className="field-mark"><span>MS</span><strong>FIELD MANUAL</strong></span><span>BUILT WITH CARE / MM — 2026</span><div><a href={socialLinks.github} aria-label="GitHub"><Github size={17} /></a><a href={socialLinks.linkedin} aria-label="LinkedIn"><Linkedin size={17} /></a><a href={socialLinks.email} aria-label="Email"><Mail size={17} /></a></div></footer>

      {activeProject && <div className="record-overlay" role="dialog" aria-modal="true" aria-label={`${activeProject.title} project record`}><button className="overlay-close" onClick={() => setActiveProject(null)} aria-label="Close record"><X /></button><div className="overlay-inner"><p className="field-note">/ SYSTEM RECORD / {activeProject.tags.join(" / ")}</p><h2>{activeProject.title}</h2><p className="overlay-subtitle">{activeProject.subtitle}</p><div className="overlay-grid"><div>{activeProject.image.endsWith(".mp4") ? <video src={activeProject.image} autoPlay muted loop playsInline /> : <img src={activeProject.image} alt={`${activeProject.title} preview`} />}</div><div><p>{activeProject.description}</p><p className="field-note">FEATURES ON RECORD</p>{activeProject.features.map((feature) => <div className="achievement" key={feature}><Check size={15} /> <span>{feature.replace(/^TODO: /, "")}</span></div>)}<div className="overlay-links">{activeProject.demo && <a href={activeProject.demo} target="_blank" rel="noreferrer">Live system <ArrowUpRight size={15} /></a>}{activeProject.github && <a href={activeProject.github} target="_blank" rel="noreferrer">Source record <Github size={15} /></a>}</div></div></div></div></div>}
    </div>
  );
}

export default function App() {
  return <ErrorBoundary><ToastProvider><AnalyticsProvider><SEO title={`${personalInfo.name} | Full Stack Developer`} description={personalInfo.tagline} image="/og-portfolio.jpg" /><Portfolio /></AnalyticsProvider></ToastProvider></ErrorBoundary>;
}
