import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Grid,
  Layers,
  PenTool,
  Monitor,
  ChevronRight,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrollY;
};

const FadeIn = ({ children, delay = 0, className = "", style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const projects = [
  {
    id: "01",
    title: "Forma Identity",
    category: "Branding",
    desc: "Visual identity system for a Swiss architecture collective. Mark, type, motion.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80&fit=crop",
  },
  {
    id: "02",
    title: "Vessel App",
    category: "Product Design",
    desc: "End-to-end design of a mindfulness product. From research to final pixel.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop",
  },
  {
    id: "03",
    title: "Côte Editorial",
    category: "Art Direction",
    desc: "Seasonal publication for a Parisian lifestyle brand. Photography, layout, print.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
  },
  {
    id: "04",
    title: "Nordvik Site",
    category: "Web Design",
    desc: "Digital presence for a Scandinavian furniture studio. Motion-led, content-first.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop",
  },
  {
    id: "05",
    title: "Axiom System",
    category: "Design System",
    desc: "Component library and guidelines for a B2B SaaS platform at scale.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80&fit=crop",
  },
  {
    id: "06",
    title: "Aurum Launch",
    category: "Campaign",
    desc: "Full campaign for a luxury watchmaker across digital and print channels.",
    year: "2022",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop",
  },
];

const services = [
  {
    icon: PenTool,
    title: "Brand & Identity",
    desc: "Logos, visual systems, typography, color theory, and brand guidelines built to last.",
  },
  {
    icon: Monitor,
    title: "Digital Design",
    desc: "Websites, apps, and interfaces designed with precision, craft, and intent.",
  },
  {
    icon: Layers,
    title: "Art Direction",
    desc: "Photography, film, editorial, and campaign direction that communicates a clear voice.",
  },
  {
    icon: Grid,
    title: "Design Systems",
    desc: "Scalable component libraries and guidelines that bring consistency across products.",
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We map the landscape. Goals, context, audience, and constraints." },
  { num: "02", title: "Strategy", desc: "Positioning, narrative, and direction. The foundation of everything." },
  { num: "03", title: "Design", desc: "Iterative craft. Concepts refined into precise, considered work." },
  { num: "04", title: "Delivery", desc: "Polished files, documentation, and ongoing support as needed." },
];

const team = [
  {
    name: "Noa Hartmann",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80&fit=crop&crop=face",
  },
  {
    name: "Elias Park",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80&fit=crop&crop=face",
  },
  {
    name: "Sofia Merc",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&fit=crop&crop=face",
  },
];

const stats = [
  ["48+", "Projects Completed"],
  ["6", "Years Active"],
  ["12", "Brand Partners"],
  ["3", "Studio Members"],
];

const navLinks = ["Work", "Services", "Process", "Studio", "Contact"];

function LogoMark({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 9 }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          border: "1.5px solid #0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 8, height: 8, background: "#0a0a0a" }} />
      </div>
      <span style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "baseline" }}>
        <span style={{ fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.01em" }}>M</span>
        <span style={{ fontWeight: 300, fontStyle: "italic", color: "#0a0a0a" }}>ono</span>
        <span style={{ display: "inline-block", width: 5 }} />
        <span style={{ fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.01em" }}>S</span>
        <span style={{ fontWeight: 300, fontStyle: "italic", color: "#888" }}>tudio</span>
      </span>
    </button>
  );
}

function NavLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 12,
        letterSpacing: "0.06em",
        color: hovered ? "#0a0a0a" : "#4d4d4d",
        textTransform: "uppercase",
        fontWeight: 500,
        position: "relative",
        padding: "4px 0",
        transition: "color 0.2s ease",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: hovered ? "100%" : "0%",
          background: "#0a0a0a",
          transition: "width 0.3s ease",
          display: "block",
        }}
      />
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const scrollY = useScrollY();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ background: "#fdfcfb", color: "#0a0a0a", minHeight: "100vh" }}>

      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrollY > 40 ? "1px solid #e1e1e1" : "1px solid transparent",
          background: scrollY > 40 ? "rgba(253,252,251,0.96)" : "transparent",
          backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LogoMark onClick={() => scrollTo("hero")} />

          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navLinks.map((link) => (
              <NavLink key={link} label={link} onClick={() => scrollTo(link.toLowerCase())} />
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 4 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ borderTop: "1px solid #e1e1e1", background: "#fdfcfb", overflow: "hidden" }}
            >
              <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      textAlign: "left",
                      letterSpacing: "0.04em",
                      color: "#0a0a0a",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section id="hero" style={{ maxWidth: 1160, margin: "0 auto", padding: "140px 32px 120px" }}>
        <div className="hero-grid" style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
          <div style={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #e1e1e1",
                padding: "6px 14px",
                marginBottom: 48,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d" }}>
                Creative Studio — Est. 2018
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 32 }}
            >
              Design
              <br />
              <span style={{ color: "#4d4d4d", fontWeight: 300 }}>with</span>
              <br />
              Intention.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{ fontSize: 16, lineHeight: 1.7, color: "#4d4d4d", maxWidth: 460, marginBottom: 48 }}
            >
              We're a small, focused studio working with forward-thinking brands on identity,
              digital, and art direction. Precise. Considered. Craft-led.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <motion.button
                onClick={() => scrollTo("work")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#0a0a0a",
                  color: "#fdfcfb",
                  border: "1px solid #0a0a0a",
                  padding: "14px 28px",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 500,
                }}
              >
                View Work <ArrowUpRight size={14} />
              </motion.button>

              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.02, background: "#f5f4f2" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "transparent",
                  color: "#0a0a0a",
                  border: "1px solid #e1e1e1",
                  padding: "14px 28px",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "background 0.2s ease",
                }}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: 280, flexShrink: 0, paddingTop: 24 }}
          >
            <div style={{ border: "1px solid #e1e1e1", padding: 32, background: "#f5f4f2" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 24 }}>
                Selected numbers
              </div>
              {stats.map(([num, label], i) => (
                <div
                  key={label}
                  style={{
                    paddingBottom: i < stats.length - 1 ? 16 : 0,
                    marginBottom: i < stats.length - 1 ? 16 : 0,
                    borderBottom: i < stats.length - 1 ? "1px solid #e1e1e1" : "none",
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontSize: 12, color: "#4d4d4d", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ height: "1px", background: "#e1e1e1", marginTop: 96, transformOrigin: "left" }}
        />
      </section>

      <section id="work" style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 32px 120px" }}>
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 64,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 16 }}>
                Selected Work
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Projects that
                <br />
                define craft.
              </h2>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#4d4d4d",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4d4d4d")}
            >
              All Projects <ChevronRight size={14} />
            </button>
          </div>
        </FadeIn>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#e1e1e1" }}
        >
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <motion.div
                onMouseEnter={() => setActiveProject(p.id)}
                onMouseLeave={() => setActiveProject(null)}
                style={{ background: "#fdfcfb", cursor: "pointer", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}
              >
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    animate={{ scale: activeProject === p.id ? 1.05 : 1 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                  <motion.div
                    animate={{ opacity: activeProject === p.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10,10,10,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgba(253,252,251,0.6)",
                        padding: "10px 20px",
                        color: "#fdfcfb",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      View Project <ArrowUpRight size={12} />
                    </div>
                  </motion.div>
                </div>

                <div style={{ padding: "22px 26px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#4d4d4d",
                        border: "1px solid #e1e1e1",
                        padding: "3px 9px",
                      }}
                    >
                      {p.category}
                    </span>
                    <span style={{ fontSize: 11, color: "#b0b0b0" }}>{p.year}</span>
                  </div>
                  <div style={{ fontSize: 10, color: "#c8c8c8", marginBottom: 4, letterSpacing: "0.04em" }}>{p.id}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#4d4d4d", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="services" style={{ borderTop: "1px solid #e1e1e1", background: "#f5f4f2" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
          <FadeIn>
            <div style={{ marginBottom: 72 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 16 }}>
                What We Do
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", maxWidth: 540 }}>
                Studio services,
                <br />
                clearly defined.
              </h2>
            </div>
          </FadeIn>

          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#e1e1e1" }}
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ background: "#ededeb" }}
                    style={{ background: "#f5f4f2", padding: 36, transition: "background 0.25s ease" }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid #c8c8c8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 28,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#4d4d4d", lineHeight: 1.65 }}>{s.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
        <FadeIn>
          <div style={{ marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 16 }}>
              How We Work
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              A process built
              <br />
              for clarity.
            </h2>
          </div>
        </FadeIn>

        <div
          className="process-grid"
          style={{ display: "flex", borderTop: "1px solid #e1e1e1", borderLeft: "1px solid #e1e1e1" }}
        >
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1} style={{ flex: 1 }}>
              <motion.div
                whileHover={{ background: "#f5f4f2" }}
                style={{
                  flex: 1,
                  padding: "40px 32px",
                  borderRight: "1px solid #e1e1e1",
                  borderBottom: "1px solid #e1e1e1",
                  transition: "background 0.25s ease",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#b0b0b0", marginBottom: 32 }}>{step.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 16 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "#4d4d4d", lineHeight: 1.65 }}>{step.desc}</p>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: -7,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 13,
                      height: 13,
                      border: "1px solid #e1e1e1",
                      background: "#fdfcfb",
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: 4, height: 4, background: "#0a0a0a" }} />
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="studio" style={{ borderTop: "1px solid #e1e1e1", background: "#f5f4f2" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
          <div
            className="studio-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
          >
            <FadeIn>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 16 }}>
                  The Studio
                </div>
                <h2
                  style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 32 }}
                >
                  Small team.
                  <br />
                  Big thinking.
                </h2>
                <p style={{ fontSize: 15, color: "#4d4d4d", lineHeight: 1.75, marginBottom: 24 }}>
                  Mono Studio was founded on a belief that the best design comes from deep focus.
                  We keep our team intentionally small — three people who care deeply about the
                  work we put into the world.
                </p>
                <p style={{ fontSize: 15, color: "#4d4d4d", lineHeight: 1.75, marginBottom: 40 }}>
                  We work with a select number of clients at a time, which means every project
                  gets our full attention, from the first conversation to the final file.
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 20px",
                    border: "1px solid #e1e1e1",
                    background: "#fdfcfb",
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0a0a0a" }} />
                  <span style={{ fontSize: 13, color: "#0a0a0a" }}>Available for new projects, Q3 2025</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 24 }}>
                  Core Team
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e1e1e1" }}>
                  {team.map((member) => (
                    <motion.div
                      key={member.name}
                      whileHover={{ background: "#ededeb" }}
                      style={{
                        background: "#f5f4f2",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        transition: "background 0.2s ease",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: 44, height: 44, objectFit: "cover", flexShrink: 0, filter: "grayscale(20%)" }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{member.name}</div>
                        <div style={{ fontSize: 12, color: "#4d4d4d", letterSpacing: "0.02em" }}>{member.role}</div>
                      </div>
                      <ArrowUpRight size={14} color="#c0c0c0" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
        <FadeIn>
          <div style={{ marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 16 }}>
              Get in Touch
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Let's make
              <br />
              something great.
            </h2>
          </div>
        </FadeIn>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
          <FadeIn>
            <div>
              <p style={{ fontSize: 15, color: "#4d4d4d", lineHeight: 1.75, marginBottom: 48 }}>
                Tell us about your project. We read every message and respond within 48 hours.
              </p>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 12 }}>
                  Email directly
                </div>
                <a
                  href="mailto:hello@monostudio.co"
                  style={{ fontSize: 15, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  hello@monostudio.co <ArrowUpRight size={14} />
                </a>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4d4d4d", marginBottom: 12 }}>
                  Social
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: 36,
                        height: 36,
                        border: "1px solid #e1e1e1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={14} strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e1e1e1" }}>
                {[
                  { label: "Name", key: "name", type: "text", placeholder: "Your full name" },
                  { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.key} style={{ background: "#fdfcfb", padding: "20px 24px" }}>
                    <label
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#4d4d4d",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      required
                      style={{ width: "100%", background: "none", border: "none", fontSize: 14, color: "#0a0a0a", padding: 0 }}
                    />
                  </div>
                ))}

                <div style={{ background: "#fdfcfb", padding: "20px 24px" }}>
                  <label
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#4d4d4d",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    style={{ width: "100%", background: "none", border: "none", fontSize: 14, color: "#0a0a0a", padding: 0, resize: "none" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  style={{
                    background: submitted ? "#2d6a4f" : "#0a0a0a",
                    color: "#fdfcfb",
                    border: "none",
                    padding: "20px 24px",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 500,
                    transition: "background 0.4s ease",
                  }}
                >
                  {submitted ? "Message Sent ✓" : "Send Message"}
                  {!submitted && <ArrowUpRight size={16} />}
                </motion.button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #e1e1e1" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "48px 32px" }}>
          <div
            className="footer-inner"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}
          >
            <LogoMark onClick={() => scrollTo("hero")} />

            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "#4d4d4d",
                    textTransform: "uppercase",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4d4d4d")}
                >
                  {link}
                </button>
              ))}
            </div>

            <a
              href="mailto:hello@monostudio.co"
              style={{ fontSize: 12, color: "#4d4d4d", display: "flex", alignItems: "center", gap: 6 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4d4d4d")}
            >
              <Mail size={13} strokeWidth={1.5} /> hello@monostudio.co
            </a>
          </div>

          <div style={{ height: "1px", background: "#e1e1e1", margin: "32px 0" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 11, color: "#b0b0b0", letterSpacing: "0.04em" }}>
              © 2025 Mono Studio. All rights reserved.
            </span>
            <span style={{ fontSize: 11, color: "#b0b0b0", letterSpacing: "0.04em" }}>
              Concept project — built for portfolio & learning purposes only.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
