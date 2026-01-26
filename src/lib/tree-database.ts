/**
 * Comprehensive Tree Species Database
 * Contains detailed information about common tree species
 */

export interface TreeSpeciesInfo {
  scientificName: string;
  commonNames: string[];
  family: string;
  origin: string;
  nativeRange: string;
  climate: {
    usdaZones: string;
    description: string;
  };
  characteristics: {
    matureHeight: string;
    matureSpread: string;
    growthRate: string;
    lifespan: string;
    leafType: "deciduous" | "evergreen" | "semi-evergreen";
  };
  benefits: string[];
  wildlife: string[];
  commonIssues: {
    diseases: Array<{ name: string; description: string; severity: "low" | "moderate" | "high" }>;
    pests: Array<{ name: string; description: string; severity: "low" | "moderate" | "high" }>;
    environmental: string[];
  };
  careNotes: {
    water: string;
    soil: string;
    sunlight: string;
    pruning: string;
    fertilizing: string;
  };
  funFacts: string[];
}

export const TREE_DATABASE: Record<string, TreeSpeciesInfo> = {
  // ============ OAKS ============
  "quercus alba": {
    scientificName: "Quercus alba",
    commonNames: ["White Oak", "Stave Oak"],
    family: "Fagaceae",
    origin: "North America",
    nativeRange: "Eastern and Central United States, from Maine to Florida, west to Minnesota and Texas",
    climate: {
      usdaZones: "3-9",
      description: "Tolerates cold winters and hot summers; adaptable to various climates",
    },
    characteristics: {
      matureHeight: "60-80 feet",
      matureSpread: "60-80 feet",
      growthRate: "Slow to moderate (12-24 inches/year)",
      lifespan: "300-600 years",
      leafType: "deciduous",
    },
    benefits: [
      "Exceptional shade tree with broad, rounded crown",
      "Highly valuable hardwood timber",
      "Superior fall color with wine-red to purple leaves",
      "Excellent carbon sequestration capacity",
      "Increases property value significantly",
    ],
    wildlife: [
      "Acorns are primary food source for deer, squirrels, and wild turkey",
      "Provides nesting sites for many bird species",
      "Host plant for hundreds of caterpillar species",
      "Supports more wildlife species than almost any other North American tree",
    ],
    commonIssues: {
      diseases: [
        { name: "Oak Wilt", description: "Fungal disease that blocks water-conducting vessels; can be fatal", severity: "high" },
        { name: "Powdery Mildew", description: "White fungal coating on leaves; mostly cosmetic", severity: "low" },
        { name: "Anthracnose", description: "Fungal leaf spots and defoliation in wet springs", severity: "moderate" },
      ],
      pests: [
        { name: "Gypsy Moth", description: "Caterpillars can defoliate trees; repeated defoliation weakens tree", severity: "high" },
        { name: "Oak Borer", description: "Larvae tunnel under bark; usually attacks stressed trees", severity: "moderate" },
        { name: "Scale Insects", description: "Sap-sucking insects; can cause branch dieback", severity: "low" },
      ],
      environmental: [
        "Sensitive to soil compaction around roots",
        "Does not tolerate prolonged flooding",
        "Young trees susceptible to frost damage",
      ],
    },
    careNotes: {
      water: "Drought tolerant once established; water deeply during extended dry periods",
      soil: "Prefers well-drained, slightly acidic soil; tolerates clay",
      sunlight: "Full sun (6+ hours direct sunlight)",
      pruning: "Prune in late winter to early spring; avoid pruning during oak wilt season (April-July)",
      fertilizing: "Generally not needed for established trees; young trees benefit from balanced fertilizer",
    },
    funFacts: [
      "Can produce 10,000 acorns in a single year",
      "The wood is prized for wine and whiskey barrels due to its tight grain",
      "Some white oaks have been documented to live over 600 years",
    ],
  },

  "quercus rubra": {
    scientificName: "Quercus rubra",
    commonNames: ["Red Oak", "Northern Red Oak", "Champion Oak"],
    family: "Fagaceae",
    origin: "North America",
    nativeRange: "Eastern and Central North America, from Nova Scotia to Georgia, west to Minnesota",
    climate: {
      usdaZones: "3-8",
      description: "Cold hardy; tolerates urban pollution well",
    },
    characteristics: {
      matureHeight: "60-75 feet",
      matureSpread: "45-60 feet",
      growthRate: "Fast for an oak (24+ inches/year)",
      lifespan: "200-400 years",
      leafType: "deciduous",
    },
    benefits: [
      "Fast-growing shade tree",
      "Brilliant red fall color",
      "Tolerates urban conditions and pollution",
      "Strong wood resistant to wind damage",
      "Excellent street and park tree",
    ],
    wildlife: [
      "Acorns feed squirrels, deer, and birds",
      "Important food source because acorns mature in fall",
      "Provides cover and nesting for wildlife",
    ],
    commonIssues: {
      diseases: [
        { name: "Oak Wilt", description: "Serious fungal disease; spreads through root grafts", severity: "high" },
        { name: "Bacterial Leaf Scorch", description: "Causes leaf browning; no cure available", severity: "high" },
        { name: "Hypoxylon Canker", description: "Attacks stressed trees; causes bark sloughing", severity: "moderate" },
      ],
      pests: [
        { name: "Oak Sawfly", description: "Larvae skeletonize leaves", severity: "moderate" },
        { name: "Two-lined Chestnut Borer", description: "Attacks stressed trees; can be fatal", severity: "high" },
      ],
      environmental: [
        "Susceptible to chlorosis in alkaline soils",
        "Can develop included bark in branch crotches",
      ],
    },
    careNotes: {
      water: "Regular watering when young; drought tolerant once established",
      soil: "Adaptable but prefers slightly acidic, well-drained soil",
      sunlight: "Full sun",
      pruning: "Train when young for good structure; prune in dormant season",
      fertilizing: "Acidifying fertilizer if leaves show chlorosis",
    },
    funFacts: [
      "State tree of New Jersey",
      "One of the most important lumber trees in North America",
      "Can grow 2 feet per year when young",
    ],
  },

  // ============ MAPLES ============
  "acer saccharum": {
    scientificName: "Acer saccharum",
    commonNames: ["Sugar Maple", "Hard Maple", "Rock Maple"],
    family: "Sapindaceae",
    origin: "North America",
    nativeRange: "Northeastern United States and Southeastern Canada",
    climate: {
      usdaZones: "3-8",
      description: "Requires cold winters; struggles in heat and drought",
    },
    characteristics: {
      matureHeight: "60-75 feet",
      matureSpread: "40-50 feet",
      growthRate: "Slow to moderate (12-24 inches/year)",
      lifespan: "300-400 years",
      leafType: "deciduous",
    },
    benefits: [
      "Spectacular fall color - yellow, orange, and red",
      "Source of maple syrup (40 gallons of sap = 1 gallon syrup)",
      "Dense shade in summer",
      "Valuable hardwood for furniture and flooring",
      "Iconic symbol of autumn",
    ],
    wildlife: [
      "Seeds eaten by squirrels and birds",
      "Buds are important food for wildlife in early spring",
      "Provides nesting habitat",
    ],
    commonIssues: {
      diseases: [
        { name: "Verticillium Wilt", description: "Soil-borne fungus causing branch dieback", severity: "high" },
        { name: "Tar Spot", description: "Black spots on leaves; mostly cosmetic", severity: "low" },
        { name: "Anthracnose", description: "Leaf spots and curling in wet weather", severity: "low" },
      ],
      pests: [
        { name: "Asian Longhorned Beetle", description: "Invasive pest; can kill tree", severity: "high" },
        { name: "Maple Borer", description: "Tunnels in trunk and branches", severity: "moderate" },
        { name: "Aphids", description: "Cause honeydew dripping; attract sooty mold", severity: "low" },
      ],
      environmental: [
        "Very sensitive to road salt",
        "Does not tolerate soil compaction",
        "Suffers in hot, dry conditions",
        "Susceptible to sunscald on trunk",
      ],
    },
    careNotes: {
      water: "Requires consistent moisture; not drought tolerant",
      soil: "Rich, well-drained, slightly acidic soil",
      sunlight: "Full sun to partial shade",
      pruning: "Prune in late summer or fall to avoid heavy sap bleeding",
      fertilizing: "Generally not needed in good soil",
    },
    funFacts: [
      "State tree of New York, Vermont, West Virginia, and Wisconsin",
      "Leaf is featured on Canadian flag",
      "A single tree can produce 20-60 gallons of sap per season",
    ],
  },

  "acer rubrum": {
    scientificName: "Acer rubrum",
    commonNames: ["Red Maple", "Swamp Maple", "Soft Maple"],
    family: "Sapindaceae",
    origin: "North America",
    nativeRange: "Eastern North America, from Newfoundland to Florida",
    climate: {
      usdaZones: "3-9",
      description: "Very adaptable; tolerates wet and dry conditions",
    },
    characteristics: {
      matureHeight: "40-60 feet",
      matureSpread: "30-50 feet",
      growthRate: "Fast (more than 24 inches/year)",
      lifespan: "80-150 years",
      leafType: "deciduous",
    },
    benefits: [
      "First tree to show color in fall",
      "Brilliant red fall foliage",
      "Adaptable to many soil conditions",
      "Fast growing shade tree",
      "Red flowers in early spring",
    ],
    wildlife: [
      "Early spring flowers provide nectar for bees",
      "Seeds eaten by birds and squirrels",
      "Commonly used as nesting site",
    ],
    commonIssues: {
      diseases: [
        { name: "Verticillium Wilt", description: "Can cause rapid decline", severity: "high" },
        { name: "Leaf Scorch", description: "Brown leaf edges from heat/drought stress", severity: "moderate" },
      ],
      pests: [
        { name: "Leafhoppers", description: "Can transmit diseases", severity: "moderate" },
        { name: "Borers", description: "Attack stressed trees", severity: "moderate" },
      ],
      environmental: [
        "Shallow roots can heave sidewalks",
        "Branches can be weak in storms",
        "Leaves toxic to horses",
      ],
    },
    careNotes: {
      water: "Tolerates wet conditions; water during drought",
      soil: "Extremely adaptable; tolerates poor drainage",
      sunlight: "Full sun to partial shade",
      pruning: "Prune when young to develop strong structure",
      fertilizing: "Rarely needed",
    },
    funFacts: [
      "State tree of Rhode Island",
      "One of the most abundant trees in eastern forests",
      "Called 'swamp maple' because it thrives in wetlands",
    ],
  },

  // ============ PINES ============
  "pinus strobus": {
    scientificName: "Pinus strobus",
    commonNames: ["Eastern White Pine", "Northern White Pine", "Weymouth Pine"],
    family: "Pinaceae",
    origin: "North America",
    nativeRange: "Eastern North America, from Newfoundland to Georgia, west to Minnesota",
    climate: {
      usdaZones: "3-8",
      description: "Cold hardy; prefers cool, humid climates",
    },
    characteristics: {
      matureHeight: "50-80 feet (can reach 150 feet)",
      matureSpread: "20-40 feet",
      growthRate: "Fast (24-36 inches/year)",
      lifespan: "200-450 years",
      leafType: "evergreen",
    },
    benefits: [
      "Soft, graceful appearance with blue-green needles",
      "Excellent windbreak and privacy screen",
      "Fast growing evergreen",
      "Year-round greenery and wildlife habitat",
      "Soft needles are pleasant to touch",
    ],
    wildlife: [
      "Seeds important food for birds, especially crossbills",
      "Dense branches provide winter cover for birds",
      "Squirrels and chipmunks cache seeds",
    ],
    commonIssues: {
      diseases: [
        { name: "White Pine Blister Rust", description: "Fungal disease causing cankers; potentially fatal", severity: "high" },
        { name: "Needle Cast", description: "Causes needle browning and drop", severity: "moderate" },
      ],
      pests: [
        { name: "White Pine Weevil", description: "Kills terminal leader; causes crooked growth", severity: "high" },
        { name: "Pine Bark Beetle", description: "Can kill stressed trees", severity: "high" },
        { name: "Sawflies", description: "Larvae eat needles", severity: "moderate" },
      ],
      environmental: [
        "Very sensitive to air pollution and road salt",
        "Susceptible to wind damage",
        "Sensitive to ozone damage",
      ],
    },
    careNotes: {
      water: "Regular water when young; somewhat drought tolerant when established",
      soil: "Well-drained, slightly acidic soil; does not tolerate alkaline soil",
      sunlight: "Full sun; tolerates light shade when young",
      pruning: "Can be sheared for hedges; prune in spring before new growth",
      fertilizing: "Acidifying fertilizer if needed",
    },
    funFacts: [
      "State tree of Maine and Michigan",
      "Tallest tree in eastern North America",
      "Was heavily logged for ship masts in colonial era",
    ],
  },

  // ============ FRUIT TREES ============
  "malus domestica": {
    scientificName: "Malus domestica",
    commonNames: ["Apple", "Common Apple", "Orchard Apple"],
    family: "Rosaceae",
    origin: "Central Asia",
    nativeRange: "Kazakhstan, Kyrgyzstan, and surrounding regions",
    climate: {
      usdaZones: "3-8",
      description: "Requires winter chill (600-1000 hours below 45°F)",
    },
    characteristics: {
      matureHeight: "15-25 feet (standard), 8-15 feet (dwarf)",
      matureSpread: "15-25 feet",
      growthRate: "Moderate (12-24 inches/year)",
      lifespan: "50-80 years",
      leafType: "deciduous",
    },
    benefits: [
      "Produces delicious, nutritious fruit",
      "Beautiful spring blossoms",
      "Attracts pollinators",
      "Can be espaliered for small spaces",
      "Many disease-resistant varieties available",
    ],
    wildlife: [
      "Flowers attract bees and butterflies",
      "Fruit eaten by deer, birds, and many mammals",
      "Provides nesting sites",
    ],
    commonIssues: {
      diseases: [
        { name: "Apple Scab", description: "Fungal disease causing leaf spots and fruit lesions", severity: "high" },
        { name: "Fire Blight", description: "Bacterial disease causing blackened shoots", severity: "high" },
        { name: "Cedar Apple Rust", description: "Fungal disease requiring cedar host", severity: "moderate" },
        { name: "Powdery Mildew", description: "White coating on leaves and shoots", severity: "moderate" },
      ],
      pests: [
        { name: "Codling Moth", description: "Larvae tunnel into fruit", severity: "high" },
        { name: "Apple Maggot", description: "Causes wormy apples", severity: "high" },
        { name: "Aphids", description: "Distort new growth", severity: "moderate" },
      ],
      environmental: [
        "Requires cross-pollination (need 2 varieties)",
        "Late frost can damage blossoms",
        "Needs annual pruning for production",
      ],
    },
    careNotes: {
      water: "1-2 inches per week during growing season",
      soil: "Well-drained, slightly acidic to neutral",
      sunlight: "Full sun (minimum 6 hours)",
      pruning: "Annual pruning essential; prune in late winter",
      fertilizing: "Balanced fertilizer in spring; avoid excess nitrogen",
    },
    funFacts: [
      "Over 7,500 varieties grown worldwide",
      "Apple seeds contain small amounts of cyanide compounds",
      "Apples float because they are 25% air",
    ],
  },

  "prunus avium": {
    scientificName: "Prunus avium",
    commonNames: ["Sweet Cherry", "Wild Cherry", "Bird Cherry"],
    family: "Rosaceae",
    origin: "Europe and Western Asia",
    nativeRange: "British Isles to western Russia, south to northern Africa",
    climate: {
      usdaZones: "5-7",
      description: "Requires winter chill but sensitive to late frost",
    },
    characteristics: {
      matureHeight: "35-50 feet",
      matureSpread: "25-35 feet",
      growthRate: "Fast (24+ inches/year)",
      lifespan: "50-100 years",
      leafType: "deciduous",
    },
    benefits: [
      "Spectacular white spring blossoms",
      "Delicious sweet fruit",
      "Attractive bark with horizontal lenticels",
      "Good fall color",
      "Valuable timber wood",
    ],
    wildlife: [
      "Fruit highly attractive to birds",
      "Flowers provide early nectar for pollinators",
      "Seeds dispersed by birds",
    ],
    commonIssues: {
      diseases: [
        { name: "Brown Rot", description: "Fungal disease destroying fruit", severity: "high" },
        { name: "Bacterial Canker", description: "Causes gumming and branch death", severity: "high" },
        { name: "Cherry Leaf Spot", description: "Causes early defoliation", severity: "moderate" },
      ],
      pests: [
        { name: "Cherry Fruit Fly", description: "Maggots in fruit", severity: "high" },
        { name: "Black Cherry Aphid", description: "Curls leaves; weakens tree", severity: "moderate" },
        { name: "Borers", description: "Attack stressed trees", severity: "moderate" },
      ],
      environmental: [
        "Fruit cracking from rain during ripening",
        "Bird competition for fruit",
        "Most varieties need pollinizer",
      ],
    },
    careNotes: {
      water: "Regular watering; avoid overwatering",
      soil: "Deep, well-drained soil; intolerant of wet feet",
      sunlight: "Full sun",
      pruning: "Prune in summer to reduce disease; minimal pruning needed",
      fertilizing: "Light fertilization in spring",
    },
    funFacts: [
      "Parent species of most cultivated sweet cherries",
      "Cherry wood is prized for fine furniture",
      "Japan celebrates cherry blossom season (hanami)",
    ],
  },

  // ============ COMMON LANDSCAPE TREES ============
  "platanus occidentalis": {
    scientificName: "Platanus occidentalis",
    commonNames: ["American Sycamore", "Buttonwood", "American Plane Tree"],
    family: "Platanaceae",
    origin: "North America",
    nativeRange: "Eastern United States, from Maine to Florida, west to Texas",
    climate: {
      usdaZones: "4-9",
      description: "Very adaptable; tolerates urban conditions",
    },
    characteristics: {
      matureHeight: "75-100 feet",
      matureSpread: "75-100 feet",
      growthRate: "Fast (24+ inches/year)",
      lifespan: "250-500 years",
      leafType: "deciduous",
    },
    benefits: [
      "Massive shade tree",
      "Striking exfoliating bark (cream, olive, brown patches)",
      "Very fast growing",
      "Tolerates poor conditions",
      "Historic and stately appearance",
    ],
    wildlife: [
      "Seeds eaten by finches and other birds",
      "Cavities provide nesting for wood ducks and owls",
      "Large limbs support bird nests",
    ],
    commonIssues: {
      diseases: [
        { name: "Anthracnose", description: "Causes leaf browning and twig death in spring", severity: "high" },
        { name: "Powdery Mildew", description: "White coating on leaves", severity: "low" },
        { name: "Canker Stain", description: "Serious disease causing tree death", severity: "high" },
      ],
      pests: [
        { name: "Sycamore Lace Bug", description: "Causes leaf stippling", severity: "moderate" },
        { name: "Borers", description: "Attack stressed trees", severity: "moderate" },
      ],
      environmental: [
        "Drops large amounts of leaves, bark, and seed balls",
        "Aggressive roots can damage pavement",
        "Too large for most residential properties",
      ],
    },
    careNotes: {
      water: "Tolerates flooding; also somewhat drought tolerant",
      soil: "Adaptable; prefers moist, rich soil",
      sunlight: "Full sun",
      pruning: "Prune in winter; requires clearance pruning on streets",
      fertilizing: "Rarely needed",
    },
    funFacts: [
      "Largest hardwood tree in North America by trunk diameter",
      "The 'buttonwood' where Wall Street traders first met was a sycamore",
      "Can have trunk diameters over 10 feet",
    ],
  },

  "liriodendron tulipifera": {
    scientificName: "Liriodendron tulipifera",
    commonNames: ["Tulip Tree", "Tulip Poplar", "Yellow Poplar"],
    family: "Magnoliaceae",
    origin: "North America",
    nativeRange: "Eastern United States, from New England to Florida, west to Louisiana",
    climate: {
      usdaZones: "4-9",
      description: "Prefers moist, mild climates; sensitive to drought",
    },
    characteristics: {
      matureHeight: "70-90 feet (can reach 150+ feet)",
      matureSpread: "40-50 feet",
      growthRate: "Fast (24+ inches/year)",
      lifespan: "200-300 years",
      leafType: "deciduous",
    },
    benefits: [
      "Unique tulip-shaped leaves",
      "Beautiful yellow-orange tulip-like flowers",
      "Excellent shade tree",
      "Golden yellow fall color",
      "Very fast growing hardwood",
    ],
    wildlife: [
      "Flowers attract hummingbirds",
      "Important nectar source for bees (tulip tree honey)",
      "Seeds eaten by birds and squirrels",
    ],
    commonIssues: {
      diseases: [
        { name: "Verticillium Wilt", description: "Causes branch dieback", severity: "moderate" },
        { name: "Canker", description: "Causes bark damage on stressed trees", severity: "moderate" },
      ],
      pests: [
        { name: "Tulip Tree Aphid", description: "Causes heavy honeydew drip", severity: "moderate" },
        { name: "Tulip Tree Scale", description: "Weakens tree; causes sooty mold", severity: "moderate" },
      ],
      environmental: [
        "Drops leaves early in drought",
        "Branches can break in storms",
        "Does not tolerate compacted soil",
      ],
    },
    careNotes: {
      water: "Requires consistent moisture; does not tolerate drought",
      soil: "Deep, rich, well-drained, slightly acidic",
      sunlight: "Full sun",
      pruning: "Minimal pruning needed; develops strong central leader",
      fertilizing: "Benefits from fertilizer in poor soils",
    },
    funFacts: [
      "State tree of Indiana, Kentucky, and Tennessee",
      "Not actually a poplar - it's in the magnolia family",
      "Flowers appear after trees are 15-20 years old",
    ],
  },

  "betula papyrifera": {
    scientificName: "Betula papyrifera",
    commonNames: ["Paper Birch", "White Birch", "Canoe Birch"],
    family: "Betulaceae",
    origin: "North America",
    nativeRange: "Northern United States and Canada, from Alaska to Newfoundland",
    climate: {
      usdaZones: "2-6",
      description: "Requires cool climate; suffers in heat",
    },
    characteristics: {
      matureHeight: "50-70 feet",
      matureSpread: "25-35 feet",
      growthRate: "Fast (24+ inches/year)",
      lifespan: "80-140 years",
      leafType: "deciduous",
    },
    benefits: [
      "Stunning white peeling bark",
      "Golden yellow fall color",
      "Graceful, open form",
      "Beautiful in winter landscape",
      "Fast establishing shade tree",
    ],
    wildlife: [
      "Seeds eaten by many bird species",
      "Important food source for grouse and finches",
      "Sap attracts woodpeckers",
    ],
    commonIssues: {
      diseases: [
        { name: "Leaf Spot", description: "Causes brown spots on leaves", severity: "low" },
        { name: "Canker", description: "Causes branch dieback", severity: "moderate" },
      ],
      pests: [
        { name: "Bronze Birch Borer", description: "Kills trees; starts at top and moves down", severity: "high" },
        { name: "Birch Leafminer", description: "Creates brown blotches in leaves", severity: "moderate" },
        { name: "Aphids", description: "Cause honeydew and sooty mold", severity: "low" },
      ],
      environmental: [
        "Heat stress in warm climates",
        "Drought stress leads to borer attack",
        "Short-lived compared to other trees",
      ],
    },
    careNotes: {
      water: "Requires consistent moisture; shallow roots dry quickly",
      soil: "Well-drained, acidic soil; mulch to keep roots cool",
      sunlight: "Full sun to partial shade",
      pruning: "Prune in late summer to avoid heavy sap bleeding",
      fertilizing: "Light fertilization in spring if needed",
    },
    funFacts: [
      "Bark was used by Native Americans to make canoes",
      "State tree of New Hampshire",
      "Sap can be tapped for birch syrup",
    ],
  },
};

