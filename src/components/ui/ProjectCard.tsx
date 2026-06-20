import type { Project } from "../../data/projects";
import { assetUrl } from "../../utils/assetUrl";
import { Badge } from "./Badge";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "standard";
};

export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const visibleTags = isFeatured ? project.tags : project.tags.slice(0, 7);

  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100/10 bg-slate-950/45 shadow-glass backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:bg-slate-900/55 hover:shadow-glow",
        isFeatured ? "min-h-[36rem]" : "min-h-[30rem]",
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden border-b border-white/10 bg-ink-900/70",
          isFeatured ? "aspect-[16/10]" : "aspect-[16/11]",
        ].join(" ")}
      >
        {project.video ? (
          <video
            className="h-full w-full object-cover"
            controls
            muted
            preload="metadata"
            aria-label={project.imageAlt}
          >
            <source src={assetUrl(project.video)} type="video/mp4" />
            Your browser cannot play this gameplay video.
          </video>
        ) : project.image ? (
          <img
            src={assetUrl(project.image)}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-radial-glow p-8 text-center">
            <p className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 text-sm font-semibold text-slate-100 shadow-glass backdrop-blur">
              {project.placeholderText}
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
      </div>

      <div className={["flex flex-1 flex-col", isFeatured ? "p-7" : "p-6"].join(" ")}>
        <div className="flex flex-wrap gap-2">
          {project.featured && project.label ? (
            <Badge className="border-electric-violet/35 bg-electric-violet/15 text-violet-100">
              {project.label}
            </Badge>
          ) : null}
        </div>

        <h3
          className={[
            "mt-4 font-semibold leading-tight text-white",
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl",
          ].join(" ")}
        >
          {project.title}
        </h3>

        <p
          className={[
            "mt-4 flex-1 text-slate-300",
            isFeatured ? "text-base leading-7" : "text-sm leading-6",
          ].join(" ")}
        >
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {!isFeatured && project.tags.length > visibleTags.length ? (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-medium text-slate-300">
              +{project.tags.length - visibleTags.length}
            </span>
          ) : null}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-xs leading-5 text-slate-400">{project.caption}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full border border-white/12 bg-white/[0.065] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-electric-blue/50 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
