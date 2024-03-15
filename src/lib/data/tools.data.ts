export enum Catgeory {
  Frontend = "frontend",
  Backend = "backend",
  Documentation = "documentaion",
}

export const Tools = [
  {
    name: "SVGViewer",
    href: "https://www.svgviewer.dev/",
    description: "View SVG files",
    category: Catgeory.Frontend,
  },
  {
    name: "Sassmeister",
    href: "https://www.sassmeister.com/",
    description:
      "SassMeister is a playground for Sass. It helps to convert scss/sass to css",
    category: Catgeory.Frontend,
  },

  {
    name: "Nx.dev",
    href: "https://nx.dev/",
    description:
      "Nx is a build system with built-in tooling and advanced CI capabilities . It helps you maintain and scale monorepos, both locally and on CI.",
    category: Catgeory.Frontend,
  },

  {
    name: "nextra",
    href: "https://nextra.site/",
    description:
      "Simple, powerful and flexible site generation framework with everything you love from Next.js",
    category: Catgeory.Documentation,
  },
];
