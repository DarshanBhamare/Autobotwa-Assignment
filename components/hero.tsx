"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-background relative overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8 text-sm text-slate-300 hover:bg-slate-800/70 transition-colors">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Now with Global CDN
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-white leading-tight">
          Superfast Cloud Hosting for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Modern Web Apps
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-300 text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
          Deploy, scale, and manage your applications with unmatched speed and reliability. Experience hosting that
          keeps up with your ambitions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8 transition-all duration-200 bg-transparent"
          >
            View Pricing
          </Button>
        </div>

        {/* Cloud Illustration */}
        <div className="mt-12 relative h-80 md:h-96 flex items-center justify-center">
          <svg
            className="w-full max-w-2xl text-blue-400/30 animate-pulse"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main cloud shape */}
            <ellipse cx="200" cy="150" rx="140" ry="80" fill="currentColor" opacity="0.3" />
            <ellipse cx="140" cy="140" rx="90" ry="70" fill="currentColor" opacity="0.2" />
            <ellipse cx="260" cy="140" rx="100" ry="75" fill="currentColor" opacity="0.2" />

            {/* Accent circles */}
            <circle cx="180" cy="120" r="30" fill="currentColor" opacity="0.4" />
            <circle cx="220" cy="125" r="35" fill="currentColor" opacity="0.35" />

            {/* Network nodes */}
            <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="300" cy="95" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="200" cy="60" r="5" fill="currentColor" opacity="0.5" />

            {/* Connection lines */}
            <line x1="100" y1="100" x2="200" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="300" y1="95" x2="200" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="60" x2="200" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  )
}
