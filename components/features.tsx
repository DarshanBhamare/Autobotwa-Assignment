"use client"

import { Zap, Globe, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "99.99% Uptime",
    description:
      "Your services never go down. Enterprise-grade infrastructure with 24/7 monitoring ensures your apps are always available.",
  },
  {
    icon: Zap,
    title: "1-Click Deploy",
    description:
      "Deploy apps instantly. Connect your repository and deploy with a single click. No complex configurations needed.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Ultra-fast delivery worldwide. Serve your content from 150+ edge locations across the globe at lightning speed.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to host, scale, and manage your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group relative bg-slate-900/50 border-slate-800 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 overflow-hidden hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
