import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.03]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight text-balance">
          Ваш путь к финансовой свободе начинается здесь
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Опытные адвокаты по банкротству, которые помогут физическим и юридическим лицам выйти из сложных долговых ситуаций с заботой и профессионализмом.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8"
          >
            <Link href="#contact">
              Записаться на консультацию
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
          >
            <Link href="#services">Наши услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
