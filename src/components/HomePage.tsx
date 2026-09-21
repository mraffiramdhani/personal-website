import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Icons } from "@/components/icons";
import { initials } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

function formatRange(start: string, end?: string) {
  if (!end || end === start) return start;
  return `${start} – ${end}`;
}

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <section id="about" aria-labelledby="about-heading">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 id="about-heading" className="text-xl font-semibold tracking-tight">
            {DATA.sections.about.heading}
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-[0.95rem] leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  ),
  work: (
    <section id="work" aria-labelledby="work-heading">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 id="work-heading" className="text-xl font-semibold tracking-tight">
            {DATA.sections.work.heading}
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),
  education: (
    <section id="education" aria-labelledby="education-heading">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 id="education-heading" className="text-xl font-semibold tracking-tight">
            {DATA.sections.education.heading}
          </h2>
        </BlurFade>
        <div className="flex flex-col gap-8">
          {DATA.education.map((education, index) => {
            const content = (
              <>
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt=""
                      className="size-8 md:size-10 p-1 border rounded-full shadow-sm ring-2 ring-border overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div
                      className="size-8 md:size-10 border rounded-full shadow-sm ring-2 ring-border bg-accent/60 text-accent-foreground flex-none flex items-center justify-center text-[10px] font-semibold tracking-tight"
                      aria-hidden
                    >
                      {initials(education.school)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {education.school}
                      {education.href ? (
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      ) : null}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>{formatRange(education.start, education.end)}</span>
                </div>
              </>
            );

            return (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                {education.href ? (
                  <a
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-x-3 justify-between">
                    {content}
                  </div>
                )}
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  ),
  skills: (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 id="skills-heading" className="text-xl font-semibold tracking-tight">
            {DATA.sections.skills.heading}
          </h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.04}>
              <div className="border bg-card/80 border-border ring-1 ring-border/40 rounded-full h-8 w-fit px-3.5 flex items-center gap-2">
                {skill.icon && <skill.icon className="size-3.5 rounded-sm overflow-hidden object-contain" />}
                <span className="text-foreground text-sm font-medium">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  projects: (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
    </section>
  ),
  hackathons: (
    <section id="hackathons">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <HackathonsSection />
      </BlurFade>
    </section>
  ),
  photos: <PhotosSection />,
  contact: (
    <section id="contact" aria-labelledby="contact-heading">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ContactSection />
      </BlurFade>
    </section>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <section id="hero" aria-label="Introduction">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between md:items-start">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="text-sm font-medium tracking-wide text-primary">
                  {DATA.role} · Jakarta
                </p>
              </BlurFade>
              <h1>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.shortName}`}
                />
              </h1>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-muted-foreground max-w-[40rem] text-pretty md:text-lg leading-relaxed">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-col gap-3 pt-1">
                  <a
                    href={DATA.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <MapPin className="size-3.5 shrink-0" aria-hidden />
                    <span>{DATA.location}</span>
                  </a>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={DATA.contact.social.email.url}
                      className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Icons.email className="size-3.5" aria-hidden />
                      Email me
                    </a>
                    <a
                      href={DATA.contact.social.GitHub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full border border-border bg-card text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Icons.github className="size-3.5" aria-hidden />
                      GitHub
                    </a>
                  </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border border-border rounded-full shadow-lg ring-4 ring-primary/15">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl md:text-3xl font-semibold tracking-tight">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <React.Fragment key={key}>
          {sectionComponents[key]}
        </React.Fragment>
      ))}
    </main>
  );
}
