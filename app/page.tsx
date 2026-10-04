import {
  ArrowDownRight,
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
import { profileImage } from "@/lib/profile-image";

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

          <a href="#contact" className="ml-3 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero-simple pt-32">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
          <div className="mx-auto mb-7 w-fit rounded-full border-[5px] border-slate-200 bg-white p-1 shadow-sm">
            <img
              src={profileImage}
              alt="Prem Paudel"
              className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
            />
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            Hi, I&apos;m <span className="text-teal-700">Prem Paudel</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-indigo-600 sm:text-2xl">
            Information Systems · Management
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m interested in technology, databases, project management, product thinking,
            and building practical digital experiences that connect technical ideas with real
            business needs.
          </p>

          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
            <span className="hero-chip">IT Project Management</span>
            <span className="hero-chip">Business Systems</span>
            <span className="hero-chip">Databases & SQL</span>
            <span className="hero-chip">Web Development</span>
            <span className="hero-chip">Product Thinking</span>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#" className="primary-button">
              Resume <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="secondary-button">
              <Mail size={16} /> Get in touch
            </a>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a className="social-pill" href="https://github.com/PremPaudel05">
              <Github size={16} /> GitHub
            </a>
            <a className="social-pill" href={linkedinUrl}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="social-pill">
              <MapPin size={16} /> Akron, Ohio
            </span>
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