import { useEffect, useRef } from "react";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { profile } from "../data/profile";

export function Hero() {
  const hasGithub = Boolean(profile.links.github);
  const hasLinkedIn = Boolean(profile.links.linkedin);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroIntro =
    "I build practical systems that combine machine learning, data analytics, financial technology, software engineering, and modern web technologies.";

  useEffect(() => {
    const hero = heroRef.current;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!hero || motionQuery.matches || !pointerQuery.matches) {
      return;
    }

    let frame = 0;
    let rect = hero.getBoundingClientRect();
    let nextX = 0;
    let nextY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateRect = () => {
      rect = hero.getBoundingClientRect();
    };

    const handlePointerMove = (event: PointerEvent) => {
      nextX = (event.clientX - rect.left) / rect.width - 0.5;
      nextY = (event.clientY - rect.top) / rect.height - 0.5;

      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;

        if (Math.abs(nextX - currentX) < 0.006 && Math.abs(nextY - currentY) < 0.006) {
          return;
        }

        currentX = nextX;
        currentY = nextY;

        hero.style.setProperty("--mx", currentX.toFixed(3));
        hero.style.setProperty("--my", currentY.toFixed(3));
      });
    };

    const resetPointer = () => {
      hero.style.setProperty("--mx", "0");
      hero.style.setProperty("--my", "0");
    };

    hero.addEventListener("pointerenter", updateRect, { passive: true });
    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetPointer);
    window.addEventListener("resize", updateRect, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      hero.removeEventListener("pointerenter", updateRect);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return (
    <Section
      id="home"
      className="hero-shell min-h-screen overflow-hidden pt-32 sm:pt-40"
    >
      <div ref={heroRef} className="absolute inset-0" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="particle-field" />
      </div>
      <div className="relative grid min-h-[calc(100vh-10rem)] min-w-0 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy min-w-0 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl break-words text-lg font-medium leading-8 text-slate-100 sm:text-2xl">
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
        <div className="hero-portrait relative mx-auto w-full min-w-0 max-w-md lg:max-w-lg">
          <div className="absolute -inset-8 rounded-full bg-electric-blue/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-glass backdrop-blur">
            <img
              src="/assets/site/portrait_professional.png"
              alt="Professional portrait of Ong Qi Ren"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
