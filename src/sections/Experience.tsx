import { Section } from "../components/layout/Section";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { experience } from "../data/experience";

export function Experience() {
  const internship = experience[0];

  return (
    <Section id="experience" scene="observatory">
      <SectionHeading
        label="Internship Experience"
        title="Professional QA experience"
        description="Hands-on software quality assurance exposure in a professional IT environment."
      />
      <GlassCard className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric-blue/10 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
              {internship.company}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {internship.role}
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-slate-400">Period</p>
                <p className="mt-1 font-semibold text-slate-100">{internship.period}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-slate-400">Location</p>
                <p className="mt-1 font-semibold text-slate-100">{internship.location}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              {internship.description}
            </p>
            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
                Key Experience
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {internship.keyExperience.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
