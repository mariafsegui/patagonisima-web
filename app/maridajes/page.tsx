"use client"

import { Header } from "@/components/patagonisima/header"
import { PageHero } from "@/components/patagonisima/page-hero"
import { PairingsSection } from "@/components/patagonisima/pairings-section"
import { WhereToBuySection } from "@/components/patagonisima/where-to-buy-section"
import { Footer } from "@/components/patagonisima/footer"
import { WhatsAppButton } from "@/components/patagonisima/whatsapp-button"
import { useLanguage } from "@/lib/language-context"

export default function MaridajesPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        label={t.pages.maridajes.label}
        title={t.pages.maridajes.title}
        titleHighlight={t.pages.maridajes.titleHighlight}
        description={t.pages.maridajes.description}
      />
      <PairingsSection />
      <WhereToBuySection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
