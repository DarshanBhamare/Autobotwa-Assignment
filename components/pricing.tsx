"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for getting started",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Shared CDN",
      "Community support",
      "99.9% uptime SLA",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Best for growing teams",
    features: [
      "Unlimited projects",
      "500GB storage",
      "Global CDN",
      "Priority support",
      "99.99% uptime SLA",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited everything",
      "Unlimited storage",
      "Premium CDN",
      "Dedicated support",
      "99.99% uptime SLA",
      "Enterprise analytics",
      "Custom integrations",
      "SLA guarantee",
      "Security audit",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always pay for what you use.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-500/10 to-cyan-500/10 border-blue-500/50 md:scale-105 shadow-xl shadow-blue-500/20"
                  : "bg-slate-900/50 border-slate-800 hover:border-blue-500/30"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-400">/month</span>}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-lg mb-8 transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                Choose Plan
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-400 mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
