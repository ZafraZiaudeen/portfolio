import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const stats = [
    { value: 6, label: "Months Experience", suffix: "+" },
    { value: 3, label: "Projects Completed", suffix: "+" },
    { value: 8, label: "Technologies Mastered", suffix: "+" },
    // { value: 100, label: "Client Satisfaction", suffix: "%" },
  ]

  return (
    <section ref={ref} className="py-12 bg-gradient-to-br from-background/50 via-muted/30 to-background/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {inView && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}