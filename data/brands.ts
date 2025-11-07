export interface IconicPiece {
  name: string
  imageUrl: string
}

export interface Brand {
  id: number
  name: string
  brand: string
  slug: string
  description: string
  fullDescription: string
  achievements: string[]
  founded: number
  color: string
  history: string
  iconicPieces: IconicPiece[]
  legacy: string
  imageUrl: string
}

export const brands: Brand[] = [
  {
    id: 1,
    name: 'Coco Chanel',
    brand: 'Chanel',
    slug: 'chanel',
    description: 'Revolutionized women\'s fashion by introducing comfortable, practical clothing. Her iconic little black dress, Chanel No. 5 perfume, and the classic Chanel suit became timeless symbols of elegance and sophistication.',
    fullDescription: 'Gabrielle "Coco" Chanel was a French fashion designer and businesswoman who founded the Chanel brand. She is credited with liberating women from the constraints of the "corseted silhouette" and popularizing a sporty, casual chic as the feminine standard of style. Chanel\'s influence on haute couture was such that she was the only person in the field to be named on Time magazine\'s 100 most influential people of the 20th century.',
    achievements: [
      'Introduced the little black dress in 1926',
      'Created Chanel No. 5, the world\'s most famous perfume',
      'Pioneered the use of jersey fabric in high fashion',
      'Designed the iconic Chanel suit',
      'Introduced the Chanel 2.55 handbag in 1955',
      'Revolutionized costume jewelry with faux pearls'
    ],
    founded: 1910,
    color: '#000000',
    history: 'Chanel was founded in 1910 by Coco Chanel in Paris. Starting with a small hat shop, Chanel quickly expanded into clothing, revolutionizing women\'s fashion with her practical and elegant designs. The brand survived World War II and Chanel\'s temporary exile, returning to prominence in the 1950s. Today, Chanel remains one of the most prestigious luxury brands in the world.',
    iconicPieces: [
      { name: 'The Little Black Dress (1926)', imageUrl: '/channell/01_little_black_dress.webp' },
      { name: 'Chanel No. 5 Perfume (1921)', imageUrl: '/channell/02_perfume_bottle.webp' },
      { name: 'The Chanel Suit', imageUrl: '/channell/03_tweed_suit.webp' },
      { name: 'Chanel 2.55 Handbag', imageUrl: '/channell/04_quilted_flap_bag.webp' },
      { name: 'Two-Tone Slingback Pumps', imageUrl: '/channell/05_two_tone_slingback_pumps.webp' },
      { name: 'Quilted Leather Bags', imageUrl: '/channell/06_quilted_tote_set.webp' }
    ],
    legacy: 'Coco Chanel\'s legacy extends far beyond fashion. She empowered women to dress for themselves, not for men. Her philosophy of "luxury must be comfortable, otherwise it is not luxury" continues to influence fashion today. The brand, now led by creative director Virginie Viard, maintains Chanel\'s timeless elegance while embracing modern innovation.',
    imageUrl: '/images/chanel.jpg'
  },
  {
    id: 2,
    name: 'Miuccia Prada',
    brand: 'Prada',
    slug: 'prada',
    description: 'Transformed her family\'s leather goods company into a global luxury fashion powerhouse. Known for her intellectual approach to design, she challenged conventional notions of beauty and luxury.',
    fullDescription: 'Miuccia Prada is an Italian fashion designer and businesswoman, the head designer of Prada and the founder of its subsidiary Miu Miu. She has been credited with transforming Prada from a small family-owned leather goods company into one of the world\'s most influential luxury fashion houses. Known for her intellectual and unconventional approach to design, Prada has consistently challenged fashion norms.',
    achievements: [
      'Revolutionized luxury fashion with nylon backpacks',
      'Became the first woman to lead a major Italian fashion house',
      'Expanded Prada into a multi-billion dollar empire',
      'Known for minimalist, intellectual design aesthetic',
      'Founded Miu Miu as a more experimental line',
      'Pioneered the use of industrial materials in luxury fashion'
    ],
    founded: 1978,
    color: '#000000',
    history: 'Prada was founded in 1913 by Mario Prada as a leather goods shop in Milan. However, it was Miuccia Prada, Mario\'s granddaughter, who transformed the brand when she took over in 1978. She introduced the now-iconic black nylon backpack in 1984, which became a symbol of understated luxury. Under her leadership, Prada expanded into ready-to-wear, accessories, and fragrances, becoming a global fashion powerhouse.',
    iconicPieces: [
      { name: 'Black Nylon Backpack (1984)', imageUrl: '/prada/01-backpack.png' },
      { name: 'Prada Galleria Bag', imageUrl: '/prada/02-galleria-style-bag.png' },
      { name: 'Saffiano Leather Goods', imageUrl: '/prada/03-saffiano-leather-goods.png' },
      { name: 'Prada Sunglasses', imageUrl: '/prada/04-sunglasses.png' },
      { name: 'Platform Shoes', imageUrl: '/prada/05-platform-shoes.png' },
      { name: 'Minimalist Ready-to-Wear Collections', imageUrl: '/prada/06-ready-to-wear-rack.png' }
    ],
    legacy: 'Miuccia Prada\'s legacy lies in her ability to merge intellectualism with fashion. She has consistently used fashion as a medium to comment on society, culture, and art. Her designs are known for their "ugly chic" aesthetic that challenges traditional beauty standards. Prada continues to be a leader in sustainable fashion initiatives and cultural engagement through the Fondazione Prada.',
    imageUrl: '/images/prada.avif'
  },
  {
    id: 3,
    name: 'Donatella Versace',
    brand: 'Versace',
    slug: 'versace',
    description: 'Carried forward her brother Gianni\'s legacy, making Versace one of the most recognizable luxury brands worldwide. Her bold, glamorous designs have dressed countless celebrities and defined red-carpet fashion.',
    fullDescription: 'Donatella Versace is an Italian fashion designer and the vice president and chief creative officer of Versace. After the tragic death of her brother Gianni Versace in 1997, Donatella took over the creative direction of the brand. She has maintained Versace\'s reputation for bold, glamorous designs while infusing her own modern sensibility. Her work has dressed some of the world\'s most famous celebrities and has become synonymous with red-carpet glamour.',
    achievements: [
      'Led Versace to become a global luxury brand',
      'Pioneered celebrity fashion partnerships',
      'Known for bold prints and glamorous designs',
      'Expanded brand into hotels and lifestyle products',
      'Maintained brand identity after Gianni\'s death',
      'Created iconic red-carpet moments for celebrities'
    ],
    founded: 1997,
    color: '#FFD700',
    history: 'Versace was founded in 1978 by Gianni Versace in Milan. The brand quickly became known for its bold designs, innovative use of materials, and glamorous aesthetic. After Gianni\'s tragic murder in 1997, Donatella Versace took over as creative director. Under her leadership, Versace has maintained its reputation for luxury and glamour while expanding into new markets and product categories. The brand is known for its Medusa head logo and Greek key patterns.',
    iconicPieces: [
      { name: 'The Medusa Head Logo', imageUrl: '/versace/medusa.jpg' },
      { name: 'Safety Pin Dress (worn by Elizabeth Hurley)', imageUrl: '/versace/dress.jpg' },
      { name: 'Greek Key Pattern', imageUrl: '/versace/pattern.jpeg' },
      { name: 'Versace Palazzo Bags', imageUrl: '/versace/bags.jpg' },
      { name: 'Bold Baroque Prints', imageUrl: '/versace/prints.webp' },
      { name: 'Glamorous Evening Gowns', imageUrl: '/versace/growns.jpg' }
    ],
    legacy: 'Donatella Versace\'s legacy is one of resilience and evolution. She successfully carried forward her brother\'s vision while making the brand her own. Versace remains one of the most recognizable luxury brands, known for dressing celebrities and creating iconic fashion moments. The brand continues to push boundaries with bold designs and innovative collaborations, most notably with streetwear brands.',
    imageUrl: '/images/versage.avif'
  },
  {
    id: 4,
    name: 'Stella McCartney',
    brand: 'Stella McCartney',
    slug: 'stella-mccartney',
    description: 'Pioneered sustainable luxury fashion, proving that style and ethics can coexist. Her commitment to animal-free materials and environmental responsibility has set new standards in the fashion industry.',
    fullDescription: 'Stella McCartney is a British fashion designer and the daughter of musician Paul McCartney. She is known for her commitment to sustainable and ethical fashion, creating luxury designs without using leather, fur, or other animal products. Since launching her eponymous brand in 2001, McCartney has proven that luxury fashion can be both stylish and sustainable, setting new standards for the industry.',
    achievements: [
      'First luxury brand to be completely cruelty-free',
      'Pioneered sustainable fashion in luxury market',
      'Collaborated with major brands on eco-friendly collections',
      'Won multiple awards for sustainable fashion leadership',
      'Created innovative vegan leather alternatives',
      'Established comprehensive sustainability reporting'
    ],
    founded: 2001,
    color: '#2E7D32',
    history: 'Stella McCartney launched her eponymous brand in 2001 as a joint venture with Gucci Group. From the beginning, the brand was committed to being completely cruelty-free, using no leather, fur, or animal products. McCartney has consistently pushed the boundaries of sustainable fashion, developing innovative materials and processes. The brand has grown to include ready-to-wear, accessories, fragrances, and children\'s wear, all maintaining the same ethical standards.',
    iconicPieces: [
      { name: 'Falabella Bag', imageUrl: '/cartney/bag.jpg' },
      { name: 'Elyse Platform Sneakers', imageUrl: '/cartney/sneackers.jpg' },
      { name: 'Sustainable Activewear', imageUrl: '/cartney/activewear.webp' },
      { name: 'Vegan Leather Jackets', imageUrl: '/cartney/jackets.jpg' },
      { name: 'Eco-Friendly Fragrances', imageUrl: '/cartney/parfume.jpg' },
      { name: 'Responsible Ready-to-Wear', imageUrl: '/cartney/wears.webp' }
    ],
    legacy: 'Stella McCartney\'s legacy is one of ethical leadership in fashion. She has proven that luxury and sustainability are not mutually exclusive, inspiring other brands to follow suit. Her commitment to transparency, innovation, and environmental responsibility has set new standards for the fashion industry. McCartney continues to be a vocal advocate for sustainable fashion and animal rights.',
    imageUrl: '/images/Cartney.avif'
  }
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(brand => brand.slug === slug)
}

