export const WHATSAPP_PHONE = "542966609161"

export type ProductCategory = "cookies" | "honey"

export interface CatalogProduct {
  id: string
  category: ProductCategory
  /** Index within the matching translations list (cookies.items / honeyProducts.items) */
  srcIndex: number
  image: string
  /** Reference price in ARS */
  price: number
  weight: string
  isNew?: boolean
}

export const catalog: CatalogProduct[] = [
  {
    id: "calafate",
    category: "cookies",
    srcIndex: 0,
    image:
      "/images/galletita-calafate.jpg",
    price: 1500,
    weight: "30g",
    isNew: true,
  },
  {
    id: "mantecada",
    category: "cookies",
    srcIndex: 1,
    image:
      "/images/galletita-mantecada.jpg",
    price: 1400,
    weight: "27g",
  },
  {
    id: "cookie",
    category: "cookies",
    srcIndex: 2,
    image:
      "/images/galletita-cookie.jpg",
    price: 1300,
    weight: "30g",
  },
  {
    id: "miel",
    category: "honey",
    srcIndex: 0,
    image:
      "/images/miel.jpg",
    price: 8900,
    weight: "240g",
    isNew: true,
  },
]

export function formatPrice(value: number) {
  return "$" + value.toLocaleString("es-AR")
}
