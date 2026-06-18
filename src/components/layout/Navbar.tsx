import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.24, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClasses = (href: string) => {
    const isActive = activeId === href.slice(1);

    return [
      "rounded-full px-3 py-2 text-sm font-medium transition duration-200 hover:bg-white/[0.08] hover:text-white",
      isActive ? "bg-white/[0.09] text-white" : "text-slate-300",
    ].join(" ");
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={[
          "site-nav mx-auto w-full max-w-6xl border border-white/12 bg-ink-950/70 px-4 shadow-glass backdrop-blur-xl transition-[border-radius]",
          isOpen ? "rounded-[1.75rem]" : "rounded-full",
        ].join(" ")}
      >
        <div className="flex h-14 items-center justify-between gap-4">
          <a
            href="#home"
            className="shrink-0 rounded-full px-2 text-sm font-semibold text-white transition hover:text-electric-cyan"
            onClick={() => setIsOpen(false)}
          >
            Ong Qi Ren
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button href="#contact" variant="primary" className="hidden min-h-10 px-4 md:inline-flex">
            Contact
          </Button>
          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue md:hidden"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition",
                  isOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition",
                  isOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition",
                  isOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
        {isOpen ? (
          <div className="grid gap-1 border-t border-white/10 py-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
