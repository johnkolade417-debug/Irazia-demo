import { Product, Review, FaqItem } from '../types';

export const HERO_DATA = {
  announcement: 'Fall Sale: Up to 62% OFF + FREE SHIPPING on orders over $50',
  title: 'The Viral Fleece-Lined Tights',
  subtitle: 'Stay Cozy, Chic, and Snatched All Season Long',
  heroImageDesktop: 'https://irazia.com/cdn/shop/files/Irazia_Home_Page_Hero_3.jpg?v=1786919676&width=1920',
  heroImageMobile: 'https://irazia.com/cdn/shop/files/Irazia_Home_Page_Hero_754_x_815_px.jpg?v=1786466877&width=800',
  ctaText: 'Shop The Viral Tights',
  trustRating: '4.9/5 from 3,400+ Verified Reviews',
  badges: ['Run & Rip Resistant', 'Squat-Proof Coverage', 'High-Waist Compression', 'Real Skin Illusion']
};

export const WARMTH_LEVELS = [
  {
    id: 'light',
    label: 'Light Contour',
    temp: '70°F (15°C - 25°C)',
    weight: '85g Single Layer',
    thickness: '0.8mm',
    bestFor: 'Spring, Early Fall & Breezy Evenings',
    desc: 'Ultra-sheer, featherlight shaping weave with bare-leg translucent finish. Breathable and comfortable for mild temperatures.',
    image: 'https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_20_87811ccf-607c-495f-a723-419913e48e1b.jpg'
  },
  {
    id: 'cozy',
    label: 'Cozy Fleece (Best Seller)',
    temp: '40°F (0°C - 15°C)',
    weight: '220g Microfleece',
    thickness: '2.5mm',
    bestFor: 'Crisp Autumn, Chilly Winter Days & City Commutes',
    desc: 'Our viral signature! Velvet-soft brushed microfleece interior that traps body heat while the high-density exterior creates an impossible sheer illusion.',
    image: 'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_4_7e99c646-7906-4d03-8787-5635689ee750.jpg'
  },
  {
    id: 'ultra',
    label: 'Ultra-Thermal',
    temp: '20°F (-10°C - 0°C)',
    weight: '320g Heavy Shearling Fleece',
    thickness: '4.0mm',
    bestFor: 'Freezing Winter Snow, Sub-Zero Windchill & Ski Trips',
    desc: 'Maximum thermal insulation. Heavyweight plush shearling fleece that blocks arctic windchill while keeping legs looking flawlessly slim and sheer.',
    image: 'https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_30.jpg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'fleece-leggings',
    title: 'Sheer Illusion Fleece-Lined Tights',
    category: 'tights',
    price: 34,
    originalPrice: 60,
    rating: 4.9,
    reviewCount: 3428,
    tag: 'TikTok Viral #1 Best Seller',
    images: [
      'https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_30.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_4_7e99c646-7906-4d03-8787-5635689ee750.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_29.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_47.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_32.jpg'
    ],
    description: 'Look effortlessly sheer while wrapped in toasty fleece. Crafted with our proprietary 4-way stretch weave that never snags, runs, or pills. Built with gentle tummy control that sculpts and elongates legs.',
    highlights: [
      'Guaranteed rip-proof and snag-resistant against acrylic nails and boots',
      '100% squat-proof and non-transparent when bending',
      'Wide double-knit compression waistband that stays in place with zero roll-down',
      'Breathable, cloud-soft fleece lining that warms without sweating'
    ],
    colors: [
      { name: 'Vanilla (Light)', hex: '#E8D3C0', imageIndex: 0 },
      { name: 'Latte (Tan)', hex: '#C9A88D', imageIndex: 1 },
      { name: 'Caramel (Bronze)', hex: '#A67C52', imageIndex: 2 },
      { name: 'Espresso (Deep)', hex: '#5C3E29', imageIndex: 3 }
    ],
    sizes: [
      'XXS/XS (00-1)',
      'XS/S (2-6)',
      'M/L (7-11)',
      'L/XL (12-16)',
      '2XL/3XL (18-24)',
      '4XL/5XL (26-32)'
    ],
    warmthLevels: [
      { id: 'light', label: '70°F Light Contour (85g)', temp: '70°F', weight: '85g', desc: 'Lightweight & breezy' },
      { id: 'cozy', label: '40°F Cozy Fleece (220g)', temp: '40°F', weight: '220g', desc: 'Most popular velvet fleece' },
      { id: 'ultra', label: '20°F Ultra-Thermal (320g)', temp: '20°F', weight: '320g', desc: 'Sub-zero winter proof' }
    ]
  },
  {
    id: 'faux-leather-shorts',
    title: 'Faux Leather High Waisted Shorts',
    category: 'bottoms',
    price: 29,
    originalPrice: 50,
    rating: 4.8,
    reviewCount: 892,
    tag: 'Pairs With Viral Tights',
    images: [
      'https://irazia.com/cdn/shop/files/fleeceleggings_6.jpg'
    ],
    description: 'The ultimate pairing with our Sheer Illusion Tights. Ultra-buttery vegan leather tailored with high-rise waistline, subtle A-line cut that flatters thighs, and functional pockets.',
    highlights: [
      'Supple vegan PU leather with satin finish',
      'Flattering A-line leg openings that create an hourglass silhouette',
      'Deep side pockets and sturdy zip-fly closure',
      'Lined for frictionless comfort against fleece tights'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#1C1917', imageIndex: 0 }
    ],
    sizes: ['XS (2-4)', 'S (4-6)', 'M (6-8)', 'L (10-12)', 'XL (14-16)']
  },
  {
    id: 'corduroy-mini-skirt',
    title: 'High Waisted Mini Corduroy Skirt',
    category: 'bottoms',
    price: 29,
    originalPrice: 50,
    rating: 4.9,
    reviewCount: 1154,
    tag: 'Autumn Essential',
    images: [
      'https://irazia.com/cdn/shop/files/6.png',
      'https://irazia.com/cdn/shop/files/1.png',
      'https://irazia.com/cdn/shop/files/4.png',
      'https://irazia.com/cdn/shop/files/5.png',
      'https://irazia.com/cdn/shop/files/10.png',
      'https://irazia.com/cdn/shop/files/9.png',
      'https://irazia.com/cdn/shop/files/8.png',
      'https://irazia.com/cdn/shop/files/7.png'
    ],
    description: 'Charming vintage-inspired wide-wale corduroy mini skirt designed with high rise fit, antique tortoiseshell buttons, and comfort stretch. Tailored to sit gracefully over our sheer tights.',
    highlights: [
      'Soft 100% cotton corduroy with durable ribbed texture',
      'Functional front buttons and twin patch pockets',
      'Tailored rear darts for a gap-free contour fit',
      'Pre-washed fabric that retains shape wash after wash'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#C29B72', imageIndex: 0 },
      { name: 'Rust Auburn', hex: '#9E472A', imageIndex: 1 },
      { name: 'Espresso Brown', hex: '#4A3728', imageIndex: 2 },
      { name: 'Forest Green', hex: '#2F4F3E', imageIndex: 3 }
    ],
    sizes: ['XS (0-2)', 'S (4-6)', 'M (8-10)', 'L (12-14)', 'XL (16-18)']
  },
  {
    id: 'thermal-jumpsuit',
    title: 'Thermal Zip-Up Jumpsuit',
    category: 'jumpsuits',
    price: 49,
    originalPrice: 80,
    rating: 4.9,
    reviewCount: 743,
    tag: 'All-In-One Snatched Fit',
    images: [
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_10_3e21b050-4329-4df7-8552-06562ffe53d5.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_4.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_11.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_12.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_17.jpg',
      'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_20.jpg',
      'https://irazia.com/cdn/shop/files/d63f219e-d61b-4230-b866-32cea96c93ee.png'
    ],
    description: 'Streamlined athletic thermal catsuit lined with microfleece. Features an adjustable front zipper collar, contour ribbed compression panels, and thumbholes for cozy layering.',
    highlights: [
      'Brushed fleece interior provides warmth without bulk',
      'Heavy-duty two-way front metal zipper',
      'Thumbhole cuffs keep sleeves locked inside winter coats',
      'Sculpts waist and lifts silhouette with targeted ribbing'
    ],
    colors: [
      { name: 'Midnight Onyx', hex: '#171717', imageIndex: 0 },
      { name: 'Heather Charcoal', hex: '#4B5563', imageIndex: 1 }
    ],
    sizes: ['XS (0-2)', 'S (4-6)', 'M (8-10)', 'L (12-14)', 'XL (16-18)']
  },
  {
    id: 'wool-thermal-socks',
    title: 'Knitted Wool Thermal Socks (5 Assorted Pairs)',
    category: 'accessories',
    price: 16,
    originalPrice: 28,
    rating: 4.8,
    reviewCount: 612,
    tag: '5-Pack Bundle',
    images: [
      'https://irazia.com/cdn/shop/files/d657831f-92e8-4080-b1dc-a1ec2ad54061_1.jpg'
    ],
    description: 'Authentic Nordic chunky jacquard wool blend socks. Super breathable, naturally moisture-wicking, and cushioned along the sole for boots, clogs, and cozy lounging.',
    highlights: [
      '5 versatile earth-tone vintage color patterns',
      'Reinforced heel and toe prevents thread wear',
      'Non-binding ribbed top prevents slipping down calf',
      'Thermal wool blend keeps toes warm down to 15°F'
    ],
    colors: [
      { name: 'Nordic Earth Tones (Set of 5)', hex: '#A89F91', imageIndex: 0 }
    ],
    sizes: ['One Size Fits Most (US Women 5-11)']
  },
  {
    id: 'fleece-lined-socks',
    title: 'Fleece-Lined Socks (6 Assorted Pairs)',
    category: 'accessories',
    price: 16,
    originalPrice: 24,
    rating: 4.9,
    reviewCount: 534,
    tag: '6-Pack Value',
    images: [
      'https://irazia.com/cdn/shop/files/Irazia11prodimgs_4.jpg'
    ],
    description: 'Cloud-soft plush fleece lining makes every step feel like walking on warm marshmallows. Seamless toe link prevents rubbing inside tight leather boots.',
    highlights: [
      '6 essential neutral tones included in each bundle',
      'Thick plush interior fleece lining',
      'Elasticized arch support prevents bunching',
      'Anti-slip comfort cuff'
    ],
    colors: [
      { name: 'Neutral Classics (Set of 6)', hex: '#D6D3D1', imageIndex: 0 }
    ],
    sizes: ['One Size Fits Most (US Women 5-10.5)']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Chloe M.',
    rating: 5,
    date: '3 days ago',
    title: 'Literally fooled all my coworkers in 28° NYC weather!',
    comment: 'I wore a pleated skirt to work when it was 28 degrees out. Everyone looked at me like I had lost my mind until I made them touch the outside of my tights! They look completely sheer like 15 denier pantyhose, but inside it feels like the softest sweatpants imaginable. Best winter purchase ever.',
    verified: true,
    shade: 'Vanilla (Light)',
    size: 'S (2-6)',
    warmth: 'Cozy Fleece (220g)'
  },
  {
    id: 'rev-2',
    author: 'Vanessa K.',
    rating: 5,
    date: '1 week ago',
    title: 'Indestructible. My cat jumped on me and ZERO runs.',
    comment: 'Normal tights rip if you just look at them wrong. My 12lb cat hopped onto my lap with full claws out — I gasped expecting a huge ladder run. NOT A SINGLE THREAD PULLED. The fabric is crazy durable and the waistband never rolls down when I sit.',
    verified: true,
    shade: 'Latte (Tan)',
    size: 'M (7-11)',
    warmth: 'Cozy Fleece (220g)'
  },
  {
    id: 'rev-3',
    author: 'Brianna T.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Finally a sheer fleece tight that matches melanated skin!',
    comment: 'Most brands only make one pale beige shade that looks ghostly ashy. IRAZIA Caramel shade matches my golden bronze undertones seamlessly! The fleece is so warm and the tummy band holds everything tight without suffocating.',
    verified: true,
    shade: 'Caramel (Bronze)',
    size: 'L (12-16)',
    warmth: 'Ultra-Thermal (320g)'
  },
  {
    id: 'rev-4',
    author: 'Elena R.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Tall girl approved! No crotch drop or ankle sagging.',
    comment: "I am 5'10 and usually tights pull down to my mid-thigh within 10 steps. These have plenty of stretch in the length, stay all the way up, and don't bunch at the ankles inside ankle boots.",
    verified: true,
    shade: 'Latte (Tan)',
    size: 'L/XL (12-16)',
    warmth: 'Cozy Fleece (220g)'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'Can you see through them when I bend over?',
    a: "Nope! They look sheer, but they're fully opaque. Squat, bend, sit cross-legged — nothing shows through. That's the whole magic: bare-leg look with 100% full coverage and modesty."
  },
  {
    q: 'Can I wear them outside in freezing winter weather?',
    a: "Yes — that's exactly what they're built for. The fleece lining keeps you toasty in temperatures down to 20°F (and even below with the Ultra-Thermal option), but it breathes naturally so you won't overheat when walking indoors."
  },
  {
    q: 'Will they rip or run easily like regular pantyhose?',
    a: "No! These are constructed with a high-density matrix of 38.9% Nylon, 14.9% Spandex, and 46.2% Polyester. They feel more like premium pants than traditional pantyhose—durable, tear-proof, and safe against long nails, zipper teeth, and boots."
  },
  {
    q: 'Do they bunch or sag at the ankles?',
    a: 'We engineered the lower calf and foot section with contoured anatomical tailoring so they transition smoothly into boots, sneakers, or heels with zero lumpy bunching.'
  },
  {
    q: 'How do I choose between the 3 warmth levels?',
    a: 'Choose 70°F Light Contour (85g) for mild weather (55°F–70°F). Choose 40°F Cozy Fleece (220g) for everyday crisp fall and winter weather (30°F–55°F) — this is our #1 bestseller! Choose 20°F Ultra-Thermal (320g) for freezing snow, blizzards, and winter travel.'
  },
  {
    q: 'What is your shipping and return policy?',
    a: 'Orders are processed within 24–48 hours and arrive via expedited 3–5 day delivery with live tracking. We offer a 30-Day Snug & Snatched Guarantee: if your fit or shade isn’t 100% perfect, exchanges are fast and hassle-free.'
  }
];
