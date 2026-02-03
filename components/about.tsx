import { CheckCircle } from "lucide-react"

const highlights = [
  "Сертифицированные специалисты по банкротству",
  "Индивидуальный подход к каждому делу",
  "Прозрачная фиксированная стоимость",
  "Бесплатная первичная консультация",
  "Гибкие условия оплаты",
  "Круглосуточная поддержка по срочным вопросам",
]

const stats = [
  { value: "500+", label: "Решённых дел" },
  { value: "25+", label: "Лет опыта" },
  { value: "98%", label: "Успешных дел" },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
              Мы посвящены вашему финансовому восстановлению
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              В компании «Империалист» мы понимаем, что столкновение с финансовыми трудностями может быть подавляющим. Наша команда опытных адвокатов по банкротству стремится обеспечить заботливое, профессиональное сопровождение на каждом этапе процесса.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Мы верим, что каждый заслуживает второй шанс. С 1999 года мы помогли сотням клиентов освободиться от долгов и восстановить своё финансовое будущее.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-card-foreground mb-8">Наши достижения</h3>
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0 text-center">
                  <p className="text-5xl lg:text-6xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
