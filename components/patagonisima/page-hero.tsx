"use client"

interface PageHeroProps {
  label: string
  title: string
  titleHighlight: string
  description: string
}

export function PageHero({ label, title, titleHighlight, description }: PageHeroProps) {
  return (
    <section className="relative bg-background pt-32 md:pt-44 pb-12 md:pb-16 px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="w-8 h-px bg-primary/30" aria-hidden="true" />
          <span className="text-xs tracking-[0.35em] uppercase text-primary/60 font-light">
            {label}
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.02] tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
          {title}{" "}
          <em className="italic text-primary/75">{titleHighlight}</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-primary/70 leading-relaxed font-light text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
          {description}
        </p>
      </div>
    </section>
  )
}
