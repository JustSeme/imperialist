import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Новый Баланс
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Опытные адвокаты по банкротству, помогающие вам достичь финансовой свободы и начать жизнь с чистого листа.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79891251745"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+7-989-125-17-45</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>г. Краснодар, ул. Красных Партизан, 495, 407 офис; 4 этаж</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Понедельник - Пятница: 9:00 - 21:00</p>
                  <p className="mt-1">Суббота - Воскресенье: 10:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              &copy; {new Date().getFullYear()} Новый Баланс. Все права защищены.
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-md">
              Информация на сайте носит ознакомительный характер и не является публичной офертой. Прошлые результаты не гарантируют аналогичного исхода.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
