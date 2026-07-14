"use client"

import { Header } from "@/components/patagonisima/header"
import { PageHero } from "@/components/patagonisima/page-hero"
import { CalafateSection } from "@/components/patagonisima/calafate-section"
import { VideoSection } from "@/components/patagonisima/video-section"
import { Footer } from "@/components/patagonisima/footer"
import { WhatsAppButton } from "@/components/patagonisima/whatsapp-button"
import { useLanguage } from "@/lib/language-context"

export default function CalafatePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        label={t.pages.calafate.label}
        title={t.pages.calafate.title}
        titleHighlight={t.pages.calafate.titleHighlight}
        description={t.pages.calafate.description}
      />
      <CalafateSection />
      <VideoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
