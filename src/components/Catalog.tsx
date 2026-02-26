import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все товары", icon: "LayoutGrid" },
  { id: "tactile-indicators", label: "Тактильные указатели", icon: "Navigation" },
  { id: "tactile-tiles", label: "Тактильная плитка", icon: "Grid3x3" },
  { id: "tactile-visual", label: "Тактильно-визуальная разметка", icon: "Eye" },
  { id: "tactile-sound", label: "Тактильно-звуковые устройства", icon: "Volume2" },
  { id: "visual-sound", label: "Визуально-звуковые устройства", icon: "Bell" },
  { id: "furniture", label: "Мебель", icon: "Armchair" },
  { id: "signal-tape", label: "Сигнальные ленты", icon: "Minus" },
  { id: "support", label: "Опорные устройства", icon: "HandMetal" },
  { id: "ramps", label: "Пандусы", icon: "MoveUpRight" },
  { id: "accessibility", label: "Оборудование доступности", icon: "Accessibility" },
]

const products = [
  {
    id: 1,
    title: "Тактильная плитка предупреждающая",
    category: "tactile-tiles",
    price: "от 320 ₽",
    image: "/images/hously-1.png",
    badge: "Хит продаж",
  },
  {
    id: 2,
    title: "Пандус алюминиевый складной",
    category: "ramps",
    price: "от 4 800 ₽",
    image: "/images/hously-2.png",
    badge: "Новинка",
  },
  {
    id: 3,
    title: "Звуковой светофор",
    category: "visual-sound",
    price: "от 8 500 ₽",
    image: "/images/hously-3.png",
    badge: null,
  },
  {
    id: 4,
    title: "Поручень нержавеющий",
    category: "support",
    price: "от 1 200 ₽",
    image: "/images/hously-4.png",
    badge: null,
  },
  {
    id: 5,
    title: "Лента сигнальная жёлтая",
    category: "signal-tape",
    price: "от 85 ₽/м",
    image: "/images/hously-1.png",
    badge: null,
  },
  {
    id: 6,
    title: "Тактильно-звуковой указатель",
    category: "tactile-sound",
    price: "от 6 200 ₽",
    image: "/images/hously-2.png",
    badge: "Новинка",
  },
]

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="catalog" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Наши товары</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Каталог продукции</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left sidebar — categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Категории</p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-all duration-200 rounded-lg group ${
                      activeCategory === cat.id
                        ? "bg-foreground text-background font-medium"
                        : "hover:bg-foreground/5 text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <Icon
                      name={cat.icon}
                      size={16}
                      fallback="Box"
                      className={activeCategory === cat.id ? "opacity-100" : "opacity-50 group-hover:opacity-80"}
                    />
                    <span className="leading-tight">{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right — products grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
                <Icon name="PackageSearch" size={48} className="mb-4 opacity-30" fallback="Box" />
                <p className="text-lg">Товары скоро появятся</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <article key={product.id} className="group cursor-pointer bg-background rounded-xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-foreground text-background text-xs px-2.5 py-1 font-medium">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium text-base mb-2 leading-snug group-hover:underline underline-offset-4">
                        {product.title}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-lg font-semibold">{product.price}</span>
                        <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group/btn">
                          Подробнее
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
