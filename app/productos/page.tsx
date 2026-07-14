"use client"

import { Header } from "@/components/patagonisima/header"
import { PageHero } from "@/components/patagonisima/page-hero"
import { ProductsCatalog } from "@/components/patagonisima/products-catalog"
import { Footer } from "@/components/patagonisima/footer"
import { WhatsAppButton } from "@/components/patagonisima/whatsapp-button"
import { useLanguage } from "@/lib/language-context"

export default function ProductosPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        label={t.shop.label}
        title={t.shop.title}
        titleHighlight={t.shop.titleHighlight}
        description={t.shop.description}
      />
      <ProductsCatalog />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
