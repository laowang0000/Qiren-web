import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { profile } from "../data/profile";
import { sectionSceneMap } from "../data/sceneManifest";
import { assetUrl } from "../utils/assetUrl";

export function Hero() {
  const hasGithub = Boolean(profile.links.github);
  const hasLinkedIn = Boolean(profile.links.linkedin);
  const heroIntro =
    "I build practical systems that combine machine learning, data analytics, financial technology, software engineering, and modern web technologies.";

  return (
    <Section
      id="home"
      className="hero-shell min-h-screen overflow-hidden pt-32 sm:pt-40"
      bleed={
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img src={assetUrl(sectionSceneMap.home)} alt="" className="hero-poster" />
          <span className="hero-planet hero-planet-one" />
          <span className="hero-planet hero-planet-two" />
          <span className="hero-planet hero-planet-three" />
        </div>
      }
    >
      <div className="relative flex min-h-[calc(100vh-10rem)] min-w-0 items-center">
        <div className="hero-copy min-w-0 max-w-3xl">
          <p className="hero-traveller-signature">OQR // FIELD NOTES</p>
          <h1 className="text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl break-words text-lg font-medium leading-8 text-amber-50 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {heroIntro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#featured-projects" variant="primary">
              View Projects
            </Button>
            <Button
              href={profile.links.github}
              disabled={!hasGithub}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              href={profile.links.linkedin}
              disabled={!hasLinkedIn}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button href="#contact">Contact Me</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
