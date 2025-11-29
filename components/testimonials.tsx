"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Maya Singh",
    role: "Full Stack Developer",
    company: "TechStartup Inc",
    quote:
      "SkyHost transformed how we deploy our applications. What used to take hours now takes minutes. The global CDN has cut our load times by 60%.",
    image: "/woman-with-tech-background-avatar.jpg",
  },
  {
    name: "Alex Johnson",
    role: "SaaS Founder",
    company: "CloudSync",
    quote:
      "The reliability is unmatched. We have never experienced downtime since switching to SkyHost. Their support team is incredibly responsive.",
    image: "/man-professional-avatar-tech.jpg",
  },
  {
    name: "Riya Sharma",
    role: "DevOps Engineer",
    company: "DataFlow Systems",
    quote:
      "The 1-click deployment feature saves us so much time. Combined with the 99.99% uptime guarantee, it is a no-brainer choice.",
    image: "/woman-engineer-avatar.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Loved by Developers Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See what industry leaders say about SkyHost</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-4xl text-blue-400/30 mb-4">{"'"}</div>

              {/* Quote */}
              <p className="text-slate-200 mb-6 leading-relaxed">{testimonial.quote}</p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
