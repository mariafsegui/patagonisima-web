"use client"

import { Header } from "@/components/patagonisima/header"
import { PageHero } from "@/components/patagonisima/page-hero"
import { StorySection } from "@/components/patagonisima/story-section"
import { VideoFaunaSection } from "@/components/patagonisima/video-fauna-section"
import { Footer } from "@/components/patagonisima/footer"
import { WhatsAppButton } from "@/components/patagonisima/whatsapp-button"
import { useLanguage } from "@/lib/language-context"

export default function HistoriaPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        label={t.pages.historia.label}
        title={t.pages.historia.title}
        titleHighlight={t.pages.historia.titleHighlight}
        description={t.pages.historia.description}
      />
      <StorySection />
      <VideoFaunaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
