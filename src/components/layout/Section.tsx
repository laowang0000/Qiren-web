import type { CSSProperties, ElementType, ReactNode } from "react";
import { sectionSceneMap, type JourneySectionId } from "../../data/sceneManifest";
import { assetUrl } from "../../utils/assetUrl";

type SceneName = "quiet" | "observatory" | "river" | "signal";

type SectionProps = {
  id: string;
  children: ReactNode;
  bleed?: ReactNode;
  className?: string;
  as?: ElementType;
  scene?: SceneName;
};

export function Section({
  id,
  children,
  bleed,
  className = "",
  as: Component = "section",
  scene,
}: SectionProps) {
  const journeyId = id in sectionSceneMap ? (id as JourneySectionId) : undefined;
  const sceneImage = journeyId ? sectionSceneMap[journeyId] : undefined;

  return (
    <Component
      id={id}
      data-journey-station={journeyId}
      className={[
        "site-section relative px-6 py-20 sm:py-24",
        scene ? `site-section--${scene}` : "",
        className,
      ].join(" ")}
      style={
        sceneImage
          ? ({ "--journey-scene-image": `url("${assetUrl(sceneImage)}")` } as CSSProperties)
          : undefined
      }
    >
      {bleed}
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
