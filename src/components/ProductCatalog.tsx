import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products, categories, type Product } from "@/data/products"
import Icon from "@/components/ui/icon"

interface ProductCardProps {
  product: Product
  onClick: (p: Product) => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  const badgeColors: Record<string, string> = {
    hit: "bg-amber-500 text-white",
    new: "bg-emerald-600 text-white",
    sale: "bg-red-500 text-white",
    premium: "bg-yellow-600 text-white",
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: "rgba(20,40,10,0.85)",
        border: "1px solid rgba(212,175,55,0.2)",
        backdropFilter: "blur(12px)",
      }}
      onClick={() => onClick(product)}
    >
      {/* Бейдж */}
      {product.badge && (
        <div className={`absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${badgeColors[product.badge]}`}>
          {product.badgeLabel}
        </div>
      )}

      {/* Фото */}
      <div className="relative h-44 overflow-hidden bg-black/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div
          className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: "rgba(212,175,55,0.2)", color: "rgba(212,175,55,0.9)", border: "1px solid rgba(212,175,55,0.3)" }}
        >
          {product.categoryLabel}
        </div>
      </div>

      {/* Контент */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div>
          <h3
            className="text-base font-bold leading-tight"
            style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.1rem" }}
          >
            {product.name}
          </h3>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(212,175,55,0.7)" }}>
            {product.slogan}
          </p>
        </div>

        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'Open Sans', sans-serif" }}>
          {product.shortDesc}
        </p>

        {/* Эффекты */}
        <ul className="flex flex-col gap-1 mt-1">
          {product.effects.slice(0, 2).map((e, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11px]" style={{ color: "rgba(245,240,232,0.7)" }}>
              <span style={{ color: "var(--delina-gold)" }} className="mt-0.5 shrink-0">✓</span>
              {e}
            </li>
          ))}
        </ul>

        {/* Цена + объём */}
        <div className="flex items-end justify-between mt-auto pt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold" style={{ color: "var(--delina-gold)", fontFamily: "'Bebas Neue', sans-serif" }}>
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              {product.oldPrice && (
                <span className="text-xs line-through" style={{ color: "rgba(245,240,232,0.35)" }}>
                  {product.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>
            <span className="text-[10px]" style={{ color: "rgba(245,240,232,0.4)" }}>{product.volume}</span>
          </div>
          <button
            className="text-[11px] px-3 py-1.5 rounded-full font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #b8960f)",
              color: "#0d1f06",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onClick={(e) => { e.stopPropagation(); window.open(product.wbUrl, "_blank") }}
          >
            Купить
          </button>
        </div>
      </div>
    </motion.div>
  )
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: "linear-gradient(160deg, #0d2506 0%, #1a3a0a 100%)", border: "1px solid rgba(212,175,55,0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
          style={{ color: "rgba(212,175,55,0.8)" }}
        >
          <Icon name="X" size={18} />
        </button>

        {/* Фото */}
        <div className="h-52 overflow-hidden rounded-t-2xl">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent to-black/50 rounded-t-2xl" />
        </div>

        <div className="p-6 flex flex-col gap-4">
          {/* Заголовок */}
          <div>
            <div className="text-xs mb-1" style={{ color: "rgba(212,175,55,0.6)" }}>{product.categoryLabel} · {product.volume}</div>
            <h2 className="text-3xl font-bold" style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
              {product.name}
            </h2>
            <p className="text-sm mt-1 italic" style={{ color: "rgba(212,175,55,0.8)" }}>{product.slogan}</p>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.75)", fontFamily: "'Open Sans', sans-serif" }}>
            {product.shortDesc}
          </p>

          {/* Эффекты */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(212,175,55,0.6)" }}>Эффект</h4>
            <ul className="flex flex-col gap-1.5">
              {product.effects.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.8)" }}>
                  <span style={{ color: "var(--delina-gold)" }} className="shrink-0">✓</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Состав */}
          <div className="p-3 rounded-xl" style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}>
            <h4 className="text-xs uppercase tracking-widest mb-1.5" style={{ color: "rgba(212,175,55,0.6)" }}>Состав</h4>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>{product.ingredients}</p>
          </div>

          {/* Применение */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-1.5" style={{ color: "rgba(212,175,55,0.6)" }}>Применение</h4>
            <p className="text-sm" style={{ color: "rgba(245,240,232,0.75)" }}>{product.usage}</p>
          </div>

          {/* Дисклеймер */}
          {product.isDisclaimer && (
            <p className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,232,0.3)" }}>
              Не является лекарственным средством. Перед применением проконсультируйтесь со специалистом.
              Индивидуальная непереносимость, беременность, лактация.
            </p>
          )}

          {/* Цена + кнопки */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold" style={{ color: "var(--delina-gold)", fontFamily: "'Bebas Neue', sans-serif" }}>
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              {product.oldPrice && (
                <span className="text-base line-through" style={{ color: "rgba(245,240,232,0.3)" }}>
                  {product.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <a
                href={product.wbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #CB11AB, #a00d8c)", color: "white" }}
              >
                Wildberries
              </a>
              <a
                href={product.ozonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #005bff, #0040cc)", color: "white" }}
              >
                Ozon
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Кнопка открытия каталога */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-20 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-lg transition-all hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #D4AF37, #b8960f)",
          color: "#0d1f06",
          fontFamily: "'Montserrat', sans-serif",
          boxShadow: "0 4px 24px rgba(212,175,55,0.4)",
          pointerEvents: "auto",
        }}
      >
        <Icon name="Grid3X3" size={16} />
        Каталог 30 продуктов
      </motion.button>

      {/* Панель каталога */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 overflow-y-auto"
            style={{ background: "rgba(5,15,3,0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Шапка */}
            <div
              className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
              style={{ background: "rgba(5,15,3,0.95)", borderBottom: "1px solid rgba(212,175,55,0.15)", backdropFilter: "blur(12px)" }}
            >
              <div>
                <span className="text-2xl font-bold" style={{ color: "var(--delina-gold)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
                  DELINA LAB
                </span>
                <span className="ml-3 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
                  {filtered.length} из {products.length} продуктов
                </span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                style={{ color: "rgba(212,175,55,0.8)" }}
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Фильтры */}
            <div className="px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
                  style={
                    activeCategory === cat.id
                      ? { background: "var(--delina-gold)", color: "#0d1f06" }
                      : { background: "rgba(212,175,55,0.1)", color: "rgba(212,175,55,0.7)", border: "1px solid rgba(212,175,55,0.2)" }
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Сетка продуктов */}
            <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
                ))}
              </AnimatePresence>
            </div>

            {/* Подвал */}
            <div
              className="px-6 py-4 text-center text-xs"
              style={{ color: "rgba(245,240,232,0.25)", borderTop: "1px solid rgba(212,175,55,0.1)" }}
            >
              Производство: Балашиха, Россия · ТР ТС · 4.9★ на Wildberries
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно продукта */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
