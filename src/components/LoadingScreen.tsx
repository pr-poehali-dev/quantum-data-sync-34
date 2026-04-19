import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-4xl md:text-5xl font-bold tracking-[0.3em] uppercase"
            style={{ color: "#D4AF37", fontFamily: "'Bebas Neue', sans-serif" }}
          >
            DELINA LAB
          </span>
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(212,175,55,0.5)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Натуральные БАДы и космецевтика
          </span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className="h-[1px] w-48 mx-auto mt-6 origin-left"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />
      </div>
    </motion.div>
  )
}