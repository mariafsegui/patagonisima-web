"use client"

import { useLanguage } from "@/lib/language-context"

export function PairingsSection() {
  const { t } = useLanguage()

  return (
    <section id="maridajes" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-xs tracking-[0.3em] text-primary/60 font-light block mb-6">
            {t.pairings.label}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[1.05] tracking-tight mb-8">
            {t.pairings.title}{" "}
            <em className="italic text-primary/80">{t.pairings.titleHighlight}</em>
          </h2>
          <p className="text-lg md:text-xl text-primary/75 leading-relaxed font-light max-w-2xl mx-auto">
            {t.pairings.description}
          </p>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.pairings.items.map((item, index) => (
            <div 
              key={index} 
              className={`text-center px-4 py-8 ${
                index === 1 ? "md:border-x md:border-primary/10" : ""
              }`}
            >
              {/* Roman numeral */}
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary/10 italic block mb-6">
                {item.number}
              </span>
              
              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
                {item.title}{" "}
                <em className="italic text-primary/80">{item.titleHighlight}</em>
              </h3>
              
              {/* Description */}
              <p className="text-base text-primary/70 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
