import { Artwork, CommissionTier, ShopItem } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'city-life-panorama',
    title: 'City Life Panorama',
    year: '2024',
    medium: 'Digital Illustration',
    description: 'A bustling panoramic slice-of-life cartoon metropolis filled with whimsical storefronts, flying machines, a gentle giant automaton, and cozy everyday city wanderers.',
    aspect: 'panoramic',
    image: 'city-panorama',
    tags: ['Environment', 'Storytelling'],
    category: 'Environment',
    isFeatured: true,
    tools: ['Clip Studio Paint EX', 'Wacom Cintiq Pro 24', 'Adobe Photoshop'],
    dimensions: '7680 × 2160 px (300 DPI)',
    client: 'Self-directed Studio Project',
    printAvailable: true,
    printPrice: 42,
    story: 'Conceived over 6 weeks of careful line-work, "City Life Panorama" captures the playful rhythm of an imaginary neighborhood where mechanical wonders and everyday coffee runs coexist. Inspired by classic Franco-Belgian comic streetscapes and Tokyo retro alleyways.',
    colorPalette: ['#fbf8eb', '#e6734c', '#5a96b3', '#89b66a', '#dcbf56', '#2b2a33']
  },
  {
    id: 'sticker-trio-mascots',
    title: 'Cozy Morning Companions',
    year: '2024',
    medium: 'Vector & Digital Inking',
    description: 'Character sticker sheet featuring three studio mascots: playful ginger cat unraveling yarn, cheerful sheet ghost, and a warm coffee mug steaming with love.',
    aspect: 'portrait',
    image: 'sticker-trio',
    tags: ['Character', 'Stickers'],
    category: 'Stickers',
    tools: ['Procreate', 'iPad Pro 12.9', 'Adobe Illustrator'],
    dimensions: '2400 × 3600 px',
    printAvailable: true,
    printPrice: 12,
    story: 'Designed as die-cut vinyl stickers for notebook covers and drawing tablets. The three mascots represent the holy trinity of long studio night drawing sessions: cuddly pets, cozy paranormal vibes, and hot caffeine.',
    colorPalette: ['#ffffff', '#f48833', '#68c2dd', '#e2e7ec', '#1e1e24']
  },
  {
    id: 'dynamic-motion-rush',
    title: 'Dynamic Motion: Street Jump',
    year: '2024',
    medium: 'Digital Cel-Shading & Inking',
    description: 'Action pose study exploring kinetic lines, wind-blown jacket volume, and energetic sneaker footwork of an urban character in mid-stride.',
    aspect: 'landscape',
    image: 'dynamic-motion',
    tags: ['Character', 'Storytelling'],
    category: 'Character',
    tools: ['Clip Studio Paint', 'Photoshop'],
    dimensions: '3840 × 2400 px',
    client: 'Character Concept Artbook',
    printAvailable: true,
    printPrice: 28,
    story: 'A tribute to 90s streetwear animation aesthetics with high-contrast primary accents, oversized outerwear, and expressive hand gestures.',
    colorPalette: ['#f6f6f6', '#f2ab1c', '#d63428', '#2b2c34', '#ffffff']
  },
  {
    id: 'studio-desk-sanctuary',
    title: 'Late Night Workspace Sanctuary',
    year: '2024',
    medium: 'Digital Painting with Grain',
    description: 'An intimate warm-toned look into an illustrator’s creative haven: Wacom Cintiq drawing tablet, pinned character sheets on corkboard, and stacked artbooks.',
    aspect: 'portrait',
    image: 'studio-desk',
    tags: ['Environment', 'Concept Art'],
    category: 'Environment',
    tools: ['Clip Studio Paint EX', 'Wacom Cintiq', 'Custom Riso Brushes'],
    dimensions: '2800 × 3800 px',
    printAvailable: true,
    printPrice: 34,
    story: 'A personal homage to the desk where every project begins. Drawn with warm analog color washes and authentic paper grain textures.',
    colorPalette: ['#ddb392', '#583626', '#b07955', '#3b2416', '#eed0b7']
  },
  {
    id: 'grumpy-window-cat',
    title: 'Sunlit Window Sill Watcher',
    year: '2024',
    medium: 'Digital Inking & Soft Glow',
    description: 'A grumpy yet endearing feline sitting cross-legged by the sun-drenched wooden windowsill alongside a flourishing potted succulent.',
    aspect: 'square',
    image: 'window-cat',
    tags: ['Character', 'Storytelling'],
    category: 'Character',
    tools: ['Procreate', 'iPad Pro', 'Apple Pencil'],
    dimensions: '3000 × 3000 px',
    printAvailable: true,
    printPrice: 24,
    story: 'Capturing the mood of peaceful afternoon sun rays and the unapologetic side-eye of a cat whose favorite sunbeam just moved.',
    colorPalette: ['#fdf3dc', '#e8a946', '#87aa65', '#d67c51', '#3a271d']
  },
  {
    id: 'starlight-ramen-cart',
    title: 'Midnight Ramen & Raindrops',
    year: '2024',
    medium: 'Digital Illustration',
    description: 'A luminous sidewalk noodle cart glowing beneath paper lanterns on a quiet rainy evening in suburban Tokyo.',
    aspect: 'landscape',
    image: 'ramen-cart',
    tags: ['Environment', 'Storytelling'],
    category: 'Environment',
    tools: ['Clip Studio Paint', 'Photoshop'],
    dimensions: '4000 × 2600 px',
    printAvailable: true,
    printPrice: 32,
    story: 'The comforting aroma of broth rising into cool mist, steam drifting past red paper lanterns as night trains rattle softly in the distance.',
    colorPalette: ['#171926', '#ff6b4a', '#ffd166', '#06d6a0', '#118ab2']
  },
  {
    id: 'cloud-botanist-airship',
    title: 'The Cloud Botanist Airship',
    year: '2023',
    medium: 'Storybook Vector Art',
    description: 'A floating Victorian glass greenhouse propelled by gentle clockwork brass propellers, collecting rare high-altitude sky orchids.',
    aspect: 'landscape',
    image: 'airship-botanist',
    tags: ['Environment', 'Concept Art'],
    category: 'Concept Art',
    tools: ['Adobe Illustrator', 'Photoshop'],
    dimensions: '4200 × 2800 px',
    printAvailable: true,
    printPrice: 36,
    story: 'Concept artwork for an upcoming graphic novel adventure following a botanical explorer charting undiscovered sky islands.',
    colorPalette: ['#d8eff8', '#548c77', '#c98a4b', '#f9eed9', '#2e4057']
  },
  {
    id: 'retro-arcade-memories',
    title: 'Quarter Slots & Neon CRT',
    year: '2023',
    medium: 'Isometric Pixel-Hybrid Inking',
    description: 'A vibrant isometric tribute to 90s shopping mall arcades, featuring glowing cabinet screens, token cups, and carpet patterns.',
    aspect: 'portrait',
    image: 'arcade-memories',
    tags: ['Storytelling', 'Concept Art'],
    category: 'Storytelling',
    tools: ['Aseprite', 'Clip Studio Paint'],
    dimensions: '2600 × 3600 px',
    printAvailable: true,
    printPrice: 30,
    story: 'Inspired by Friday afternoons after school spent button-mashing on classic 2D fighting games and racing cabinets.',
    colorPalette: ['#1f1435', '#f72585', '#7209b7', '#4cc9f0', '#ffea00']
  }
];

