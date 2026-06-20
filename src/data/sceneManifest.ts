export const sectionSceneMap = {
  home: "/assets/site/journey-scenes/08-generated-valley-poster.png",
  about: "/assets/site/journey-scenes/03-observatory.png",
  education: "/assets/site/journey-scenes/08-generated-valley-poster.png",
  skills: "/assets/site/journey-scenes/04-forest-lantern.png",
  "featured-projects": "/assets/site/journey-scenes/10-generated-river-passage.png",
  projects: "/assets/site/journey-scenes/06-river-ruins.png",
  experience: "/assets/site/journey-scenes/02-coast-lighthouse.png",
  certification: "/assets/site/journey-scenes/09-generated-quiet-field.png",
  contact: "/assets/site/journey-scenes/11-generated-signal-horizon.png",
} as const;

export type JourneySectionId = keyof typeof sectionSceneMap;
