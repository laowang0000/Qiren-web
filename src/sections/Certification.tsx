import { Section } from "../components/layout/Section";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { certifications } from "../data/certifications";
import { assetUrl } from "../utils/assetUrl";

export function Certification() {
  return (
    <Section id="certification" scene="signal">
      <SectionHeading
        label="Certification"
        title="Professional learning"
        description="Verified certification credential included from the provided asset pack."
      />
      <div className="grid gap-8">
        {certifications.map((certification) => (
          <GlassCard
            key={certification.title}
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-cyan">
                Certification
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {certification.title}
              </h3>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <dt className="text-sm text-slate-400">Name</dt>
                  <dd className="mt-1 font-semibold text-white">{certification.name}</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <dt className="text-sm text-slate-400">Issue Date</dt>
                  <dd className="mt-1 font-semibold text-white">{certification.issueDate}</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <dt className="text-sm text-slate-400">Expiry Date</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {certification.expiryDate ?? "Not specified"}
                  </dd>
                </div>
              </dl>
              {certification.certificateUrl ? (
                <a
                  className="mt-6 inline-flex text-sm font-semibold text-electric-cyan transition hover:text-white"
                  href={assetUrl(certification.certificateUrl)}
                  target="_blank"
                  rel="noreferrer"
                >
                  View original certificate
                </a>
              ) : null}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-glass">
              <img
                src={assetUrl(certification.image)}
                alt={certification.imageAlt}
                className="w-full rounded-xl object-contain"
                loading="lazy"
              />
            </figure>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
