export type Product = {
  id: number
  name: string
  description: string | null
  price: number
  category: string
  image_url: string | null
  featured: boolean
  created_at: string
  updated_at: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dark Velvet Truffle",
    description: "Intensely rich 72% dark chocolate truffle with a silky ganache center, dusted with premium cocoa powder.",
    price: 12.99,
    category: "Truffles",
    image_url: "/images/dark-truffle.jpg",
    featured: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Salted Caramel Bonbon",
    description: "Hand-crafted bonbon with house-made salted caramel encased in smooth milk chocolate.",
    price: 14.99,
    category: "Bonbons",
    image_url: "/images/salted-caramel.jpg",
    featured: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 3,
    name: "Hazelnut Praline Bar",
    description: "Creamy hazelnut praline layered between crisp feuilletine and enrobed in Belgian milk chocolate.",
    price: 9.99,
    category: "Bars",
    image_url: "/images/hazelnut-bar.jpg",
    featured: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 4,
    name: "Raspberry Rose Ganache",
    description: "Delicate white chocolate shell filled with raspberry and rose-infused dark ganache.",
    price: 15.99,
    category: "Bonbons",
    image_url: "/images/raspberry-rose.jpg",
    featured: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 5,
    name: "Single Origin Ecuador 85%",
    description: "Bold and complex single-origin dark chocolate from the Arriba region of Ecuador with notes of red fruit and earth.",
    price: 11.99,
    category: "Bars",
    image_url: "/images/ecuador-bar.jpg",
    featured: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 6,
    name: "Champagne Truffle Collection",
    description: "An exquisite collection of truffles infused with vintage champagne, presented in a gift box.",
    price: 29.99,
    category: "Truffles",
    image_url: "/images/champagne-truffle.jpg",
    featured: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 7,
    name: "Pistachio Marzipan Square",
    description: "Sicilian pistachio marzipan dipped in white chocolate with a dark chocolate drizzle.",
    price: 13.99,
    category: "Specialty",
    image_url: "/images/pistachio-square.jpg",
    featured: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 8,
    name: "Espresso Crunch Bark",
    description: "Thin dark chocolate bark studded with espresso beans, toffee pieces, and a hint of sea salt.",
    price: 8.99,
    category: "Bars",
    image_url: "/images/espresso-bark.jpg",
    featured: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
]

export type AdminUser = {
  id: number
  name: string
  email: string
  password: string
}

export const adminUser: AdminUser = {
  id: 1,
  name: "Factory Admin",
  email: "admin@chocolatfactory.com",
  password: "admin123",
}