export const COMMISSION_TIERS: CommissionTier[] = [
  {
    id: 'chibi-sticker',
    name: 'Sticker & Icon Pack',
    tagline: 'Perfect for avatars, Discord emotes, and sticker sheets',
    price: 65,
    turnaround: '4 – 7 Business Days',
    badge: 'Popular for Streamers',
    description: 'Clean vector character icons with bold outlines, cute expressions, and transparent high-res PNG outputs.',
    features: [
      '1 Mascot or Character design',
      '3 Expression variants (Happy, Grumpy, Cheering)',
      'Vector SVG + 3000px High-Res PNG (Transparent)',
      '1 Round of initial sketch revisions',
      'Non-commercial personal license'
    ],
    sampleImage: 'sticker-trio'
  },
  {
    id: 'character-dynamic',
    name: 'Dynamic Character Illustration',
    tagline: 'High-energy full-body cartoon / anime character art',
    price: 150,
    turnaround: '7 – 12 Business Days',
    popular: true,
    badge: 'Most Popular',
    description: 'Fully rendered character in an expressive kinetic pose with streetwear or fantasy wardrobe, cell-shading, and clean graphic background.',
    features: [
      'Full body character in kinetic action pose',
      'Custom wardrobe & prop accessories design',
      'Layered source file (PSD / Clip Studio format)',
      'Color palette breakdown & turnarounds',
      '2 Rounds of composition & color revisions',
      'Personal & streamer avatar rights included'
    ],
    sampleImage: 'dynamic-motion'
  },
  {
    id: 'environment-scene',
    name: 'Full Storybook Environment',
    tagline: 'Rich panoramic scenes with architectural depth & storytelling',
    price: 320,
    turnaround: '14 – 21 Business Days',
    description: 'Immersive illustrated landscape or interior scene with complex architecture, warm lighting, multiple characters, and playful details.',
    features: [
      'Full custom panoramic or portrait background',
      'Up to 4 characters or background creatures',
      'Detailed lighting & atmospheric texturing',
      'Ultra-high resolution 300 DPI print-ready file',
      '3 Comprehensive revision stages (Rough, Line, Color)',
      'Commercial podcast/book cover add-on available'
    ],
    sampleImage: 'city-panorama'
  },
  {
    id: 'commercial-ip',
    name: 'Commercial IP & Book Project',
    tagline: 'End-to-end character & worldbuilding for publishers & brands',
    price: 680,
    turnaround: '3 – 4 Weeks',
    badge: 'Commercial Rights',
    description: 'Full production-ready artwork package with complete worldwide commercial licensing, marketing banner cutouts, and editorial support.',
    features: [
      'Full exclusive commercial merchandise rights',
      'Key visual + 3 social promo crop banners',
      'Vectorized brand logo lockup if needed',
      'Dedicated Slack/Discord private channel for updates',
      'Unlimited milestone checkpoints until final sign-off'
    ],
    sampleImage: 'studio-desk'
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'print-city-panorama',
    title: 'City Life Panorama — Archival Giclée Print',
    type: 'Print',
    price: 42,
    originalPrice: 48,
    image: 'city-panorama',
    description: 'Museum-quality fine art print on 310gsm Hahnemühle German Etching paper. Archival pigment inks guarantee 100+ years of vibrant color fastness.',
    tags: ['Fine Art Print', 'Panorama', 'Limited Run'],
    inStock: true,
    isBestSeller: true,
    options: ['Medium (18" × 8")', 'Large (24" × 10")', 'Extra Large (36" × 15")'],
    details: [
      'Hand-signed & numbered certificate of authenticity',
      '100% cotton rag acid-free archival paper',
      'Ships in heavy-duty cardboard protective tube',
      'Worldwide tracked shipping'
    ]
  },
  {
    id: 'stickers-mascot-pack',
    title: 'jo_studio38 Mascot Trio Vinyl Sticker Pack',
    type: 'Stickers',
    price: 12,
    image: 'sticker-trio',
    description: 'Set of 3 premium waterproof vinyl die-cut stickers featuring Yarn Cat, Friendly Ghost, and Heart Steam Coffee Cup. UV-resistant and dishwasher safe.',
    tags: ['Vinyl Stickers', 'Die-Cut', 'Waterproof'],
    inStock: true,
    isNew: true,
    options: ['Glossy Finish', 'Holographic Glitter Finish (+$3)'],
    details: [
      'Thick, durable vinyl protects against scratches & sunlight',
      'Sizes: 3.2" to 3.8" width',
      'Includes exclusive mini sketch bonus sticker',
      'Ships in rigid stay-flat envelope'
    ]
  },
  {
    id: 'print-dynamic-motion',
    title: 'Dynamic Motion: Street Jump Art Print',
    type: 'Print',
    price: 28,
    image: 'dynamic-motion',
    description: 'High-contrast vibrant poster print printed on 250gsm semi-gloss velvet art stock. Featuring crisp linework and bright yellow/red streetwear accents.',
    tags: ['Art Print', 'Streetwear', 'Action Pose'],
    inStock: true,
    options: ['A4 (8.3" × 11.7")', 'A3 (11.7" × 16.5")', 'A2 (16.5" × 23.4")'],
    details: [
      'Crisp high-density digital offset printing',
      'Velvet matte finish with anti-glare coating',
      'Signed in pencil by the artist in lower right corner'
    ]
  },
  {
    id: 'print-studio-sanctuary',
    title: 'Late Night Workspace Sanctuary Risograph Print',
    type: 'Print',
    price: 34,
    image: 'studio-desk',
    description: '3-color Risograph print (Warm Ochre, Terracotta, and Espresso Black) on 200gsm Munken Lynx paper. Each print features unique microscopic ink stippling.',
    tags: ['Risograph', 'Limited Edition', '3-Color'],
    inStock: true,
    isBestSeller: true,
    options: ['Standard 11" × 14" Frame Ready'],
    details: [
      'Numbered edition of only 150 copies',
      'Soy-based non-toxic eco inks',
      'Embossed with studio seal stamp'
    ]
  },
  {
    id: 'print-window-cat',
    title: 'Sunlit Window Sill Cat Square Mini-Print',
    type: 'Print',
    price: 22,
    image: 'window-cat',
    description: 'Warm, cozy square art print framed with a gentle cream border. Perfect for small desks, coffee corners, and gallery walls.',
    tags: ['Mini Print', 'Cozy Art', 'Cats'],
    inStock: true,
    options: ['8" × 8" Square', '12" × 12" Square'],
    details: [
      'Extra-thick 350gsm textured cardstock',
      'Matte soft-touch finish',
      'Includes gold foil embossed corner stamp'
    ]
  },
  {
    id: 'digital-sketch-brushes',
    title: 'jo_studio38 Cartoonist Inking Brush Pack (Clip Studio & Procreate)',
    type: 'Digital Brushes',
    price: 18,
    originalPrice: 25,
    image: 'studio-desk',
    description: 'Complete digital toolbox with 24 custom-tuned brushes: Gritty Ink Nib, Streamline Cartoon Liner, Halftone Dot Shaders, and Warm Paper Grain Textures.',
    tags: ['Digital Download', 'Brush Pack', 'Instant Access'],
    inStock: true,
    options: ['Clip Studio Paint (.sut)', 'Procreate (.brushset)', 'All-in-One Master Bundle'],
    details: [
      'Instant digital download with installation guide',
      'Includes 3 layered process time-lapse PSD files',
      'Pressure curve sensitivity guide for Apple Pencil & Wacom'
    ]
  }
];
