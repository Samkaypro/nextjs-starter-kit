import { Button } from "@/components/ui/button"

export default function Whyvendcliq() {
  return (
    <section className="bg-[#4052A3] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
          >
            Why Vendcliq
          </Button>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            This is the
            <br />
            &quot;WHY&quot;
          </h1>
          <p className="mx-auto max-w-3xl text-lg opacity-80">
            You are our &quot;WHY&quot;. We&apos;re on a mission to transform the way African shops
            operate. At Vendcliq Africa, we aim to create a community of successful shop
            owners who, from owning one shop to being a major distributor.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute inset-x-0 top-2 h-0.5 bg-white/20">
            <div className="absolute left-1/2 h-full w-1/4 -translate-x-1/2 bg-yellow-400" />
          </div>

          {/* Timeline Points */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {[
              {
                title: "Empowering Shops",
                description:
                  "We give African shop owners smart tools and financial help to grow their businesses and support local economies.",
                active: false,
              },
              {
                title: "Fueling Growth",
                description:
                  "Our innovative solutions help distributors grow, creating jobs and opportunities across Africa.",
                active: false,
              },
              {
                title: "Building Communities",
                description:
                  "By empowering shop owners, we are promoting prosperity and growth in neighborhoods across the continent.",
                active: true,
              },
              {
                title: "Innovating Distribution",
                description:
                  "Changing how African bevendcliqge businesses handle inventory and finances, making their businesses easier and more profitable. You never run out of stock and make more sales.",
                active: false,
              },
              {
                title: "Partnering Progress",
                description:
                  "Vendcliq Africa partners with distributors to build a network of successful businesses that drive economic growth. Providing our Users with MORE!",
                active: false,
              },
            ].map((point, index) => (
              <div key={index} className="pt-8 text-center">
                <div
                  className={`mx-auto mb-4 size-4 rounded-full ${
                    point.active ? "bg-yellow-400" : "bg-white"
                  }`}
                />
                <h3 className="mb-3 text-lg font-semibold">{point.title}</h3>
                <p className="text-sm opacity-80">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            className="bg-yellow-400 text-black hover:bg-yellow-400/90"
          >
            Join the family
          </Button>
        </div>
      </div>
    </section>
  )
}