import { Section } from "../components/layout/Section";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { certifications } from "../data/certifications";

export function Certification() {
  const certification = certifications[0];

  return (
    <Section id="certification">
      <SectionHeading
        label="Certification"
        title="Professional learning"
        description="Verified certification credential included from the provided asset pack."
      />
      <GlassCard className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
              <dd className="mt-1 font-semibold text-white">{certification.expiryDate}</dd>
            </div>
          </dl>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-glass">
          <img
            src="/assets/site/google_analytics_certificate.png"
            alt="Google Analytics Certification for Ong Qiren"
            className="w-full rounded-xl object-contain"
            loading="lazy"
          />
        </figure>
      </GlassCard>
    </Section>
  );
}
