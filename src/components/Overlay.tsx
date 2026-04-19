import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Логотип / название сверху */}
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-1">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col items-center"
        >
          <span
            className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase"
            style={{ color: "var(--delina-gold)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em" }}
          >
            DELINA LAB
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 1.0 }}
            className="h-[1px] w-32 mt-1 origin-center"
            style={{ background: "var(--delina-gold)", opacity: 0.6 }}
          />
          <span
            className="text-xs md:text-sm font-light tracking-[0.2em] uppercase mt-1"
            style={{ color: "rgba(212,175,55,0.7)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Натуральные БАДы и космецевтика
          </span>
        </motion.div>
      </div>

      {/* Центральный блок — флагман CURCUPERIN */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="text-center px-6 max-w-lg"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.2 }}
            className="text-5xl md:text-7xl font-bold mb-3"
            style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
          >
            CURCUPERIN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.6 }}
            className="text-sm md:text-base font-light mb-6"
            style={{ color: "rgba(245,240,232,0.85)", fontFamily: "'Open Sans', sans-serif", textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            Куркумин · Пиперин · Босвеллия · Дигидрокверцетин
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
            style={{ borderColor: "var(--delina-gold)", background: "rgba(212,175,55,0.1)", backdropFilter: "blur(10px)" }}
          >
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--delina-gold)" }}>
              +2000% биодоступность
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Нижние метрики */}
      <div className="absolute bottom-10 left-0 right-0 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.2 }}
          className="flex flex-wrap justify-center md:justify-between items-end gap-4"
        >
          <div className="flex gap-8 md:gap-12">
            {[
              { value: "30", label: "продуктов" },
              { value: "4.9★", label: "на Wildberries" },
              { value: "РФ", label: "производство" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-lg md:text-2xl font-bold" style={{ color: "var(--delina-gold)", fontFamily: "'Bebas Neue', sans-serif" }}>
                  {item.value}
                </div>
                <div className="text-xs font-light tracking-wider uppercase" style={{ color: "rgba(245,240,232,0.55)" }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-xs text-center md:text-right"
            style={{ color: "rgba(245,240,232,0.35)", fontFamily: "'Open Sans', sans-serif", maxWidth: 260 }}
          >
            Не является лекарственным средством.<br />
            Перед применением проконсультируйтесь со специалистом.
          </motion.div>
        </motion.div>
      </div>

      {/* Подсказка навигации */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(212,175,55,0.4)" }}>
          тяните для вращения
        </span>
        <motion.div
          animate={{ x: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-base"
          style={{ color: "rgba(212,175,55,0.4)" }}
        >
          ←→
        </motion.div>
      </motion.div>
    </div>
  )
}
