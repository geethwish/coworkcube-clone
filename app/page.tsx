import Banner from "@/components/shared/Banner";
import Contact from "@/components/shared/ContactForm";
import FeatureCard from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { benefits, features, package2, workSpace } from "../constant/support";
import PackageCard from "@/components/shared/PackageCard";
import PriceCard from "@/components/shared/PriceCard";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Coworking Cube was built with technology, focus, and comfort in mind. Just 5 minutes from the Makumbura Multimodal Center with multiple forms of transport, and ample parking within the Coworking Cube premises itself." />
        <meta name="keywords" content="coworking, office space, meeting rooms, coworking cube, technology, comfort" />
        <meta name="author" content="Coworking Cube" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="State-of-the-art facility | Coworking Cube" />
        <meta property="og:description" content="Coworking Cube was built with technology, focus, and comfort in mind. Just 5 minutes from the Makumbura Multimodal Center with multiple forms of transport, and ample parking within the Coworking Cube premises itself." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.coworkingcube.com" />
        <meta property="og:image" content="https://www.coworkingcube.com/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="home">
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
      </section>

      <section id="aboutus">
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
      </section>


      <section id="plans" className="container">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold line-h-custom md:text-5xl">Our<span className="text-secondary"> Workspace</span>
          </h1>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-sm:gap-4">
            {
              workSpace.map((pkg, index) => (
                <PackageCard data={pkg} key={index} />
              ))
            }


          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-3xl lg:text-5xl font-bold line-h-custom md:text-5xl">Our<span className="text-secondary"> Packages</span>
          </h1>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-sm:gap-4 mt-5 mb-10">
            {
              package2.map((pkg, index) => (
                <PriceCard key={index} data={pkg} />
              ))
            }


          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f0f5fa] p-4">
        <div className="container">

          <h1 className="text-3xl lg:text-5xl font-bold line-h-custom md:text-5xl mt-5 mb-5"><span className="text-secondary">Frequently </span>
            Asked Questions (FAQ)
          </h1>

          <FAQ />
        </div>

      </section>
      <section id="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6470191651874!2d79.8436359!3d6.932724400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25925ab279e07%3A0x7f3b9b9aabf936fe!2sWTC%20West%20Tower%2C%20Bank%20of%20Ceylon%20Mawatha%2C%20Colombo!5e0!3m2!1sen!2slk!4v1709106330316!5m2!1sen!2slk"
          className="w-full h-full min-h-[600px]" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <section id="contactus" className="bg-[#10375c] h-full w-full border-b-2 border-gray-100">
        <div className="container">
          <div className="flex justify-between items-center p-4 max-sm:flex-col">

            <div className="mt-5">
              <p className="text-white text-sm font-semibold">
                Became a member
              </p>
              <h1 className="text-white text-4xl mt-5 font-semibold" style={{ lineHeight: '44px' }}>
                Ready to try different work experience now?
              </h1>
              <p className="text-white text-sm mt-5">
                Get the best working experience that you never feel before
              </p>
              <Button className="uppercase bg-secondary rounded-none mt-10 text-md">Subscribe now</Button>
            </div>
            <div className="mb-5">
              <Image src={"/images/man.webp"} width={100} height={100} alt="man image" className="w-full h-full min-h-[505px]" layout="responsive"></Image>
            </div>
          </div>
        </div>

      </section>
    </>

  );
}
