import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    title: "Voya World",
    description:
      "A travel and culture platform exploring how people discover countries, culture, and useful destination context.",
    tags: ["Next.js", "TypeScript", "Product Design"],
    color: "blue" as const,
    href: "https://voyatravel.vercel.app/",
  },
  {
    title: "DigiCard",
    description:
      "A digital networking card concept for sharing professional information quickly through a polished mobile-first experience.",
    tags: ["React", "UI/UX", "Full-stack learning"],
    color: "purple" as const,
    href: "https://github.com/bjkc01/digicard",
  },
  {
    title: "ZipShade",
    description:
      "An interactive campus mapping concept that estimates where building shadows move throughout the day.",
    tags: ["Mapping", "Data", "Prototyping"],
    color: "green" as const,
    href: "#",
  },
];

const skills = [
  "Python",
  "SQL",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "GitHub",
  "Oracle Data Modeler",
  "Excel",
  "Microsoft 365",
  "Linux",
];

export default function Home() {
  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080a0f]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight text-white">
            Prem Paudel
          </a>

          <div className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#experience">Experience</a>
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
          </div>

          <a
            href="mailto:"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-white/25 hover:bg-white/[0.04]"
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="hero-orb absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to building, learning, and new opportunities
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Information Systems · Management
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.8rem]">
            I build where
            <span className="block text-neutral-500">business meets technology.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            I&apos;m Prem, an Information Systems student interested in product,
            technology, databases, project management, and turning ideas into useful
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              View my work <ArrowDownRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Resume <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
            <a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com/PremPaudel05">
              <Github size={16} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="#">
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> Akron, Ohio
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="section-label">01 / About</p>
          </div>
          <div>
            <h2 className="section-title">
              Curious about how systems, people, and products fit together.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-7 text-neutral-400">
              <p>
                I&apos;m studying Information Systems — Management and building experience
                across software, databases, business analysis, and project work.
              </p>
              <p>
                I like projects where I can understand a real problem, organize the pieces,
                and build something people can actually use. This portfolio is a collection
                of that work and what I&apos;m learning along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="section-label mb-12">02 / Experience</p>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            <div className="grid gap-5 py-8 md:grid-cols-[0.6fr_1fr_2fr]">
              <span className="text-sm text-neutral-500">Summer 2027</span>
              <div>
                <p className="font-medium text-white">Progressive</p>
                <p className="mt-1 text-sm text-neutral-500">IT Project Management Intern</p>
              </div>
              <p className="text-sm leading-6 text-neutral-400">
                Incoming internship focused on technology project work, collaboration, and
                learning how IT initiatives move from planning through execution.
              </p>
            </div>

            <div className="grid gap-5 py-8 md:grid-cols-[0.6fr_1fr_2fr]">
              <span className="text-sm text-neutral-500">Present</span>
              <div>
                <p className="font-medium text-white">University of Akron</p>
                <p className="mt-1 text-sm text-neutral-500">Information Systems — Management</p>
              </div>
              <p className="text-sm leading-6 text-neutral-400">
                Coursework and projects across databases, Python, systems thinking,
                business technology, analytics, and application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">03 / Selected work</p>
            <h2 className="section-title mt-4">Things I&apos;ve been building.</h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <GlowCard
              key={project.title}
              glowColor={project.color}
              customSize
              className="min-h-[350px] w-full"
            >
              <a href={project.href} className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-600">
                    0{index + 1}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-600 transition group-hover:text-white"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-xs text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </GlowCard>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr]">
            <div>
              <p className="section-label">04 / Toolkit</p>
            </div>
            <div>
              <h2 className="section-title">Tools I work with.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-sm text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12">
          <BriefcaseBusiness className="text-neutral-500" size={24} />
          <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Have something interesting to build or talk about?
          </h2>
          <p className="mt-5 max-w-xl text-neutral-400">
            I&apos;m always interested in learning, collaborating, and meeting people working
            across technology and business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="contact-link" href="mailto:">
              <Mail size={16} /> Email me
            </a>
            <a className="contact-link" href="#">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Designed & built by Prem Paudel.</span>
          <span>Built with Next.js, TypeScript & Tailwind.</span>
        </div>
      </footer>
    </main>
  );
}
