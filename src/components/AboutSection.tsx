import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Icon from "@/components/ui/icon"

const facts = [
  { icon: "Factory", value: "2018", label: "год основания" },
  { icon: "FlaskConical", value: "120+", label: "формул продуктов" },
  { icon: "Award", value: "ГОСТ", label: "сертификация" },
  { icon: "MapPin", value: "Балашиха", label: "производство" },
]

const certifications = [
  { icon: "ShieldCheck", title: "Сертификат ГОСТ Р", desc: "Вся продукция соответствует российским стандартам качества и безопасности" },
  { icon: "Leaf", title: "Натуральный состав", desc: "Без парабенов, SLS и искусственных красителей — только проверенные ингредиенты" },
  { icon: "TestTube", title: "Дерматологически протестировано", desc: "Клинические испытания на гипоаллергенность в сертифицированных лабораториях" },
  { icon: "Recycle", title: "Eco-упаковка", desc: "Перерабатываемая упаковка и минимизация углеродного следа производства" },
]

const contacts = [
  { icon: "MapPin", label: "Производство", value: "Балашиха, Московская область" },
  { icon: "Phone", label: "Телефон", value: "8 (909) 975-53-33", href: "tel:+79099755333" },
  { icon: "Mail", label: "Email", value: "evgenijgavris98@gmail.com", href: "mailto:evgenijgavris98@gmail.com" },
  { icon: "Globe", label: "Сайт", value: "denver2200.top", href: "https://denver2200.top" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1e05 0%, #0d2507 60%, #0a1e05 100%)" }}
    >
      {/* декоративный свет */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Заголовок */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "rgba(212,175,55,0.55)" }}>
            О компании
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}
          >
            DELINA LAB
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: "rgba(212,175,55,0.4)" }} />
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Российское производство косметики премиум-класса. Мы создаём профессиональные уходовые средства
            для волос и тела, которые продаются в аптеках, барбершопах и фитнес-клубах по всей стране.
          </p>
        </motion.div>

        {/* Цифры */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 1}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <Icon name={f.icon as "Factory"} size={22} style={{ color: "var(--delina-gold)", marginBottom: 12 }} />
              <span
                className="text-3xl font-bold block"
                style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                {f.value}
              </span>
              <span className="text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(245,240,232,0.4)" }}>
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Производство */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={5}
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "rgba(212,175,55,0.55)" }}>
              Производство
            </p>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              БАЛАШИХА, МО
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.55)", fontFamily: "'Open Sans', sans-serif" }}>
              Собственное производство площадью более 1500 м² оснащено современным европейским оборудованием.
              Полный цикл разработки — от формулы до готовой упаковки — под одной крышей.
            </p>
            <ul className="flex flex-col gap-3">
              {["Лаборатория R&D для разработки новых формул", "Автоматизированные линии розлива и фасовки", "Склад готовой продукции и логистический центр", "Отдел контроля качества на каждом этапе"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(212,175,55,0.15)" }}>
                    <Icon name="Check" size={10} style={{ color: "var(--delina-gold)" }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Карта-заглушка */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={6}
            className="rounded-2xl overflow-hidden relative"
            style={{ border: "1px solid rgba(212,175,55,0.2)", minHeight: 280 }}
          >
            <iframe
              title="Балашиха производство"
              src="https://yandex.ru/map-widget/v1/?ll=37.938&z=11&text=Балашиха%2C%20Московская%20область"
              width="100%"
              height="280"
              style={{ border: 0, display: "block", filter: "saturate(0.4) brightness(0.7) hue-rotate(90deg)" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 40px rgba(10,30,5,0.7)" }}
            />
            <div
              className="absolute bottom-4 left-4 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "rgba(10,30,5,0.85)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "var(--delina-gold)",
                fontFamily: "'Montserrat', sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon name="MapPin" size={12} style={{ display: "inline", marginRight: 4 }} />
              Балашиха, Московская область
            </div>
          </motion.div>
        </div>

        {/* Сертификаты */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={7}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-3 text-center" style={{ color: "rgba(212,175,55,0.55)" }}>
            Качество и стандарты
          </p>
          <h3
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            СЕРТИФИКАТЫ И СТАНДАРТЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={8 + i}
                className="flex gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,175,55,0.12)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
                >
                  <Icon name={c.icon as "ShieldCheck"} size={18} style={{ color: "var(--delina-gold)" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "rgba(245,240,232,0.9)", fontFamily: "'Montserrat', sans-serif" }}>
                    {c.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.45)", fontFamily: "'Open Sans', sans-serif" }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={12}
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(45,80,22,0.25) 0%, rgba(212,175,55,0.08) 100%)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-2 text-center" style={{ color: "rgba(212,175,55,0.55)" }}>
            Связаться с нами
          </p>
          <h3
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            КОНТАКТЫ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
                >
                  <Icon name={c.icon as "MapPin"} size={16} style={{ color: "var(--delina-gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(212,175,55,0.5)" }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:opacity-80 transition-opacity"
                      style={{ color: "rgba(245,240,232,0.85)", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "rgba(245,240,232,0.85)", fontFamily: "'Montserrat', sans-serif" }}>
                      {c.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
