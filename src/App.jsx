import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const projects = [
  {
    title: "Task Tracker (MERN)",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    description:
      "Full CRUD app with auth-ready structure and clean UI. Built to showcase backend + UI polish.",
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Downtime Tracker (Manufacturing)",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    description:
      "Smart downtime logging + reporting concept for manufacturing. Great recruiter conversation starter.",
    stack: ["React", "Charts", "API", "PostgreSQL/Prisma"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Hospital Website",
    gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    description:
      "Multi-page responsive site with modern layout, animations, and clear navigation structure.",
    stack: ["HTML", "Bootstrap", "JS"],
    links: {
      live: "#",
      github: "#",
    },
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
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-indigo-500/25 to-cyan-400/25 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-r from-emerald-400/20 to-sky-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[220px] right-[-140px] h-[420px] w-[420px] rounded-full bg-gradient-to-r from-amber-400/15 to-rose-500/20 blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-white/10" />
            <span className="font-semibold tracking-tight">Jonathan Bola</span>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 md:grid-cols-2 md:items-center"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight md:text-6xl"
            >
              Full-Stack Web Developer
              <span className="block bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                MERN Stack + More
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300"
            >
              I build modern, fast, and beautiful web apps — from clean React interfaces
              to scalable Node/Express APIs and databases. I love animations, crisp UX,
              and projects that feel “alive”.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/5"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {["React", "Node", "Express", "MongoDB", "JWT", "Tailwind", "Next.js", "SQL"].map(
                (s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {s}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Animated card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-zinc-950/60 p-5"
            >
              <p className="text-sm text-zinc-300">Currently building:</p>
              <p className="mt-2 text-xl font-semibold">
                Animated Portfolio + Project GIF Carousel
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-zinc-300">Focus</p>
                  <p className="mt-1 font-semibold">UX + Performance</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-zinc-300">Stack</p>
                  <p className="mt-1 font-semibold">MERN / Next</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold md:text-3xl">
            Featured Projects
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="mt-2 max-w-2xl text-zinc-300"
          >
            Swipe through GIF previews. Each one is built to demonstrate real full-stack skill,
            clean UI, and recruiter-friendly storytelling.
          </motion.p>

          <motion.div custom={2} variants={fadeUp} className="mt-8">
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{ rotate: 18, stretch: 0, depth: 200, modifier: 1 }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="pb-10"
            >
              {projects.map((p) => (
                <SwiperSlide
                  key={p.title}
                  style={{ width: "340px" }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={p.gif}
                      alt={p.title}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{p.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      <a
                        href={p.links.live}
                        className="flex-1 rounded-2xl bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-950 transition hover:opacity-90"
                      >
                        Live
                      </a>
                      <a
                        href={p.links.github}
                        className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white/10"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-2 text-sm text-zinc-300">
              A builder mindset, obsessed with clean UX and real-world impact.
            </p>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="md:col-span-2">
            <p className="text-zinc-200 leading-relaxed">
              I’m a full-stack developer focused on the MERN stack, with experience building
              CRUD systems, dashboards, and responsive websites. I enjoy turning ideas into
              polished products — fast, animated, and easy to use.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                { k: "Strength", v: "Frontend polish + backend structure" },
                { k: "Style", v: "Animations, modern UI, clean layouts" },
                { k: "Goal", v: "Build apps recruiters remember" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4"
                >
                  <p className="text-xs text-zinc-400">{x.k}</p>
                  <p className="mt-1 text-sm font-semibold">{x.v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-zinc-300">
            Want to collaborate or hire? Send a message and I’ll reply quickly.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <button
              onClick={() => navigator.clipboard.writeText("your.email@example.com")}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
            >
              Copy Email
            </button>
            <a
              href="#"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Jonathan Bola — Built with React + Motion
      </footer>
    </div>
  );
}
