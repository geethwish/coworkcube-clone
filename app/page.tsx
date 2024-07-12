import Banner from "@/components/shared/Banner";
import Contact from "@/components/shared/ContactForm";
import FeatureCard from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { benefits, features } from "../constant/support";

export default function Home() {
  return (
    <>
      <div className="p-4 md:p-0">
        <div className="md:container lg:mb-0 mb-2 md:flex md:items-center md:justify-between gap-1">
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold mb-4 mt-3 line-h-custom text-wrap"> <span className="text-secondary">Co-working</span> Spaces with Easy Commute Near Colombo</h1>
          <p className="text-primary gap-6 leading-7 text-md mt-5 lg:text-xl lg:leading-8 text-wrap">
            Nestled conveniently just outside the city with an inspiring environment designed to maximize your productivity and well-being – minus the urban frenzy and high cost
          </p>
        </div>

      </div>
      <div className="relative">
        <Banner src="/images/image-10.webpww" alt="Banner image" layout="responsive" type="background" />
        <div className="bg-white p-4 flex items-center gap-4 absolute top-[45%] left-[30px] postilion-down">
          <h2 className="text-primary text-3xl font-semibold">
            Colombo
          </h2>
          <Button className="uppercase text-white bg-secondary">View Plans</Button>
        </div>
      </div>
      <div className="md:container ">
        <div className="p-4 mt-2">
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold line-h-custom"> A Safe Hi-tech Work Space</h1>
          <h1 className="text-3xl lg:text-5xl  md:text-5xl font-bold line-h-custom"><span className="text-secondary">for all your Business!</span></h1>
        </div>
        <div className="p-4">
          <p className="text-primary text-sm">
            Are you tired of travelling for hours to your office within Colombo? Do you work from home most of the time, but need a quieter working space occasionally? Do you need a meeting space for your remote employees who live inside and outside Colombo?
          </p>
        </div>
        <div className="p-4">
          <p className="text-primary text-sm">
            The Coworking Cube story began in 2023 when our founders wanted to provide easily accessible core working spaces for startups, freelancers and Tech Nomads.
          </p>
        </div>
        <div className="p-4">
          <h6 className="text-primary text-sm font-semibold">
            Our Vision
          </h6>
        </div>
        <div className="p-4">
          <p className="text-primary text-sm">Creating an active coworking space that becomes an incubator for technology in Sri Lanka</p>
        </div>

        <div className="p-4">
          <h6 className="text-primary text-sm font-semibold">
            Our Mission
          </h6>
        </div>
        <div className="p-4">
          <p className="text-primary text-sm">To create accessible and affordable hi-tech workspaces to professionals in Sri Lanka.</p>
        </div>

        <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-4 gap-4 mt-10 mb-10 p-4">
          {
            features.map((feature, index) => (<FeatureCard title={feature.title} variant={feature.variant} key={index} />))
          }
        </div>

        <div className="mb-10 p-4">
          <h1 className="text-3xl lg:text-5xl font-bold line-h-custom md:text-5xl"><span className="text-secondary">Features</span>& Benefits of Coworking with Us:
          </h1>
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-sm:gap-0">

            <div className="col-span-2">
              <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
                {
                  benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-primary text-md">
                      {benefit.icon}
                      {benefit.title}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="banner bg-primary">
              <div className="p-4">
                <h1 className="text-5xl max-sm:text-4xl font-bold line-h-custom md:text-5xl text-white mt-20">State- of-the- art facility
                </h1>
              </div>

            </div>

          </div>
          <div className="bg-primary min-h-20 text-white">
            <div className="p-4">
              <p className="font-semibold text-lg mb-6">
                Why Coworking Cube?
              </p>

              <h2 className="text-2xl mb-5">
                We revolutionize your workspace!
              </h2>
              <p>
                Coworking Cube was built with technology, focus and comfort in mind. Just 5 minutes from the Makumbura Multimodal Center with multiple forms of transport, and ample parking within the Coworking Cube premises itself. Secure meeting rooms for small to medium-sized teams. Standard long-term packages and custom office solutions.
              </p>
              <p className="mb-2">
                With quick access to the nearby town and delicious eateries, our coworking spaces are a comfortable place you can focus at and get your brain juices flowing.
              </p>
            </div>

          </div>
        </div>

      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="bg-gray-100 p-4 rounded">Content Block 1</div>
        <div className="bg-gray-100 p-4 rounded">Content Block 2</div>
        <div className="bg-gray-100 p-4 rounded">Content Block 3</div>
      </div>
      <Contact />
    </>

  );
}
