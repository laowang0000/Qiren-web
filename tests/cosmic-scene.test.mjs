import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("cosmic scene provides a canvas particle field and reduced-motion guard", async () => {
  const source = await readFile(
    new URL("../src/components/layout/CosmicScene.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /<canvas/);
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(source, /requestAnimationFrame/);
  assert.match(source, /--cosmic-x/);
});

test("cosmic art is mounted once and the hero contains its poster layers", async () => {
  const [appSource, heroSource, stylesSource, cardSource] = await Promise.all([
    readFile(new URL("../src/App.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/styles/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../src/components/ui/GlassCard.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(appSource, /<CosmicScene\s*\/>/);
  assert.match(heroSource, /sectionSceneMap\.home/);
  assert.match(heroSource, /hero-planet/);
  assert.match(stylesSource, /\.cosmic-scene/);
  assert.match(stylesSource, /\.hero-poster/);
  assert.match(cardSource, /border-amber/);
});

test("portfolio sections declare named cosmic scene layers", async () => {
  const [sectionSource, aboutSource, skillsSource, projectsSource, contactSource] = await Promise.all([
    readFile(new URL("../src/components/layout/Section.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/About.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Skills.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Projects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Contact.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(sectionSource, /type SceneName = "quiet" \| "observatory" \| "river" \| "signal"/);
  assert.match(sectionSource, /scene\?: SceneName/);
  assert.match(sectionSource, /site-section--\$\{scene\}/);
  assert.match(aboutSource, /scene="quiet"/);
  assert.match(skillsSource, /scene="observatory"/);
  assert.match(projectsSource, /scene="river"/);
  assert.match(contactSource, /scene="signal"/);
});

test("hero poster is mounted as a full-bleed section layer", async () => {
  const [sectionSource, heroSource] = await Promise.all([
    readFile(new URL("../src/components/layout/Section.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Hero.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(sectionSource, /bleed\?: ReactNode/);
  assert.match(sectionSource, /\{bleed\}/);
  assert.match(heroSource, /bleed=\{/);
});

test("hero uses the traveller scene and a small field-notes signature instead of a portrait", async () => {
  const heroSource = await readFile(new URL("../src/sections/Hero.tsx", import.meta.url), "utf8");

  assert.match(heroSource, /hero-traveller-signature/);
  assert.match(heroSource, /OQR \/\/ FIELD NOTES/);
  assert.doesNotMatch(heroSource, /portrait_professional\.png/);
});

test("journey sections read their backgrounds from the shared scene variable", async () => {
  const stylesSource = await readFile(new URL("../src/styles/globals.css", import.meta.url), "utf8");

  assert.match(stylesSource, /background-image: var\(--journey-scene-image\)/);
  assert.match(stylesSource, /journey-active[\s\S]*::before/);
  assert.match(stylesSource, /filter: blur\(0\)/);
});

test("cursor resting point creates a local glow without meteor trails", async () => {
  const sceneSource = await readFile(
    new URL("../src/components/layout/CosmicScene.tsx", import.meta.url),
    "utf8",
  );

  assert.match(sceneSource, /createRadialGradient/);
  assert.match(sceneSource, /rgba\(255, 197, 82, 0\.32\)/);
  assert.doesNotMatch(sceneSource, /directionX/);
  assert.doesNotMatch(sceneSource, /context\.lineTo/);
});

test("site layering preserves the fixed navigation and lets the hero art reach the viewport top", async () => {
  const stylesSource = await readFile(new URL("../src/styles/globals.css", import.meta.url), "utf8");

  assert.doesNotMatch(stylesSource, /\.site-shell > :not\(\.cosmic-scene\)/);
  assert.match(stylesSource, /\.site-shell > main,/);
  assert.match(stylesSource, /\.site-shell > footer/);
});

test("the supplied journey scenes are assigned across the hero and section layers", async () => {
  const [heroSource, stylesSource] = await Promise.all([
    readFile(new URL("../src/sections/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/styles/globals.css", import.meta.url), "utf8"),
  ]);

  for (const asset of [
    "02-coast-lighthouse.png",
    "03-observatory.png",
    "04-forest-lantern.png",
    "06-river-ruins.png",
    "08-generated-valley-poster.png",
    "09-generated-quiet-field.png",
    "10-generated-river-passage.png",
    "11-generated-signal-horizon.png",
  ]) {
    await access(new URL(`../public/assets/site/journey-scenes/${asset}`, import.meta.url));
  }

  assert.match(heroSource, /sectionSceneMap\.home/);
  assert.match(stylesSource, /--journey-scene-image/);
});

test("journey scene manifest maps each station to a deployed image", async () => {
  const manifestSource = await readFile(
    new URL("../src/data/sceneManifest.ts", import.meta.url),
    "utf8",
  );

  for (const scene of ["home", "about", "education", "skills", "featured-projects", "projects", "experience", "certification", "contact"]) {
    assert.match(manifestSource, new RegExp(`(?:"${scene}"|${scene}):`));
  }

  for (const asset of [
    "02-coast-lighthouse.png",
    "03-observatory.png",
    "04-forest-lantern.png",
    "06-river-ruins.png",
    "08-generated-valley-poster.png",
    "09-generated-quiet-field.png",
    "10-generated-river-passage.png",
    "11-generated-signal-horizon.png",
  ]) {
    await access(new URL(`../public/assets/site/journey-scenes/${asset}`, import.meta.url));
  }
});

test("the home station uses the valley poster and journey scenes use brighter tokens", async () => {
  const [manifestSource, stylesSource] = await Promise.all([
    readFile(new URL("../src/data/sceneManifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/styles/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(
    manifestSource,
    /home: "\/assets\/site\/journey-scenes\/08-generated-valley-poster\.png"/,
  );
  assert.match(stylesSource, /--journey-active-scene-brightness:/);
  assert.match(stylesSource, /--journey-distant-scene-brightness:/);
});

test("the third UI planet lives in the star field beneath the large background planet", async () => {
  const stylesSource = await readFile(
    new URL("../src/styles/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    stylesSource,
    /\.hero-planet-three\s*\{[\s\S]*top: 30%;[\s\S]*left: 31%;[\s\S]*bottom: auto;[\s\S]*right: auto;/,
  );
});

test("journey motion activates the best-centred station and binds its image", async () => {
  const [motionSource, appSource, sectionSource] = await Promise.all([
    readFile(new URL("../src/components/layout/JourneyMotion.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/App.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/layout/Section.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(motionSource, /IntersectionObserver/);
  assert.match(motionSource, /journey-active/);
  assert.match(appSource, /<JourneyMotion\s*\/>/);
  assert.match(sectionSource, /sceneImage/);
});
