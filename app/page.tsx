import {
  ArrowUpRight,
  BriefcaseBusiness,
  MessagesSquare,
  Code2,
  Database,
  Github,
  Linkedin,
  Handshake,
  Mail,
  MapPin,
  BrainCircuit,
  ChartNoAxesCombined,
  Clock3,
  Download,
  Globe2,
  IdCard,
  Sun,
} from "lucide-react";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionNavigation } from "@/components/ui/section-navigation";
import voyaPreview from "@/public/images/voya-world-preview.png";
import { GlowCard } from "@/components/ui/spotlight-card";
import samsLogo from "@/public/images/sams-club.webp";
import weaverLogo from "@/public/images/weaver-fab-finish.webp";
import universityLogo from "@/public/images/university-of-akron.jpg";
import graduationPhoto from "@/public/images/prem-graduation.jpg";

const email = "Prempaudel5b@gmail.com";
const resumeUrl = "/documents/Prem-Paudel-Resume.pdf";

const handshakeUrl = "https://app.joinhandshake.com/profiles/6a5pq9";
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
    image: voyaPreview,
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
    href: "https://getmycard.vercel.app/",
    image: null,
    status: "Building",
  },
  {
    title: "ZipShade",
    eyebrow: "Campus shadow mapping",
    description:
      "An interactive campus mapping idea that estimates where building shadows move throughout the day using location, time, and geometry.",
    tags: ["Mapping", "Data", "Prototyping"],
    icon: Sun,
    color: "neutral" as const,
    href: null,
    image: null,
    status: "Planned",
  },
];

