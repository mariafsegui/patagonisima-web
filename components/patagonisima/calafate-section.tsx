"use client"

import { useLanguage } from "@/lib/language-context"

export function CalafateSection() {
  const { t } = useLanguage()

  return (
    <section id="calafate" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Text content */}
          <div className="space-y-12">
            {/* Title */}
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight">
              {t.calafate.title}{" "}
              <em className="italic text-primary/80">{t.calafate.titleHighlight}</em>
              <br />
              <span className="text-primary">{t.calafate.subtitle}</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary/75 leading-relaxed font-light max-w-lg">
              {t.calafate.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-primary/10" />

            {/* Features list */}
            <div className="space-y-6">
              {t.calafate.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="text-xs tracking-[0.2em] text-primary/60 font-light pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base md:text-lg text-primary/80 font-light">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Circular stat */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-4 rounded-full border border-primary/5" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary/80 tracking-tight">
                  {t.calafate.stat}
                </span>
                <p className="text-[11px] md:text-xs tracking-[0.25em] text-primary/65 font-light mt-4 max-w-[200px] leading-relaxed">
                  {t.calafate.statLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
