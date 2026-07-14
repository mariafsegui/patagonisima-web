"use client"

import { Header } from "@/components/patagonisima/header"
import { Hero } from "@/components/patagonisima/hero"
import { FeaturesBar } from "@/components/patagonisima/features-bar"
import { CookiesSection } from "@/components/patagonisima/cookies-section"
import { VideoSection } from "@/components/patagonisima/video-section"
import { HoneyProductsSection } from "@/components/patagonisima/honey-products-section"
import { VideoFaunaSection } from "@/components/patagonisima/video-fauna-section"
import { CalafateSection } from "@/components/patagonisima/calafate-section"
import { PairingsSection } from "@/components/patagonisima/pairings-section"
import { WhereToBuySection } from "@/components/patagonisima/where-to-buy-section"
import { StorySection } from "@/components/patagonisima/story-section"
import { Footer } from "@/components/patagonisima/footer"
import { WhatsAppButton } from "@/components/patagonisima/whatsapp-button"

export default function PatagonisimaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesBar />
      <CookiesSection />
      <VideoSection />
      <HoneyProductsSection />
      <VideoFaunaSection />
      <CalafateSection />
      <PairingsSection />
      <StorySection />
      <WhereToBuySection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
