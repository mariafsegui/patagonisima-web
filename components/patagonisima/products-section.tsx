"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

const productImages = [
  {
    id: 1,
    packagingImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie-americana-uqdTf4SdvJfyOvWGv6wORsyZ37cA5g.png",
    isNew: true,
  },
  {
    id: 2,
    packagingImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mantecada-guindado-zIVuqeOOttVafzWXWB6LCqEljKY1as.png",
    isNew: false,
  },
  {
    id: 3,
    packagingImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calafate-limon-v62XWOafez8qg8omlDwwrgwNkjXS6e.png",
    isNew: false,
  },
  {
    id: 4,
    packagingImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miel-calafate-RWb6E2t7huN9fgUALe03hObK82W1QE.png",
    isNew: true,
  },
]

export function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <section id="productos" className="py-20 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-0">
            {t.products.title}{" "}
            <span className="font-serif italic">{t.products.titleHighlight}</span>
          </h2>
          <Link
            href="#tienda"
            className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary hover:text-primary/70 transition-colors group"
          >
            {t.products.seeAll}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productImages.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card border border-border overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Product Image Area */}
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs tracking-wider px-3 py-1">
                    {t.products.new}
                  </span>
                )}
                <Image
                  src={product.packagingImage}
                  alt={t.products.items[index].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.products.items[index].name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.products.items[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="p-3 border border-border hover:bg-secondary transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-border hover:bg-secondary transition-colors"
            aria-label="Next product"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
