import { FileText, Building2, Landmark, CheckCircle2 } from "lucide-react"

const caseStudies = [
  {
    name: "Ирина С.",
    category: "Физическое лицо",
    badge: "Физ. лицо",
    badgeColor: "bg-amber-700 text-white",
    icon: FileText,
    problem: "Долги по 5 кредитам",
    debt: "2 800 000 ₽",
    duration: "14 месяцев",
    result: "Полное списание долга",
    savings: "Экономия: 100%",
    description:
      "Клиентка имела просроченные кредиты в 5 банках общей суммой 2.8 млн рублей. После начала процедуры банкротства были остановлены все исполнительные производства, прекращены начисления процентов и штрафов.",
    achievements: [
      "Списано 2.8 млн рублей долгов",
      "Сохранено единственное жильё",
      "Защита от коллекторов",
    ],
  },
  {
    name: "Алексей М.",
    category: "Физическое лицо",
    badge: "ИП",
    badgeColor: "bg-emerald-700 text-white",
    icon: Building2,
    problem: "Долги по кредитам и контрагентам",
    debt: "5 200 000 ₽",
    duration: "12 месяцев",
    result: "Реструктуризация + списание",
    savings: "Экономия: 85%",
    description:
      "Индивидуальный предприниматель с долгами перед банками и поставщиками. Была выбрана стратегия реструктуризации с последующим списанием части долга.",
    achievements: [
      "Списано 4.4 млн рублей",
      "Реструктурировано 800 тыс. рублей",
      "Сохранен бизнес-актив",
    ],
  },
  {
    name: "Артур С.",
    category: "Физическое лицо",
    badge: "Юр. лицо",
    badgeColor: "bg-amber-700 text-white",
    icon: Landmark,
    problem: "Банкротство организации",
    debt: "12 000 000 ₽",
    duration: "17 месяцев",
    result: "Ликвидация через банкротство",
    savings: "Экономия: Минимизация рисков",
    description:
      "Компания столкнулась с критической задолженностью перед контрагентами и налоговой. Была проведена процедура банкротства с защитой интересов учредителей.",
    achievements: [
      "Законная ликвидация компании",
      "Защита от субсидиарной ответственности",
      "Минимизация претензий кредиторов",
    ],
  },
]

export function Cases() {
  return (
    <section id="cases" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Наш опыт
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-balance">
            Реальные истории клиентов, которым мы помогли решить их финансовые проблемы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${caseStudy.badgeColor}`}
                    >
                      {caseStudy.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground">{caseStudy.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{caseStudy.category}</p>

                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">Проблема</p>
                    <p className="font-medium text-card-foreground">{caseStudy.problem}</p>
                  </div>

                  <div className="mt-4 flex gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Долг</p>
                      <p className="font-semibold text-accent text-lg">{caseStudy.debt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Срок</p>
                      <p className="font-medium text-card-foreground">{caseStudy.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 px-6 py-4 border-t border-amber-200/50 dark:border-amber-800/30">
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-medium uppercase tracking-wide">
                    Результат
                  </p>
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mt-1">
                    {caseStudy.result}
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">{caseStudy.savings}</p>
                </div>

                <div className="p-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-card-foreground mb-2">Достижения:</p>
                    <ul className="space-y-2">
                      {caseStudy.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="relative">
            <video 
              src="/video-feedback01.mp4"
              className="w-full h-auto rounded-xl border border-border shadow-sm object-cover aspect-video"
              controls
              muted
              loop
              playsInline
            />
          </div>
          
          <div className="relative">
            <video 
              src="/video-feedback02.mp4"
              className="w-full h-auto rounded-xl border border-border shadow-sm object-cover aspect-video"
              controls
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
