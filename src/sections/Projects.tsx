import { Section } from "../components/layout/Section";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section id="projects" scene="river">
      <SectionHeading
        label="Projects"
        title="Project index"
        description="A consolidated project index covering AI, Web3 analytics, NLP, computer vision, algorithms, networking, and interactive software work."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