// ============ LOOKUP FUNCTIONS ============

/**
 * Find tree info by scientific name (case-insensitive)
 */
export function getTreeByScientificName(scientificName: string): TreeSpeciesInfo | null {
  const key = scientificName.toLowerCase().trim();
  return TREE_DATABASE[key] || null;
}

/**
 * Find tree info by common name (fuzzy match)
 */
export function getTreeByCommonName(commonName: string): TreeSpeciesInfo | null {
  const searchTerm = commonName.toLowerCase().trim();

  for (const tree of Object.values(TREE_DATABASE)) {
    for (const name of tree.commonNames) {
      if (name.toLowerCase().includes(searchTerm) || searchTerm.includes(name.toLowerCase())) {
        return tree;
      }
    }
  }

  return null;
}

/**
 * Find tree info by any name (scientific or common)
 */
export function getTreeInfo(name: string): TreeSpeciesInfo | null {
  // Try scientific name first
  const byScientific = getTreeByScientificName(name);
  if (byScientific) return byScientific;

  // Try common name
  const byCommon = getTreeByCommonName(name);
  if (byCommon) return byCommon;

  return null;
}

/**
 * Get tree info from species category
 */
export function getTreeByCategory(category: string): TreeSpeciesInfo | null {
  const categoryMap: Record<string, string> = {
    oak: "quercus alba",
    maple: "acer saccharum",
    pine: "pinus strobus",
    fruit_tree: "malus domestica",
  };

  const key = categoryMap[category.toLowerCase()];
  return key ? TREE_DATABASE[key] : null;
}

/**
 * Search for trees matching a query
 */
export function searchTrees(query: string): TreeSpeciesInfo[] {
  const searchTerm = query.toLowerCase().trim();
  const results: TreeSpeciesInfo[] = [];

  for (const tree of Object.values(TREE_DATABASE)) {
    // Check scientific name
    if (tree.scientificName.toLowerCase().includes(searchTerm)) {
      results.push(tree);
      continue;
    }

    // Check common names
    for (const name of tree.commonNames) {
      if (name.toLowerCase().includes(searchTerm)) {
        results.push(tree);
        break;
      }
    }
  }

  return results;
}
