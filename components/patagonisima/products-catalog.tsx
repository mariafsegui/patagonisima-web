"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { catalog, formatPrice, WHATSAPP_PHONE, type ProductCategory } from "@/lib/products"

type Filter = "all" | ProductCategory

export function ProductsCatalog() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")

  const filtered = useMemo(
    () => (filter === "all" ? catalog : catalog.filter((p) => p.category === filter)),
    [filter],
  )

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.shop.categories.all },
    { key: "cookies", label: t.shop.categories.cookies },
    { key: "honey", label: t.shop.categories.honey },
  ]

  const getName = (category: ProductCategory, i: number) =>
    category === "cookies" ? t.cookies.items[i].name : t.honeyProducts.items[i].name
  const getDescription = (category: ProductCategory, i: number) =>
    category === "cookies" ? t.cookies.items[i].description : t.honeyProducts.items[i].description

  return (
    <section className="bg-background px-8 lg:px-12 pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Filtros + contador */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-primary/10 pt-8 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded-full border ${
                  filter === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-primary/70 border-primary/20 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="text-xs tracking-[0.15em] uppercase text-primary/50 font-light">
            {filtered.length}{" "}
            {filtered.length === 1 ? t.shop.resultsSingular : t.shop.resultsPlural}
          </span>
        </div>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((product) => {
            const name = getName(product.category, product.srcIndex)
            const description = getDescription(product.category, product.srcIndex)
            const waMessage = `${t.shop.whatsappMessage} ${name} (${formatPrice(product.price)})`
            const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`

            return (
              <article key={product.id} className="group flex flex-col">
                {/* Imagen */}
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40 rounded-sm">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-light">
                      {t.shop.new}
                    </span>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-light">
                      {product.category === "cookies"
                        ? t.shop.categories.cookies
                        : t.shop.categories.honey}
                    </span>
                    <span className="w-4 h-px bg-primary/20" aria-hidden="true" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary/50 font-light">
                      {product.weight}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-3">
                    {name}
                  </h3>
                  <p className="text-sm text-primary/65 leading-relaxed font-light mb-6 flex-1 text-pretty">
                    {description}
                  </p>

                  <div className="flex items-center justify-between border-t border-primary/10 pt-5">
                    <span className="font-serif text-2xl text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[10px] tracking-[0.2em] uppercase font-light hover:bg-primary/90 transition-all duration-300 group/btn"
                    >
                      {t.shop.buy}
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Nota */}
        <p className="mt-16 text-center text-xs tracking-[0.15em] uppercase text-primary/45 font-light">
          {t.shop.note}
        </p>
      </div>
    </section>
  )
}
