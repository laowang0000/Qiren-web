import { Section } from "../components/layout/Section";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="featured-projects">
      <SectionHeading
        label="Featured Projects"
        title="Selected work to highlight first"
        description="The two primary projects that best represent Qi Ren's AI, Web3 analytics, and Semantic Web work."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="featured" />
        ))}
      </div>
    </Section>
  );
}
