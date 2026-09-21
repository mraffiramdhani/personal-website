import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border border-border rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-card">
      <div className="absolute -top-4 border border-border bg-primary z-10 rounded-full px-4 py-1 left-1/2 -translate-x-1/2 shadow-sm">
        <span className="text-primary-foreground text-sm font-medium">
          {DATA.sections.contact.label}
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="var(--primary)"
          maxOpacity={0.18}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance text-[0.95rem] leading-relaxed">
          {DATA.sections.contact.text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <a
            href={DATA.contact.social.email.url}
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Icons.email className="size-4" aria-hidden />
            {DATA.contact.email}
          </a>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full border border-border bg-background/80 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Icons.github className="size-4" aria-hidden />
            GitHub
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-1">
          <a
            href={DATA.contact.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="size-3.5" aria-hidden />
            {DATA.contact.phone}
          </a>
          <span className="hidden sm:inline text-border" aria-hidden>
            ·
          </span>
          <a
            href={DATA.locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <MapPin className="size-3.5" aria-hidden />
            Jakarta Selatan
          </a>
        </div>
      </div>
    </div>
  );
}
