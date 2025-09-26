import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-7xl mx-auto px-8 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Button className="mr-3" asChild>
            <Link href="/#pricing">Get started</Link>
          </Button>
          <Button variant="outline">
            <Link href="#">Speak to Sales</Link>
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/phone-mockup.png"
            width={520}
            height={389}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
