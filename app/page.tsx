import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AnimatedLetterText } from "@/components/ui/potfolio-text";
import graduationPhoto from "@/public/images/prem-graduation.jpg";

const linkedinUrl = "https://www.linkedin.com/in/prem-paudel-81a366364/";

const projects = [
  {
    title: "Voya World",
    eyebrow: "Travel & culture platform",
    description:
      "A web experience for discovering countries, culture, and useful destination context while I learn modern full-stack product development.",
    tags: ["Next.js", "TypeScript", "Product Design"],
    color: "blue" as const,
    href: "https://voyatravel.vercel.app/",
    status: "Live",
  },
  {
    title: "DigiCard",
    eyebrow: "Digital networking",
    description:
      "A mobile-first digital networking card concept designed to make sharing professional information faster and more polished.",
    tags: ["React", "UI/UX", "Product Thinking"],
    color: "purple" as const,
    href: "https://github.com/bjkc01/digicard",
    status: "Building",
  },
  {
    title: "ZipShade",
    eyebrow: "Campus mapping concept",
    description:
      "An interactive campus mapping idea that estimates where building shadows move throughout the day using location, time, and geometry.",
    tags: ["Mapping", "Data", "Prototyping"],
    color: "green" as const,
    href: "#",
    status: "Concept",
  },
];

const skillGroups = [
  {
    title: "Programming & Data",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Web & Product",
    icon: Sparkles,
    skills: ["React", "Next.js", "Tailwind CSS", "GitHub"],
  },
  {
    title: "Systems & Analytics",
    icon: Database,
    skills: ["Oracle Data Modeler", "Excel", "Linux", "Microsoft 365"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-6xl items-center rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:px-5">
          <a href="#" className="text-sm font-semibold tracking-tight text-slate-950">
            Prem Paudel
          </a>

          <div className="ml-auto hidden items-center gap-1 text-sm text-slate-600 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#education">Education</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
          </div>

          <a href="#contact" className="ml-auto rounded-xl border border-teal-200 bg-teal-50/80 px-4 py-2 text-sm font-medium text-teal-800 transition hover:border-teal-300 hover:bg-teal-100 md:ml-3">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero-simple pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.35fr_0.85fr] md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-4">
              <AnimatedLetterText text="Portfolio" className="text-2xl sm:text-3xl" />
              <span aria-hidden="true" className="h-px w-12 bg-teal-200" />
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="block text-teal-700">Prem Paudel</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-indigo-600 lg:text-xl">
              Information Systems · Management
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              I&apos;m interested in project management, web development, and bringing
              business and technology together. I enjoy working with a team, taking
              on leadership opportunities, and continuing to learn about AI and machine learning.
            </p>
            <div className="mt-6 flex max-w-xl flex-wrap gap-2">
              <span className="hero-chip">IT Project Management</span>
              <span className="hero-chip">Leadership &amp; Teamwork</span>
              <span className="hero-chip">AI &amp; Machine Learning</span>
              <span className="hero-chip">Web Development</span>
              <span className="hero-chip">Business + Technology</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="primary-button">Resume <ArrowUpRight size={16} /></a>
              <a href="#contact" className="secondary-button"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="social-pill" href="https://github.com/PremPaudel05"><Github size={16} /> GitHub</a>
              <a className="social-pill" href={linkedinUrl}><Linkedin size={16} /> LinkedIn</a>
              <span className="social-pill"><MapPin size={16} /> Akron, Ohio</span>
            </div>
          </div>
          <div className="w-full max-w-sm justify-self-center md:justify-self-end">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.3)]">
              <img
                src={graduationPhoto.src}
                alt="Prem Paudel wearing his graduation cap"
                width={1254}
                height={1254}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-6 pb-10">
        <section id="about" className="content-card scroll-mt-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">01 / About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950">
                A little about me.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-700">
                I&apos;m interested in how systems, people, data, and products fit together.
                I like understanding a problem first, organizing the moving parts, and then
                building something practical around it.
              </p>
              <p className="mt-5 leading-7 text-slate-600">
                My work so far spans web projects, databases, Python, business technology,
                and project-oriented problem solving. I&apos;m especially interested in roles
                where technical understanding and business communication overlap.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="mini-card">
                  <span className="mini-card-icon"><BriefcaseBusiness size={18} /></span>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Business + IT</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Connecting technical work to business outcomes.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-icon"><Database size={18} /></span>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Systems + Data</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Databases, SQL, analysis, and structured thinking.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-icon"><Sparkles size={18} /></span>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Product Curiosity</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Turning ideas into approachable digital experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="content-card scroll-mt-28">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="section-label">02 / Education</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950">Where I&apos;m learning.</h2>
            </div>
            <span className="hidden rounded-xl bg-indigo-50 p-3 text-indigo-600 sm:block">
              <GraduationCap size={22} />
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">University of Akron</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600">Information Systems — Management</p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                  Coursework and hands-on projects across databases, application development,
                  Python, analytics, systems thinking, and business technology.
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500">Class of 2028</span>
            </div>
          </div>
        </section>

        <section id="experience" className="content-card scroll-mt-28">
          <div className="mb-8">
            <p className="section-label">03 / Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950">Experience & direction.</h2>
          </div>

          <div className="space-y-4">
            <article className="experience-card">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-950">Progressive</h3>
                    <span className="status-pill status-indigo">Incoming</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-indigo-600">IT Project Management Intern</p>
                </div>
                <span className="text-sm font-medium text-slate-500">Summer 2027</span>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
                Incoming internship focused on technology project work, collaboration,
                communication, and learning how IT initiatives move from planning through execution.
              </p>
            </article>

            <article className="experience-card">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">University of Akron</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600">Information Systems — Management Student</p>
                </div>
                <span className="text-sm font-medium text-slate-500">Present</span>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
                Building practical experience through coursework and projects involving databases,
                Python, web development, analytics, systems thinking, and business technology.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="content-card scroll-mt-28">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">04 / Selected work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950">Things I&apos;ve been building.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Projects where I&apos;ve been learning by planning, designing, coding, and iterating.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <GlowCard
                key={project.title}
                glowColor={project.color}
                customSize
                className="min-h-[380px] w-full"
              >
                <a href={project.href} className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600">
                        {project.eyebrow}
                      </p>
                    </div>
                    <span className="status-pill">{project.status}</span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                      Explore project <ArrowUpRight size={16} />
                    </div>
                  </div>
                </a>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="skills" className="content-card scroll-mt-28">
          <div className="mb-9">
            <p className="section-label">05 / Skills</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950">Tools I work with.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <div key={title} className="skill-card">
                <div className="flex items-center gap-3">
                  <span className="mini-card-icon"><Icon size={18} /></span>
                  <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-card scroll-mt-28">
          <div>
            <p className="section-label">06 / Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Have something interesting to build or talk about?
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              I&apos;m always interested in learning, collaborating, and meeting people working
              across technology and business.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href="mailto:">
              <Mail size={16} /> Email me
            </a>
            <a className="secondary-button" href={linkedinUrl}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="secondary-button" href="https://github.com/PremPaudel05">
              <Github size={16} /> GitHub
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Designed & built by Prem Paudel.</span>
          <span>Next.js · TypeScript · Tailwind · GitHub Pages</span>
        </div>
      </footer>
    </main>
  );
}