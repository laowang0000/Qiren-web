import { useEffect } from "react";

export function JourneyMotion() {
  useEffect(() => {
    const stations = Array.from(
      document.querySelectorAll<HTMLElement>("[data-journey-station]"),
    );

    if (!stations.length) {
      return;
    }

    let activeStation: HTMLElement | undefined;

    const setClosestStation = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestStation: HTMLElement | undefined;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const station of stations) {
        const bounds = station.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) {
          continue;
        }

        const stationCenter = bounds.top + bounds.height / 2;
        const distance = Math.abs(stationCenter - viewportCenter);
        if (distance < closestDistance) {
          closestStation = station;
          closestDistance = distance;
        }
      }

      if (!closestStation || closestStation === activeStation) {
        return;
      }

      activeStation?.classList.remove("journey-active");
      closestStation.classList.add("journey-active");
      activeStation = closestStation;
    };

    const observer = new IntersectionObserver(setClosestStation, {
      rootMargin: "-18% 0px -18% 0px",
      threshold: [0, 0.15, 0.35, 0.6, 0.85, 1],
    });

    stations.forEach((station) => observer.observe(station));
    setClosestStation();

    return () => observer.disconnect();
  }, []);

  return null;
}
