import { Section } from "../components/layout/Section";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section id="skills" scene="observatory">
      <SectionHeading
        label="Skills"
        title="Technical skill set"
        description="Grouped capabilities across programming, AI, analytics, web development, Semantic Web, testing, and tools."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <GlassCard key={group.category} className="flex min-h-64 flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold leading-7 text-white">
                {group.category}
              </h3>
              <span className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-semibold text-slate-300">
                {group.skills.length}
              </span>
            </div>
            <div className="mt-5 flex flex-1 content-start flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
