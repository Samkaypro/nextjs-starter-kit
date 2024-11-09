import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Play } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oluwaseun Adebayo",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Vendcliq don change my shop game completely! Before, I dey always run out of popular items or overstock slow-moving ones. Now, their AI system dey tell me exactly what to order and when. My profits don increase by 30% in just three months!"
  },
  {
    id: 2,
    name: "Chinwe Okafor",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The efficiency Vendcliq brings to my business is remarkable. I used to spend hours managing inventory and sales. Now, it's all automated. I have more time to focus on customer relationships and expanding my product range. It's been a game-changer."
  },
  {
    id: 3,
    name: "Emeka Nnamani",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "Vendcliq's same-day payment feature na lifesaver! As a small business owner, cash flow na big challenge. But now, I fit get my money quick-quick, which means I fit restock faster and take advantage of bulk discounts. E sweet me die!"
  },
  {
    id: 4,
    name: "Fatima Yusuf",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "I was skeptical about using AI for my shop, but Vendcliq made it so simple. Their system accurately predicts which products will sell well during different seasons. I've reduced waste by 40% and my customers are always happy because I have what they need."
  },
  {
    id: 5,
    name: "Obinna Eze",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote: "The referral program for Vendcliq na correct ijoba! I don introduce five of my fellow shop owners to the platform, and the extra income I'm earning has allowed me to hire an assistant. Vendcliq no just dey help my business, e dey create jobs too!"
  },
  {
    id: 6,
    name: "Oluwaseun Adebayo",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote: "Vendcliq helps me track customer preferences. Now I always stock their favorites. Repeat business up 25%, and customers praise our reliability."
  }
]

export default function Component() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-[#4052A3] text-[#4052A3]"
          >
            Testimonials
          </Button>
          <h2 className="text-4xl font-bold text-[#4052A3] md:text-5xl">
            Vendcliq Success Stories
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-none bg-[#E3E9FA]"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <h3 className="font-semibold text-[#4052A3]">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {testimonial.quote}
                </p>
                <button className="flex items-center gap-2 text-sm text-[#4052A3] hover:opacity-80">
                  <span>Hear Their Stories</span>
                  <div className="flex items-center gap-2">
                    <Play className="size-3 fill-current" />
                    <svg
                      viewBox="0 0 100 20"
                      className="h-3 w-20"
                    >
                      <path
                        d="M0 10 Q25 5, 50 10 T100 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}