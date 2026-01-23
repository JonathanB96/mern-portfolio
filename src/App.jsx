import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import hgGif from "./images/hg.gif";
import toolTrackGif from "./images/tooltrack.gif";
import recipeGif from "./images/recipes.gif";

const projects = [
 
  {
    // ✅ rename
    title: "Tool Tracker (Manufacturing)",
    // ✅ replace with local gif
    gif: toolTrackGif,
    description:
      "Smart downtime logging + reporting concept for manufacturing. Great recruiter conversation starter.",
    stack: ["React", "Bootstrap", "API", "MongoDB"],
    links: { live: "https://mytooltracker.netlify.app/", github: "https://github.com/JonathanB96/tootrack" },
  },
  {
    title: "Recipe Viewer",
    gif: recipeGif,
    description:
      "Full CRUD app with auth-ready structure and clean UI. Built to showcase backend + UI polish.",
    stack: ["React", "Ruby on rails", "Postgresql", "Active Record"],
    links: { live: "none", github: "https://github.com/JonathanB96/phase-5-recipe-viewer" },
  },
  {
    title: "Hospital Website",
    // ✅ replace with local gif
    gif: hgGif,
    description:
      "Multi-page responsive site with modern layout, animations, and clear navigation structure.",
    stack: ["HTML", "Bootstrap", "JS"],
    links: { live: "https://http://hgkinshasa.netlify.app", github: "https://github.com/JonathanB96/hopital-general-kinshasa" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function App() {
  return (
    <div className="portfolio-root bg-dark text-light min-vh-100">
      {/* Background blobs */}
      <div className="portfolio-bg position-fixed top-0 start-0 w-100 h-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="blob blob-1"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="blob blob-2"
        />
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="blob blob-3"
        />
      </div>

      {/* Header */}
      <header className="sticky-top border-bottom border-light border-opacity-10 header-glass">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div className="logo-box rounded" />
            <span className="fw-semibold">Jonathan Bola</span>
          </div>

          <nav className="d-none d-md-flex gap-4 small text-secondary">
            <a className="link-secondary text-decoration-none" href="#projects">
              Projects
            </a>
            <a className="link-secondary text-decoration-none" href="#about">
              About
            </a>
            <a className="link-secondary text-decoration-none" href="#contact">
              Contact
            </a>
          </nav>

          <a href="#contact" className="btn btn-light fw-semibold">
            Let’s Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-5 py-md-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="row g-5 align-items-center"
        >
          <div className="col-12 col-md-6">
            <motion.div variants={fadeUp}>
              <span className="badge rounded-pill text-bg-dark border border-light border-opacity-10 px-3 py-2">
                <span className="status-dot me-2" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mt-4 display-5 fw-bold lh-1"
            >
              Full-Stack Web Developer
              <span className="d-block gradient-text">MERN Stack + More</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-3 text-secondary fs-5"
            >
              I build modern, fast, and beautiful web apps — from clean React interfaces to
              scalable Node/Express APIs and databases. I love animations, crisp UX, and
              projects that feel alive.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="mt-4 d-flex flex-wrap gap-2">
              <a href="#projects" className="btn btn-light fw-semibold px-4 py-2">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light px-4 py-2">
                Contact Me
              </a>
              <a href="#" className="btn btn-outline-secondary px-4 py-2">
                Download Resume
              </a>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="mt-4 d-flex flex-wrap gap-2">
              {["React", "Node", "Express", "MongoDB", "JWT", "Bootstrap", "Next.js", "SQL"].map(
                (s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <div className="col-12 col-md-6">
            <motion.div
              custom={2}
              variants={fadeUp}
              className="glass-card p-4 p-md-4"
            >
              <div className="glass-overlay" />
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="position-relative rounded-4 border border-light border-opacity-10 bg-dark bg-opacity-50 p-4"
              >
                <p className="text-secondary mb-2">Currently building:</p>
                <p className="h4 fw-semibold mb-3">
                  Animated Portfolio + Project GIF Carousel
                </p>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="rounded-4 border border-light border-opacity-10 bg-light bg-opacity-5 p-3">
                      <div className="small text-secondary">Focus</div>
                      <div className="fw-semibold">UX + Performance</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="rounded-4 border border-light border-opacity-10 bg-light bg-opacity-5 p-3">
                      <div className="small text-secondary">Stack</div>
                      <div className="fw-semibold">MERN / Next</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="container pb-5 pb-md-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="h2 fw-bold">
            Featured Projects
          </motion.h2>
          <motion.p custom={1} variants={fadeUp} className="text-secondary">
            Swipe through GIF previews. Each one demonstrates full-stack skill, clean UI, and
            recruiter-friendly storytelling.
          </motion.p>

          <motion.div custom={2} variants={fadeUp} className="mt-4">
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{ rotate: 18, stretch: 0, depth: 200, modifier: 1 }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="pb-4"
            >
              {projects.map((p) => (
                <SwiperSlide key={p.title} style={{ width: "340px" }}>
                  <div className="project-card p-3">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden border border-light border-opacity-10">
                      <img src={p.gif} alt={p.title} className="w-100 h-100 object-fit-cover" />
                    </div>

                    <div className="mt-3">
                      <div className="h5 fw-semibold mb-2">{p.title}</div>
                      <p className="text-secondary small mb-3">{p.description}</p>

                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {p.stack.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex gap-2">
                        {p.links.live == "none" ? null : <a href={p.links.live} className="btn btn-light w-50 fw-semibold">
                          Live
                        </a>}
                       
                        <a href={p.links.github} className="btn btn-outline-light w-50">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="container pb-5 pb-md-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card p-4 p-md-5"
        >
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <motion.h2 variants={fadeUp} className="h2 fw-bold">
                About
              </motion.h2>
              <motion.p variants={fadeUp} className="text-secondary small">
                A builder mindset, obsessed with clean UX and real-world impact.
              </motion.p>
            </div>

            <div className="col-12 col-md-8">
              <motion.p custom={1} variants={fadeUp} className="mb-4">
                I’m a full-stack developer focused on the MERN stack, with experience building CRUD
                systems, dashboards, and responsive websites. I enjoy turning ideas into polished
                products — fast, animated, and easy to use.
              </motion.p>

              <div className="row g-3">
                {[
                  { k: "Strength", v: "Frontend polish + backend structure" },
                  { k: "Style", v: "Animations, modern UI, clean layouts" },
                  { k: "Goal", v: "Build apps recruiters remember" },
                ].map((x) => (
                  <div className="col-12 col-md-4" key={x.k}>
                    <div className="rounded-4 border border-light border-opacity-10 bg-dark bg-opacity-50 p-3">
                      <div className="text-secondary small">{x.k}</div>
                      <div className="fw-semibold">{x.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-5 pb-md-6">
        <div className="glass-card p-4 p-md-5">
          <h2 className="h2 fw-bold">Contact</h2>
          <p className="text-secondary">
            Want to collaborate or hire? Send a message and I’ll reply quickly.
          </p>

          <div className="d-flex flex-column flex-md-row gap-2 mt-4">
            <button
              onClick={() => navigator.clipboard.writeText("your.email@example.com")}
              className="btn btn-light fw-semibold px-4 py-2"
            >
              Copy Email
            </button>
            <a href="#" className="btn btn-outline-light px-4 py-2">
              LinkedIn
            </a>
            <a href="#" className="btn btn-outline-light px-4 py-2">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-top border-light border-opacity-10 py-4 text-center text-secondary small">
        © {new Date().getFullYear()} Jonathan Bola — Built with React + Motion
      </footer>
    </div>
  );
}
