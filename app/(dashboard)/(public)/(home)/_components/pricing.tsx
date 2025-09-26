import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { handleSubscribe } from "../../../action";

const priceId = process.env.NEXT_PUBLIC_PRICE_ID;

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light sm:text-xl text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-600 shadow xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">Lifetime membership</h3>
            <p className="font-light text-gray-400 sm:text-lg">
              Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">€0,50</span>
              <span className="text-gray-400"></span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <Check color="#00c951" />
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check color="#00c951" />
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check color="#00c951" />
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Check color="#00c951" />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Check color="#00c951" />
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <form action={handleSubscribe}>
              <input name="price" value={priceId} hidden readOnly />
              <Button variant="secondary" type="submit">
                Get access
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
