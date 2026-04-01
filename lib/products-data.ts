export type ProductCategory =
  "Honey" |
  "Herbal Tinctures & Capsules" |
  "Essential Oils & Aromatherapy" |
  "Argan Oil" |
  "Natural Cosmetics" |
  "Spices"

export interface Product {
  id: string
  name: string
  shortDescription: string
  longDescription: string
  mainImage: string
  thumbnailImages: string[]
  category: ProductCategory
  price: number
  stock: number
  isPopular: boolean
  city: string
}

// Single image used across all products for demonstration
const PRODUCT_IMAGE = "/p1.jpg"

// Single image used across all categories for demonstration
const CATEGORY_IMAGE = "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Db b"

export interface Category {
  id: string
  name: ProductCategory
  shortDescription: string
  image: string
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Honey",
    shortDescription: "Pure, natural honey from the Middle Atlas",
    image: CATEGORY_IMAGE,
  },
  {
    id: "cat-2",
    name: "Herbal Tinctures & Capsules",
    shortDescription: "Concentrated herbal extracts",
    image: CATEGORY_IMAGE,
  },
  {
    id: "cat-3",
    name: "Essential Oils & Aromatherapy",
    shortDescription: "Steam-distilled oils for relaxation",
    image: CATEGORY_IMAGE,
  },
  {
    id: "cat-4",
    name: "Argan Oil",
    shortDescription: "100% pure organic argan oil",
    image: CATEGORY_IMAGE,
  },
  {
    id: "cat-5",
    name: "Natural Cosmetics",
    shortDescription: "Organic skin and body care",
    image: CATEGORY_IMAGE,
  },
  {
    id: "cat-6",
    name: "Spices",
    shortDescription: "Authentic Moroccan spices",
    image: CATEGORY_IMAGE,
  },
]

