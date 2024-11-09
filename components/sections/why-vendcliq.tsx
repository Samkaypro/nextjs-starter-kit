"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CreditCard, Gift, PieChart, Users } from "lucide-react"
import Image from "next/image"

interface Feature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    id: "quick-payments",
    icon: CreditCard,
    title: "Quick Payments",
    description: "Receive your funds on the same day with Vera Africa. Get fast access to money for your business growth.",
    image: "/api/placeholder/300/300",
  },
  {
    id: "referral-rewards",
    icon: Gift,
    title: "Referral Rewards",
    description: "Earn rewards when you refer other businesses to Vera. Help your network grow while you earn more.",
    image: "/api/placeholder/300/300",
  },
  {
    id: "customer-loyalty",
    icon: Users,
    title: "Customer Loyalty",
    description: "Build lasting relationships with your customers through our smart loyalty programs and insights.",
    image: "/api/placeholder/300/300",
  },
  {
    id: "simplified-sales",
    icon: PieChart,
    title: "Simplified Sales",
    description: "Streamline your sales process with our intuitive tools and real-time tracking capabilities.",
    image: "/api/placeholder/300/300",
  },
]

export default function Component() {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0])

  return (
    <section className="relative overflow-hidden bg-[#4052A3] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
          >
            Why Vera
          </Button>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Outsmart Your Inventory
            <br />
            Outgrow Your Competition
          </h1>
          <p className="max-w-2xl text-lg opacity-80">
            Choose Vera Africa to transform your shop management. Our system helps you
            make smarter decisions, increase profits, and stay ahead in business.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          {/* Feature Selection */}
          <div className="rounded-2xl bg-[#2A3D7A] p-4 backdrop-blur-sm">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={cn(
                  "flex w-full items-center gap-7 rounded-xl px-8 py-7 text-left transition-colors",
                  selectedFeature.id === feature.id
                    ? "bg-[#4052A3]"
                    : "hover:bg-white/5"
                )}
              >
                <feature.icon className="size-5" />
                <span>{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="rounded-2xl bg-[#2A3D7A] p-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white/10">
                <Image 
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">{selectedFeature.title}</h3>
                  <p className="mb-8 opacity-80">{selectedFeature.description}</p>
                </div>
                <Button className="self-start bg-white text-[#4052A3] hover:bg-white/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}