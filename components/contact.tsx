"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо за ваше обращение. Мы свяжемся с вами в течение 24 часов.")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Получите бесплатную консультацию
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Сделайте первый шаг к финансовой свободе. Свяжитесь с нами сегодня для конфиденциальной консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-card rounded-lg border border-border p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Отправьте нам сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">Имя</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Фамилия</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Электронная почта</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Как мы можем помочь?</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Кратко опишите вашу ситуацию..."
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Запросить бесплатную консультацию
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <p className="text-muted-foreground">+7 961 502-99-09</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Электронная почта</p>
                    <p className="text-muted-foreground">kakaya_pochtaya@yandex.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Офис</p>
                    <p className="text-muted-foreground">
                      г. Краснодар, ул. Красных Партизан, 495<br />​407 офис<br />4 этаж
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Часы работы</p>
                    <p className="text-muted-foreground">
                      Понедельник - Пятница: 9:00 - 18:00<br />
                      Суббота: По записи<br />
                      Воскресенье: Выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary rounded-lg">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                Конфиденциально и без осуждения
              </h4>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Все консультации полностью конфиденциальны. Мы понимаем стресс, связанный с финансовыми трудностями, и обеспечиваем доброжелательную атмосферу для каждого клиента.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
