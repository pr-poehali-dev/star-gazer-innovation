import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как оформить заказ?",
    answer:
      "Выберите нужные товары в каталоге и нажмите «Добавить в корзину» или свяжитесь с нашим менеджером по телефону. Мы поможем подобрать оборудование, уточним наличие и оформим счёт для оплаты.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer:
      "Принимаем оплату банковской картой, наличными и по безналичному расчёту с НДС. Для бюджетных организаций и госзакупок работаем по договору поставки. Возможна частичная предоплата при крупных заказах.",
  },
  {
    question: "Сроки доставки по России?",
    answer:
      "Товары, имеющиеся на складе, отгружаем в течение 1–2 рабочих дней. Сроки доставки зависят от региона: Москва и МО — 1–3 дня, другие регионы — 3–10 дней транспортной компанией. Крупные партии — отдельно по согласованию.",
  },
  {
    question: "Есть ли сертификаты на продукцию?",
    answer:
      "Да, вся продукция сертифицирована. По запросу предоставляем сертификаты соответствия ГОСТ Р, декларации и паспорта изделий. Документы можно запросить у менеджера при оформлении заказа.",
  },
  {
    question: "Работаете ли вы с бюджетными организациями?",
    answer:
      "Да, мы активно сотрудничаем с бюджетными учреждениями, участвуем в госзакупках через площадки тендеров. Готовим полный комплект документов: КП, договор, спецификацию, счёт, накладные и акты.",
  },
  {
    question: "Как получить консультацию по подбору?",
    answer:
      "Позвоните нам или напишите в мессенджер — наш специалист разберётся в требованиях вашего объекта и предложит оптимальный перечень оборудования с учётом нормативов доступной среды.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}