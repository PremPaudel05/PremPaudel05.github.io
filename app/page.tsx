import {
  ArrowUpRight,
  BriefcaseBusiness,
  MessagesSquare,
  Users,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  BrainCircuit,
  ChartNoAxesCombined,
  Clock3,
  Download,
  Globe2,
  IdCard,
  Sun,
  Store,
  Wrench,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import graduationPhoto from "@/public/images/prem-graduation.jpg";

const email = "Prempaudel5b@gmail.com";
const resumeUrl = "/documents/Prem-Paudel-Resume.pdf";

const linkedinUrl = "https://www.linkedin.com/in/prem-paudel-81a366364/";

const projects = [
  {
    title: "Voya World",
    eyebrow: "Travel & culture platform",
    description:
      "A web experience for discovering countries, culture, and useful destination context while I learn modern full-stack product development.",
    tags: ["Next.js", "TypeScript", "Product Design"],
    icon: Globe2,
    color: "neutral" as const,
    href: "https://voyatravel.vercel.app/",
    status: "Live",
  },
  {
    title: "DigiCard",
    eyebrow: "Digital networking",
    description:
      "A mobile-first digital networking card concept designed to make sharing professional information faster and more polished.",
    tags: ["React", "UI/UX", "Product Thinking"],
    icon: IdCard,
    color: "neutral" as const,
    href: "https://github.com/bjkc01/digicard",
    status: "Building",
  },
  {
    title: "ZipShade",
    eyebrow: "Campus mapping concept",
    description:
      "An interactive campus mapping idea that estimates where building shadows move throughout the day using location, time, and geometry.",
    tags: ["Mapping", "Data", "Prototyping"],
    icon: Sun,
    color: "neutral" as const,
    href: "#contact",
    status: "Concept",
  },
];

const skillGroups = [
  {
    title: "Programming & Web",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Systems",
    icon: Database,
    skills: ["SQL", "ER Modeling", "Oracle Data Modeler", "Unix/Linux", "GitHub", "Visual Studio Code"],
  },
  {
    title: "Analytics & Decision Support",
    icon: ChartNoAxesCombined,
    skills: ["Excel", "Spreadsheet Modeling", "Decision Analysis", "Microsoft 365"],
  },
  {
    title: "Business Foundations",
    icon: BriefcaseBusiness,
    skills: ["Management Principles", "Accounting Fundamentals", "Micro & Macroeconomics", "International Business"],
  },
  {
    title: "Communication & Collaboration",
    icon: MessagesSquare,
    skills: ["Business Communication", "Public Speaking", "Professional Writing", "Teamwork"],
  },
  {
    title: "AI & Agile Foundations",
    icon: BrainCircuit,
    skills: ["Applied AI Fundamentals", "Information Systems Concepts", "Generative AI Basics", "Agile Development Fundamentals"],
  },
];

const learningCredentials = [
  { title: "Agile Development in the New World of Work", provider: "LinkedIn Learning", date: "September 2026" },
  { title: "What Is Generative AI", provider: "Microsoft", date: "September 2026" },
  { title: "Business Communication", provider: "Stukent", date: "December 2025" },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav aria-label="Main navigation" className="site-nav">
        <div className="nav-inner">
          <div className="flex items-center gap-1 text-sm text-stone-600">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#education">Education</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
          </div>

          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </div>
      </nav>

      <section id="main-content" className="hero-simple pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.35fr_0.85fr] md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-4">
              <p className="text-sm font-medium tracking-[0.16em] text-stone-500">My Portfolio</p>
              <span aria-hidden="true" className="h-px w-12 bg-stone-100" />
            </div>
            <h1 className="hero-heading">
              <span className="hero-greeting">Hello, I&apos;m</span>
              <span className="hero-name">Prem Paudel<span className="text-accent">.</span></span>
            </h1>
            <p className="mt-5 text-lg font-medium tracking-[-0.015em] text-stone-600 lg:text-xl">
              Information Systems · Management
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
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
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="primary-button"><Download size={16} /> View résumé</a>
              <a href={`mailto:${email}`} className="secondary-button"><Mail size={16} /> Get in touch</a>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-stone-500"><Clock3 size={13} /> I usually reply within 24 hours.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="social-pill" href="https://github.com/PremPaudel05"><Github size={16} /> GitHub</a>
              <a className="social-pill" href={linkedinUrl}><Linkedin size={16} /> LinkedIn</a>
              <span className="social-pill"><MapPin size={16} /> Akron, Ohio</span>
            </div>
          </div>
          <div className="w-full max-w-sm justify-self-center md:justify-self-end">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-2 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.3)]">
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

      <div className="mx-auto max-w-6xl space-y-6 px-6 pb-10 sm:space-y-10">
        <section id="about" className="content-card scroll-mt-28">
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-12">
            <div>
              <p className="section-label">01 / About</p>
              <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950">
                Understanding systems.<br />Working with people.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-stone-700">
                I&apos;m an Information Systems Management student who wants to help teams
                turn business needs into useful technology. Through coursework and personal
                projects, I&apos;m learning to design relational databases, write SQL and Python,
                build web applications, and use spreadsheets to support decisions.
              </p>
              <p className="mt-5 leading-7 text-stone-600">
                What interests me most is the work around the technology: understanding what
                people need, breaking a problem into manageable tasks, and making technical
                information clear to the people using it. I value clear communication,
                shared responsibility, and following through on commitments.
              </p>
              <div className="mt-6 border-l-2 border-stone-200 pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Where I want to contribute</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  I&apos;m looking for opportunities in IT project coordination, business analysis,
                  and information systems where I can work with a team, help manage projects,
                  and grow into leadership responsibilities.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <div className="mini-card">
              <span className="mini-card-icon"><Database size={18} /></span>
              <h3 className="mt-4 text-sm font-semibold text-stone-950">Understand the system</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">Use data models, SQL, and application logic to understand how information supports a business process.</p>
            </div>
            <div className="mini-card">
              <span className="mini-card-icon"><BriefcaseBusiness size={18} /></span>
              <h3 className="mt-4 text-sm font-semibold text-stone-950">Keep the work organized</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">Bring an interest in planning, priorities, and Agile ways of working to a team&apos;s project goals.</p>
            </div>
            <div className="mini-card">
              <span className="mini-card-icon"><Users size={18} /></span>
              <h3 className="mt-4 text-sm font-semibold text-stone-950">Make communication useful</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">Listen carefully, ask questions, and explain technical ideas in language teammates can act on.</p>
            </div>
          </div>
        </section>

        <section id="education" className="content-card scroll-mt-28">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="section-label">02 / Education</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">Education &amp; learning.</h2>
            </div>
            <span className="hidden rounded-xl bg-stone-100 p-3 text-accent sm:block"><GraduationCap size={22} /></span>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-stone-950">University of Akron</h3>
                <p className="mt-2 text-sm font-semibold text-accent">Bachelor of Business Administration (BBA)</p>
                <p className="mt-1 text-sm font-medium text-stone-700">Information Systems Management</p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-600">
                  Building a foundation in information systems, applied AI, spreadsheet modeling,
                  management, accounting, and business communication.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3 sm:flex-col sm:items-end">
                <span className="text-sm font-medium text-stone-500">Class of 2028</span>
                <span className="rounded-lg border border-stone-200 bg-stone-100 px-3 py-2 text-sm font-semibold text-accent">GPA: 3.3 / 4.0</span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-stone-950">Certificates &amp; course completions</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {learningCredentials.map((credential) => (
                <article key={credential.title} className="rounded-xl border border-stone-200 bg-white p-5">
                  <p className="text-xs font-medium text-accent">{credential.provider}</p>
                  <h4 className="mt-2 text-sm font-semibold leading-6 text-stone-800">{credential.title}</h4>
                  <p className="mt-3 text-xs text-stone-500">{credential.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-card scroll-mt-28">
          <div className="section-heading-row">
            <div>
              <p className="section-label">03 / Experience</p>
              <h2 className="section-title">Learning by showing up.</h2>
            </div>
            <p className="section-note">Hands-on work. Shared responsibility.<br />Experience that carries into every project.</p>
          </div>
          <div className="experience-list">
            <article className="experience-entry">
              <span className="experience-icon"><Store size={24} strokeWidth={1.6} /></span>
              <div className="min-w-0">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-stone-900">Sam&apos;s Club</h3>
                    <p className="mt-1 text-sm font-medium text-accent">Produce Associate</p>
                  </div>
                  <p className="text-xs font-medium text-stone-500">May 2024 — July 2025</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Worked in a high-volume produce department, balancing customer service,
                  inventory, product freshness, and the daily needs of the team.
                </p>
                <ul className="experience-points">
                  <li>Took on team-lead responsibilities and leadership opportunities to help coordinate daily work and support coworkers.</li>
                  <li>Managed restocking and inventory tasks while maintaining an organized, safe environment and fresh product displays.</li>
                  <li>Helped customers with product questions and communicated clearly with teammates to keep the department running smoothly.</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2"><span className="project-tag">Team leadership</span><span className="project-tag">Inventory management</span><span className="project-tag">Customer service</span></div>
              </div>
            </article>
            <article className="experience-entry">
              <span className="experience-icon"><Wrench size={24} strokeWidth={1.6} /></span>
              <div className="min-w-0">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-stone-900">Weaver Fab &amp; Finish</h3>
                    <p className="mt-1 text-sm font-medium text-accent">Powder Coating</p>
                  </div>
                  <p className="text-xs font-medium text-stone-500">June 2023 — August 2023</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Operated powder coating equipment, inspected finished parts for quality,
                  and assembled components. Worked with teammates to meet production goals
                  and deadlines while following safety procedures.
                </p>
                <div className="mt-5 flex flex-wrap gap-2"><span className="project-tag">Quality control</span><span className="project-tag">Teamwork</span><span className="project-tag">Attention to detail</span></div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="content-card scroll-mt-28">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">04 / Selected work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">Ideas put into practice.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-stone-500">
              Projects where I&apos;ve been learning by planning, designing, coding, and iterating.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <GlowCard
                key={project.title}
                glowColor={project.color}
                customSize
                className="min-h-[410px] w-full"
              >
                <a href={project.href} className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="project-symbol"><project.icon size={28} strokeWidth={1.5} /></span>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        {project.eyebrow}
                      </p>
                    </div>
                    <span className="status-pill">{project.status}</span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-stone-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
                      {project.status === "Concept" ? "Discuss the idea" : "Explore project"} <ArrowUpRight size={16} />
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
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">Skills</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-500">
              A practical mix of technical tools, business knowledge, and communication skills,
              developed through projects, work, and continued learning.
            </p>
          </div>

          <div className="tool-strip" aria-label="Selected tools and development environment">
            {[
              ["Python", "python"], ["TypeScript", "typescript"], ["React", "react"],
              ["Next.js", "nextdotjs"], ["GitHub", "github"], ["Visual Studio Code", "vscode"],
            ].map(([name, icon]) => (
              <div className="tool-item" key={name}>
                <img src={`/icons/${icon}.svg`} width={26} height={26} alt="" />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <div key={title} className="skill-card">
                <div className="flex items-center gap-3">
                  <span className="mini-card-icon"><Icon size={21} strokeWidth={1.6} /></span>
                  <h3 className="text-sm font-semibold text-stone-950">{title}</h3>
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
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="section-label">06 / Contact</p>
              <h2 className="section-title text-4xl sm:text-5xl">Let&apos;s start a conversation.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">
                Have an opportunity, a project idea, or a question? I&apos;d love to hear
                from you and learn more about what you&apos;re working on.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm text-stone-500"><Clock3 size={16} /> I usually reply within 24 hours.</p>
            </div>
            <div className="contact-details">
              <Mail size={24} strokeWidth={1.5} className="text-accent" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-stone-500">Email me</p>
              <a className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium tracking-tight text-stone-900 hover:underline sm:text-lg lg:text-xl" href={`mailto:${email}`}>
                {email}<ArrowUpRight size={18} className="shrink-0" />
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="social-pill" href={linkedinUrl}><Linkedin size={16} /> LinkedIn</a>
                <a className="social-pill" href="https://github.com/PremPaudel05"><Github size={16} /> GitHub</a>
                <a className="social-pill" href={resumeUrl} download="Prem-Paudel-Resume.pdf"><Download size={16} /> Résumé PDF</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-stone-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Designed & built by Prem Paudel.</span>
          <span>Akron, Ohio · Business &amp; technology</span>
        </div>
      </footer>
    </main>
  );
}