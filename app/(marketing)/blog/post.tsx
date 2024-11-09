import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Blogpost() {
  const articles = [
    {
      title: "Retail's AI-Powered Future Today",
      description: "Discover how Vendcliq's smart system can make your business shine and increase your profits",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      link: "#"
    },
    {
      title: "Revolutionizing Customer Service with AI",
      description: "Explore how Vendcliq's intelligent platform can enhance customer satisfaction and streamline support",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      link: "#"
    },
    {
      title: "AI-Driven Marketing Strategies for Growth",
      description: "Learn how Vendcliq's predictive analytics can boost your campaigns and maximize ROI",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      link: "#"
    }
  ]

  return (
    <section className="bg-[#4052A3] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-white/20 text-white hover:bg-white/10"
          >
            Our Blog
          </Button>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Vendcliq
            <br />
            Smart Shop Tips
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-80">
            Learn how to run your shop better with our expert advice. Find out
            about new ways to manage your goods, make more money, and
            grow your business.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="border-none bg-[#2A3C98] text-white">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{article.title}</h3>
                <p className="mb-4 text-sm opacity-80">{article.description}</p>
                <Link
                  href={article.link}
                  className="text-sm text-yellow-400 hover:underline"
                >
                  Read More
                </Link>
              </CardContent>
              <CardFooter className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-b-lg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}