import { Section } from "../components/layout/Section";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/laowang0000",
    href: profile.links.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ong-qiren-14913133b",
    href: profile.links.linkedin,
  },
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
  },
];

export function Contact() {
  return (
    <Section id="contact" scene="signal">
      <SectionHeading
        label="Contact"
        title="Connect for AI, software, and internship opportunities"
        description="Available contact channels and general location for professional opportunities."
      />
      <GlassCard className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Interested in AI engineering, software development, QA, and practical data-driven systems.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 text-lg font-semibold text-white">{profile.location}</p>
            </div>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-electric-blue/45 hover:bg-white/[0.075] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
                  {link.label}
                </span>
                <span className="mt-2 block break-words text-lg font-semibold text-white">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
