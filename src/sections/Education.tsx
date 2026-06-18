import { Section } from "../components/layout/Section";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        label="Education"
        title="Academic background"
        description="Formal AI-focused computer science training at Multimedia University."
      />
      <div className="relative">
        <div className="absolute left-4 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-electric-blue via-electric-violet to-transparent sm:block" />
        <GlassCard className="relative ml-0 sm:ml-12">
          <span className="absolute -left-[3.25rem] top-7 hidden h-4 w-4 rounded-full border border-electric-cyan bg-ink-950 shadow-glow sm:block" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
                {profile.education.institution}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {profile.education.degree}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm text-slate-400">Current CGPA</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {profile.education.cgpa}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm text-slate-400">Expected Graduation</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {profile.education.expectedGraduation}
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
