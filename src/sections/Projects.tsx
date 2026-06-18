import { Section } from "../components/layout/Section";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Project index"
        description="Five selected projects only, with repository links and verified project visuals from the provided asset pack."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
