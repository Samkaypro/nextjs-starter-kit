import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Gettoknowus() {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="flex flex-col items-center text-center">
        <Button
          variant="outline"
          className="mb-12 border-[#D9D9D9] text-[#4052A3]"
        >
          <Link href="#">Get To Know Us</Link>
        </Button>

        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: '#4052A3' }}>
            Vendcliq
            <br />
            Your Smart Shop Manager
          </h1>
          <p className="text-lg text-muted-foreground">
            Join smart shop owners across Nigeria who use Vendcliq to track goods, get stock easily, and grow their business. Our clever system helps you sell more and worry less.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
  <Card className="min-h-[300px] max-w-sm justify-between overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
          Grow Your Shop Smart with Vendcliq
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
          Want to make your business bigger? Vendcliq Africa helps you manage your goods better. Our clever system tracks what you have and what you need, so you can focus on selling more.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>

  <Card className="min-h-[300px] max-w-sm overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
          Pay Less When You Bring Friends
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
          Tell your fellow shop owners about Vendcliq and everybody wins. You pay less to use our service, and we help you handle your suppliers. This way, you can sell more goods faster.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>

  <Card className="min-h-[300px] max-w-sm overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
          Boost Your Sales with Vendcliq
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
          Join Vendcliq today and connect with many shopkeepers and big sellers. They&apos;re all using our smart system to keep track of their goods and get what they need when they need it.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  )
}
