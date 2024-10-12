import React from "react";

import Image from "next/image";
import { Facebook, Instagram, Mail, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";
import ContactHero from "./_components/contact-hero";
import { Separator } from "@/components/ui/separator";
import ContactForm from "./_components/contact-form";

const Page = () => {
  return (
    <section>
      <ContactHero />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pb-20">
          <div>
            <h2 className="text-xl font-semibold text-green-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-slate-500">
              You can always reachout to us.
            </p>

            <div className="space-y-2">
              <address className="text-slate-500 text-sm md:text-base">
                ACENPEE BUILDING, Adj. Drama Village,
                <br /> Ahmadu Bello University, Zaria.
              </address>

              <p className="truncate text-slate-500 text-sm md:text-base flex items-center hover:text-sky-300">
                <PhoneCall className="h-4 w-4 mr-2" />
                <a href="tel:123-456-7890">070-634-94394</a>
              </p>

              <p className="truncate text-sm md:text-base text-slate-500 flex items-center hover:text-sky-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto: info@aden.org.ng">info@aden.org.ng</a>
              </p>

              <p className="flex items-center gap-2 text-slate-500">
                <Link
                  href="https://www.twitter.com/b_skilz"
                  target="_blank"
                  className="hover:text-sky-300"
                >
                  <Twitter className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.twitter.com/b_skilz"
                  target="_blank"
                  className="hover:text-sky-300"
                >
                  <Facebook className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.twitter.com/b_skilz"
                  target="_blank"
                  className="hover:text-sky-300"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>

          <div className="h-80  max-h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15657.967653905489!2d7.6545913!3d11.1511678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2842b20cedfad%3A0xce18622ae8135eb0!2sAhmadu%20Bello%20University!5e0!3m2!1sen!2sng!4v1704450159721!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <Separator />

        <div className="pt-20 pb-24 grid items-center grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-green-500">
              Send a message
            </h2>
            <p className="mb-4 text-slate-500">
              You can always reachout to us.
            </p>

            <div className="relative aspect-video w-full">
              <Image
                src="/images/contact/contactform.svg"
                alt="contact"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
