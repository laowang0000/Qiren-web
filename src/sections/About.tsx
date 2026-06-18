import { Section } from "../components/layout/Section";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Data Mining",
  "Financial Technology",
  "Stock Market Analytics",
  "Algorithm Design",
  "Information Systems",
  "AI-powered applications",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        label="About"
        title="AI undergraduate building practical, data-driven software."
        description="A professional overview of Qi Ren's academic focus, technical interests, and direction as an emerging AI/software practitioner."
      />
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <GlassCard className="space-y-5">
          {profile.aboutSummary.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-slate-300 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </GlassCard>
        <div className="grid gap-6">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
              Career Goal
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {profile.careerGoal}
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
              Interests
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
