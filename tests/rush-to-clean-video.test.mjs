import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Rush to Clean is configured with a native gameplay video preview", async () => {
  const [projectsSource, projectCardSource] = await Promise.all([
    readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/components/ui/ProjectCard.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(projectsSource, /video\?: string;/);
  assert.match(
    projectsSource,
    /slug: "rush-to-clean",[\s\S]*video: "\/assets\/projects\/rush-to-clean\/rush-to-clean-gameplay-demo\.mp4"/,
  );
  assert.match(projectCardSource, /project\.video \? \(/);
  assert.match(projectCardSource, /<video[\s\S]*controls[\s\S]*muted[\s\S]*preload="metadata"/);
  assert.doesNotMatch(projectCardSource, /<video[\s\S]*(autoPlay|loop)/);
});
