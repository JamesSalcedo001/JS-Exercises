// aggregator file
// imports and merges all tiers

import { tier1 } from "./data/tier1-foundations.js";
import { tier2 } from "./data/tier2-patterns.js";
import { tier3 } from "./data/tier3-mini-challenges.js";
import { tier4 } from "./data/tier4-chaining-composition.js";
import { tier5 } from "./data/tier5-problem-solving.js";
import { flightSections } from "./data/flight-practice.js";
import { problemSections } from "./data/problem-solving.js";

import { practicalSections } from "./data/practical-skills.js";
import { domSections } from "./data/dom-practice.js";

import { projectSections } from "./data/projects.js";
import { algorithmSections } from "./data/algorithm-basics.js";

// Keep the original tiers in their existing order.
export const sections = [tier1, tier2, tier3, tier4, tier5,
  ...flightSections.map((section, i) => ({ ...section, stage: i % 3 + 1, level: "Foundation" })),
  ...problemSections, ...practicalSections, ...domSections, ...projectSections, ...algorithmSections];
