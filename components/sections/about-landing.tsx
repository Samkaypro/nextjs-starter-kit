import Link from "next/link";
import { Button } from "@/components/ui/button"

export default async function AboutLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col items-start gap-5 ">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]" style={{ color: '#4052A3' }}>
         
            <span className="inline-block rounded-lg bg-[#EEF0FF] px-4 py-1">
            Smarter Inventory
            </span>{' '} <br></br>
            Management with AI for Your Shop
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Vendcliq is transforming how retailers across Africa mannage their shops. With our AI-powered tools, we help you streamline inventory, increase sales, and grow your business with ease.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
        <Link
              href=""
              className="hidden md:block"
            >
              <Button
                style={{ backgroundColor: '#FFC300', color: 'black' }}
                className="gap-3 px-8"
                variant="default"
                size="sm"
                rounded="xl"
              >
                <span>Get Started</span>
              </Button>
            </Link>


            <Link
              href=""
              className="hidden md:block"
            >
              <Button
                className="gap-3 px-8"
                variant="outline"
                size="sm"
                rounded="xl"
              >
                <span>Learn More</span>
              </Button>
            </Link> 



            
          {/* <Link href="#">
            <Button
              size="lg"
              style={{ backgroundColor: '#FFC300', color: 'black' }}
              className="hover:bg-[#FFC300]/90"
            >
              Get Started
            </Button>
          </Link>
          <Link href="#">
            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
