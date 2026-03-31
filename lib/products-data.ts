export type ProductCategory = "men" | "women" | "unisex"

export interface Product {
  id: string
  name: string
  brand: string
  volume: string
  longDescription: string
  ingredients: string
  mainImage: string
  thumbnailImages: string[]
  category: ProductCategory
  price: number
  oldPrice?: number
  stock: number
  isBest?: boolean
}

// Single image used across all products for demonstration
const PRODUCT_IMAGE = "/p1.png"

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Oud Wood Intense",
    brand: "Lattafa",
    volume: "100ml",
    longDescription:
      "Experience the depth and intensity of pure oud. This masculine scent blends rare spices and woods to create an unforgettable signature aroma, perfect for evening wear and special occasions. The long-lasting formula ensures you leave a memorable impression.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Linalool, Limonene, Coumarin, Eugenol.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "men",
    price: 180,
    oldPrice: 220,
    stock: 15,
    isBest: true,
  },
  {
    id: "prod-2",
    name: "Floral Bloom",
    brand: "Gucci",
    volume: "50ml",
    longDescription:
      "A celebration of spring flowers, combining jasmine, rose, and lily of the valley. Perfect for everyday elegance, this fragrance slowly reveals its complex floral layers, ending with a soft string of vanilla and musk.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Citronellol, Geraniol.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "women",
    price: 140,
    oldPrice: 160,
    stock: 25,
    isBest: true,
  },
  {
    id: "prod-3",
    name: "Citrus Breeze",
    brand: "Tom Ford",
    volume: "100ml",
    longDescription:
      "An invigorating blend of Sicilian lemon, bergamot, and sweet orange. A clean, fresh scent perfect for any occasion. It provides an energetic and uplifting sensation that lingers comfortably throughout the day.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Limonene, Citral, Linalool.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "unisex",
    price: 110,
    oldPrice: 135,
    stock: 40,
    isBest: true,
  },
  {
    id: "prod-4",
    name: "Midnight Rose",
    brand: "Lancome",
    volume: "75ml",
    longDescription:
      "A deep, sensual take on the classic rose, laced with dark berry notes and a hint of vanilla. The Midnight Rose offers a captivating allure for the modern woman who embraces elegance and mystery.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Geraniol, Citronellol, Farnesol.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "women",
    price: 165,
    oldPrice: 195,
    stock: 12,
    isBest: true,
  },
  {
    id: "prod-5",
    name: "Bleu Intense",
    brand: "Horizon",
    volume: "100ml",
    longDescription:
      "A woody, aromatic fragrance for the man who defies convention. The profoundly sensual Eau de Parfum, infused with crisp citrus notes, offers an intense and refined trail.",
    ingredients: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "men",
    price: 135,
    oldPrice: 165,
    stock: 50,
    isBest: true,
  },
  {
    id: "prod-6",
    name: "Jasmine Mystique",
    brand: "Lumiere",
    volume: "50ml",
    longDescription:
      "Crafted with hand-picked jasmine blossoms at the break of dawn, this fragrance captures the pure, luminous essence of the flower. It is sophisticated, radiant, and endlessly beautiful.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Hexyl Cinnamal, Linalool.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "women",
    price: 130,
    oldPrice: 150,
    stock: 10,
    isBest: true,
  },
  {
    id: "prod-7",
    name: "Santal Royal",
    brand: "Royale",
    volume: "125ml",
    longDescription:
      "A mysterious, captivating fragrance for both men and women. Shrouded in an aura of oriental mystery, the woody freshness of sandalwood contrasts with the deep, intoxicating notes of leather and oud.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Citronellol, Geraniol, Cinnamal.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "unisex",
    price: 190,
    oldPrice: 215,
    stock: 8,
    isBest: true,
  },
  {
    id: "prod-8",
    name: "Vanilla Gold",
    brand: "Elegance",
    volume: "75ml",
    longDescription:
      "A rich tapestry of golden vanilla and sweet amber, intertwined with smoky woods. A truly grand, enveloping scent designed for both men and women seeking an opulent and sweet everyday fragrance.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "unisex",
    price: 110,
    oldPrice: 135,
    stock: 30,
    isBest: true,
  },
  {
    id: "prod-9",
    name: "Royal Oud",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Royal Oud is the pinnacle of luxury, combining the deep, woody resonance of aged Cambodian Oud with the delicate, honeyed sweetness of Bulgarian Rose. A fragrance designed for those who command presence and appreciate the finer details of oriental products.",
    ingredients: "Alcohol Denat., Aquilaria Agallocha (Oud) Oil, Rosa Damascena Flower Oil, Santalum Album (Sandalwood) Oil, Ambergris, Benzyl Salicylate.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "unisex",
    price: 245,
    oldPrice: 290,
    stock: 12,
    isBest: true,
  },
  {
    id: "prod-10",
    name: "Desert Rose",
    brand: "Alhor Elite",
    volume: "50ml",
    longDescription:
      "Desert Rose captures the ethereal beauty of a flower blooming in the heart of the desert. With top notes of saffron and heart notes of damask rose, it settles into a warm base of vanilla and white musk, perfect for the modern woman.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Saffron Extract, Rose absolute, Vanilla Planifolia, White Musk.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "women",
    price: 95,
    oldPrice: 120,
    stock: 45,
    isBest: false,
  },
  {
    id: "prod-11",
    name: "Midnight Musk",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Midnight Musk is a bold statement of masculinity and intrigue. It opens with sharp citrus and moves into a complex heart of leather and black pepper, finishing with a long-lasting, heavy musk that lingers long after the sun goes down.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Musk Ketone, Leather Accord, Tobacco Absolute, Black Pepper Oil.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "men",
    price: 130,
    oldPrice: 160,
    stock: 20,
    isBest: false,
  },
  {
    id: "prod-12",
    name: "Atlas Cedar",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Inspired by the crisp air and ancient forests of Morocco's High Atlas Mountains, Atlas Cedar combines refreshing bergamot with the noble strength of cedarwood and patchouli. A clean, invigorating scent for the adventurous soul.",
    ingredients: "Alcohol Denat., Cedrus Atlantica Wood Oil, Bergamot Oil, Patchouli, Vetiver, Lavender.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "men",
    price: 85,
    oldPrice: 110,
    stock: 50,
    isBest: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export const bestSellers: Product[] = products.filter(p => p.isBest).slice(0, 8);
