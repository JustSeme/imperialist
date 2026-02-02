import { FileText, Users, Building2, Scale, ShieldCheck, HandCoins } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Банкротство физических лиц",
    description:
      "Полное списание долгов для граждан. Освобождение от кредитов, микрозаймов и других финансовых обязательств в срок от 6 месяцев.",
  },
  {
    icon: Users,
    title: "Реструктуризация долгов",
    description:
      "План реструктуризации, позволяющий сохранить имущество и погасить долги в течение 3-5 лет под защитой суда.",
  },
  {
    icon: Building2,
    title: "Банкротство юридических лиц",
    description:
      "Стратегические решения для компаний в кризисе: ликвидация через банкротство, финансовое оздоровление, внешнее управление.",
  },
  {
    icon: Scale,
    title: "Переговоры с кредиторами",
    description:
      "Работа с кредиторами для снижения суммы долга, уменьшения процентов и создания удобного графика платежей.",
  },
  {
    icon: ShieldCheck,
    title: "Защита имущества",
    description:
      "Правовые стратегии для защиты вашего жилья, автомобиля и других активов в процессе банкротства.",
  },
  {
    icon: HandCoins,
    title: "Защита от коллекторов",
    description:
      "Прекращение звонков коллекторов, удержаний из зарплаты и судебных исков с момента подачи заявления.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Наши юридические услуги
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Комплексные решения по банкротству и освобождению от долгов, адаптированные под вашу финансовую ситуацию.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
