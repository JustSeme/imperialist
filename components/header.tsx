"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О нас" },
  { href: "#cases", label: "Дела" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
              Новый Баланс
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+79615029909"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 961 502-99-09</span>
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Консультация</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79615029909"
              className="py-3 flex items-center gap-2 text-base font-medium text-foreground"
            >
              <Phone className="w-5 h-5" />
              <span>+7 961 502-99-09</span>
            </a>
            <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Консультация</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
