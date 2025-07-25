// aggregator file
// imports and merges all tiers

import { tier1 } from "./data/tier1-foundations.js";
import { tier2 } from "./data/tier2-patterns.js";
import { tier3 } from "./data/tier3-mini-challenges.js";
import { tier4 } from "./data/tier4-chaining-composition.js";
import { tier5 } from "./data/tier5-problem-solving.js";

export const sections = [tier1, tier2, tier3, tier4, tier5]