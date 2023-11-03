import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <section className="py-5 bg-[#020616]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Crypto Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/hero.png"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Future of Finance is Here
              </h1>
              <p className="max-w-[600px]">
                Discover the power of digital currency and start building your financial future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