export const bestCategories = categories.slice(0, 4);

  export const products: Product[] = [
  {
    id: "prod-1",
    name: "Pure Eucalyptus Honey",
    shortDescription: "100% natural eucalyptus honey from the Middle Atlas mountains.",
    longDescription: "Our Pure Eucalyptus Honey is harvested from the pristine forests of the Middle Atlas. Known for its distinct aromatic flavor and medicinal properties, this honey is perfect for supporting respiratory health and adding a unique depth to your morning tea.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Honey",
    price: 180,
    stock: 15,
    isPopular: true,
    city: "Ifrane",
  },
  {
    id: "prod-2",
    name: "Immune Boost Tincture",
    shortDescription: "Concentrated herbal extract for natural immune support.",
    longDescription: "A powerful blend of Echinacea, Elderberry, and Ginger, our Immune Boost Tincture is designed to strengthen your body's natural defenses. This concentrated formula is easily absorbed and perfect for daily wellness maintenance during seasonal changes.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Herbal Tinctures & Capsules",
    price: 140,
    stock: 25,
    isPopular: true,
    city: "Casablanca",
  },
  {
    id: "prod-3",
    name: "Lavender Essential Oil",
    shortDescription: "Pure steam-distilled Lavender oil for relaxation.",
    longDescription: "Our Lavender Essential Oil is steam-distilled from high-altitude lavender fields. Used for centuries for its calming and soothing properties, it is ideal for aromatherapy, improving sleep quality, and soothing minor skin irritations.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Essential Oils & Aromatherapy",
    price: 110,
    stock: 40,
    isPopular: true,
    city: "Marrakech",
  },
  {
    id: "prod-4",
    name: "Organic Culinary Argan Oil",
    shortDescription: "Toasted organic argan oil with a rich nutty flavor.",
    longDescription: "Authentic culinary Argan Oil from the Souss-Massa region. Cold-pressed from roasted argan kernels, this 'liquid gold' is rich in Vitamin E and antioxidants. Its unique nutty taste makes it a premium addition to salads, tagines, and dipping breads.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Argan Oil",
    price: 165,
    stock: 12,
    isPopular: true,
    city: "Agadir",
  },
  {
    id: "prod-5",
    name: "Prickly Pear Face Cream",
    shortDescription: "Anti-aging moisturizing cream with Prickly Pear seed oil.",
    longDescription: "Experience the ultimate hydration with our Prickly Pear Face Cream. Infused with rare Prickly Pear seed oil, it is naturally rich in Betalains and Vitamin K, providing intense nourishment and helping to reduce the appearance of fine lines and dark circles.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Natural Cosmetics",
    price: 135,
    stock: 50,
    isPopular: true,
    city: "Essaouira",
  },
  {
    id: "prod-6",
    name: "Premium Saffron Threads",
    shortDescription: "Grade-A saffron threads from Taliouine.",
    longDescription: "Sourced directly from the saffron capital of Morocco, our Taliouine Saffron is hand-picked at dawn. Known for its intense color, aroma, and flavor, this spice is essential for authentic Moroccan cooking and valued for its numerous health benefits.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Spices",
    price: 130,
    stock: 10,
    isPopular: true,
    city: "Taliouine",
  },
  {
    id: "prod-7",
    name: "Wild Thyme Honey",
    shortDescription: "Strong aromatic honey with natural antibacterial properties.",
    longDescription: "This rare Wild Thyme Honey is collected by bees from high-altitude thyme bushes. It is celebrated for its powerful antibacterial qualities and its rich, slightly spicy flavor profile. A natural remedy for sore throats and a true gourmet delight.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Honey",
    price: 190,
    stock: 8,
    isPopular: true,
    city: "Chefchaouen",
  },
  {
    id: "prod-8",
    name: "Rosemary Essential Oil",
    shortDescription: "Stimulating rosemary oil for hair and mental clarity.",
    longDescription: "Our pure Rosemary Essential Oil is a mental stimulant that enhances focus and memory. When used in hair care, it is known to stimulate the scalp and promote healthy, thick hair growth through improved circulation.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Essential Oils & Aromatherapy",
    price: 110,
    stock: 30,
    isPopular: true,
    city: "Settat",
  },
  {
    id: "prod-9",
    name: "Cosmetic Argan Oil",
    shortDescription: "100% pure organic argan oil for skin and hair.",
    longDescription: "This pure, unscented Argan Oil is a multi-purpose beauty treatment. Rich in fatty acids and Vitamin E, it deeply hydrates the skin, strengthens nails, and adds a brilliant shine to hair while taming frizz and split ends.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Argan Oil",
    price: 245,
    stock: 12,
    isPopular: true,
    city: "Agadir",
  },
  {
    id: "prod-10",
    name: "Rose Water Toner",
    shortDescription: "Pure distilled rose water for a fresh complexion.",
    longDescription: "Our Rose Water is distilled from the famous roses of Kelaat M'Gouna. This natural toner balances the skin's pH, tightens pores, and provides a refreshing burst of hydration. Perfect for sensitive skin and as a midday pick-me-up.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Natural Cosmetics",
    price: 95,
    stock: 45,
    isPopular: false,
    city: "Kelaat M'Gouna",
  },
  {
    id: "prod-11",
    name: "Ginger Capsules",
    shortDescription: "Pure dried ginger root in convenient capsule form.",
    longDescription: "Natural digestive support in a convenient daily supplement. Our Ginger Capsules contain high-quality, finely ground ginger root, known for its ability to soothe nausea and support healthy digestion and anti-inflammatory response.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Herbal Tinctures & Capsules",
    price: 130,
    stock: 20,
    isPopular: false,
    city: "Casablanca",
  },
  {
    id: "prod-12",
    name: "Ras El Hanout Blend",
    shortDescription: "Masterful blend of our finest Moroccan spices.",
    longDescription: "A legendary Moroccan spice blend, meaning 'head of the shop'. Our custom Ras El Hanout combines over a dozen premium spices, including cinnamon, cardamom, and clove, to create a complex and aromatic profile perfect for slow-cooked stews.",
    mainImage: PRODUCT_IMAGE,
    thumbnailImages: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    category: "Spices",
    price: 85,
    stock: 50,
    isPopular: false,
    city: "Fes",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export const bestSellers: Product[] = products.filter(p => p.isPopular).slice(0, 8);