const skillGroups = [
  {
    title: "Programming & Web",
    tone: "blue",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Systems",
    tone: "sage",
    icon: Database,
    skills: ["SQL", "ER Modeling", "Oracle Data Modeler", "Unix/Linux", "GitHub", "Visual Studio Code"],
  },
  {
    title: "Analytics & Decision Support",
    tone: "amber",
    icon: ChartNoAxesCombined,
    skills: ["Excel", "Spreadsheet Modeling", "Decision Analysis", "Microsoft 365"],
  },
  {
    title: "Business Foundations",
    tone: "clay",
    icon: BriefcaseBusiness,
    skills: ["Management Principles", "Accounting Fundamentals", "Micro & Macroeconomics", "International Business"],
  },
  {
    title: "Communication & Collaboration",
    tone: "rose",
    icon: MessagesSquare,
    skills: ["Business Communication", "Public Speaking", "Professional Writing", "Teamwork"],
  },
  {
    title: "AI & Agile Foundations",
    tone: "slate",
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
      <SectionNavigation />
      <ScrollReveal />

      <section id="main-content" className="hero-simple theme-dark pb-16 pt-32 sm:pb-24 sm:pt-40">
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
              business and technology together. I enjoy working in a team-oriented environment,
              taking on leadership opportunities, and continuing to learn how rapidly evolving
              technology, AI, and machine learning shape businesses and the way we work.
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
              <a href="#contact" className="secondary-button"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="social-pill" href="https://github.com/PremPaudel05"><Github size={16} /> GitHub</a>
              <a className="social-pill" href={linkedinUrl}><Linkedin size={16} /> LinkedIn</a>
                <a className="social-pill" href={handshakeUrl}><Handshake size={16} /> Handshake</a>
              <span className="social-pill"><MapPin size={16} /> Akron, Ohio</span>
            </div>
          </div>
          <div className="w-full max-w-sm justify-self-center md:justify-self-end">
            <div className="portrait-frame rounded-[2rem] border border-stone-200 bg-white p-2 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.3)]">
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

      <div className="portfolio-sections">
        <section id="about" className="content-card scroll-mt-28">
          <p className="section-label">About</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950">
            Understanding systems. Working with people.
          </h2>
          <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div className="text-base leading-8 text-stone-600">
              <p>
                I&apos;m studying Information Systems Management at the University of Akron
                because I like sitting right between how technology is built and how people
                actually use it. While I enjoy getting my hands dirty with web development
                and data analysis, my favorite part of any project is the translation work:
                figuring out what a team really needs, untangling messy workflows, and
                organizing the steps to get things done.
              </p>
              <p className="mt-4">
                I&apos;m at my best when there&apos;s a clear process, shared accountability,
                and a team that communicates openly.
              </p>
            </div>
            <div className="self-start rounded-xl border border-stone-200 bg-stone-50/80 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Where I want to contribute</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                I&apos;m looking for roles in business analysis, IT project coordination,
                or information systems. I want to join a structured team where I can help
                keep complex projects on track, build dependable tools, and grow into a leadership role.
              </p>
            </div>
          </div>
          <div className="about-quote">
            <p className="max-w-3xl text-sm leading-7 text-stone-600">
              The tools and processes we create shape how a team works. That idea is what
              connects my interest in technology with the people who use it, and why this quote resonates with me:
            </p>
            <figure className="mt-4">
              <blockquote className="font-serif text-xl italic leading-relaxed text-stone-800 sm:text-2xl">
                &ldquo;We shape our buildings; thereafter they shape us.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold tracking-wide text-accent">Winston Churchill</figcaption>
            </figure>
          </div>
        </section>

        <section id="education" className="content-card scroll-mt-28">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="section-label">Education</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">Education &amp; learning.</h2>
            </div>
            <img src={universityLogo.src} width={universityLogo.width} height={universityLogo.height} alt="University of Akron seal" className="h-16 w-16 shrink-0 object-contain mix-blend-multiply sm:h-20 sm:w-20" loading="lazy" />
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-stone-950">University of Akron</h3>
                <p className="mt-2 text-sm font-semibold text-accent">Bachelor of Business Administration (BBA)</p>
                <p className="mt-1 text-sm font-medium text-stone-700">Information Systems Management</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3 sm:flex-col sm:items-end">
                <span className="text-sm font-medium text-stone-500">Class of 2028</span>
                <span className="rounded-lg border border-stone-200 bg-stone-100 px-3 py-2 text-sm font-semibold text-accent">GPA: 3.37</span>
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
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950">Experience</h2>
            </div>
          </div>
          <div className="experience-list">
            <article className="experience-entry">
              <div className="company-logo"><img src={samsLogo.src} width={samsLogo.width} height={samsLogo.height} alt="Sam’s Club logo" loading="lazy" /></div>
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
              <div className="company-logo"><img src={weaverLogo.src} width={weaverLogo.width} height={weaverLogo.height} alt="Weaver Precision Fabrication & Finishing logo" loading="lazy" /></div>
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

        <section id="projects" className="theme-dark content-card scroll-mt-28">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950">Projects</h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <GlowCard
                key={project.title}
                glowColor={project.color}
                customSize
                className="h-full min-h-[450px] w-full"
              >
                <article className="flex h-full flex-col" aria-label={project.title}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="project-symbol"><project.icon size={28} strokeWidth={1.5} /></span>
                    <span className="status-pill">{project.status}</span>
                  </div>
                  {project.image && (
                    <img
                      src={project.image.src}
                      width={project.image.width}
                      height={project.image.height}
                      alt="Voya World homepage featuring country guides and an interactive world map"
                      loading="lazy"
                      className="mt-5 aspect-[1347/777] w-full rounded-lg border border-stone-200 object-contain"
                    />
                  )}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-stone-950">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{project.description}</p>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
                    </div>
                    {project.href && (
                      <a href={project.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-800 hover:text-accent">
                        Explore project <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="skills" className="content-card scroll-mt-28">
          <div className="mb-9">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950">Skills</h2>
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
            {skillGroups.map(({ title, tone, icon: Icon, skills }) => (
              <div key={title} className="skill-card" data-tone={tone}>
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

        <section id="contact" className="theme-dark contact-card scroll-mt-28">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="min-w-0">
              <p className="section-label">Contact</p>
              <h2 className="section-title text-4xl sm:text-5xl">Let&apos;s start a conversation.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">
                Have an opportunity, a project idea, or a question? I&apos;d love to hear
                from you and learn more about what you&apos;re working on.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm text-stone-600"><Clock3 size={16} className="shrink-0" /> I usually tend to reply within 24hrs.</p>
            </div>
            <div className="contact-details min-w-0">
              <Mail size={24} strokeWidth={1.5} className="text-accent" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-stone-500">Email me</p>
              <a className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium tracking-tight text-stone-900 hover:underline sm:text-lg" href={`mailto:${email}`}>
                {email}<ArrowUpRight size={18} className="shrink-0" />
              </a>
              <div className="mt-4"><CopyEmailButton email={email} /></div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="social-pill" href={linkedinUrl}><Linkedin size={16} /> LinkedIn</a>
                <a className="social-pill" href={handshakeUrl}><Handshake size={16} /> Handshake</a>
                <a className="social-pill" href="https://github.com/PremPaudel05"><Github size={16} /> GitHub</a>
                <a className="social-pill" href={resumeUrl} download="Prem-Paudel-Resume.pdf"><Download size={16} /> Résumé PDF</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-stone-500">
          <p>© 2026 Designed &amp; built by Prem Paudel.</p>
        </div>
      </footer>
    </main>
  );
}