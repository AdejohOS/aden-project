import { CalendarCheck } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import UpcomingHero from "./_components/upcoming-hero";
import CategoryFilter from "./_components/category-filter";
import Search from "./_components/search";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

const Events = () => {
  return (
    <section>
      <UpcomingHero />
      <div className="container mx-auto px-4 pt-8 pb-24">
        <div>
          <div className="flex flex-col gap-5 md:flex-row">
            <Search />

            <CategoryFilter />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/3.jpg"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Development
                </Badge>
                <p className="text-xs text-slate-500 flex items-center">
                  <CalendarCheck className="w-4 h-4 mr-1" />
                  Tue, 22 June 2023
                </p>
                <h2 className="text-slate-500 font-semibold">
                  Inaugural meeting of NSC, 2021.
                </h2>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/1.jpg"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Education
                </Badge>
                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                <h2 className="text-slate-500 font-semibold">
                  Scholarship Program 2015
                </h2>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/2.jpg"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Girl Child
                </Badge>
                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                <h2 className="text-slate-500 font-semibold">
                  Scholarship Program 2015
                </h2>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/4.webp"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Girl Child
                </Badge>
                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                <h2 className="text-slate-500 font-semibold">
                  Scholarship Program 2015
                </h2>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/5.jpg"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Girl Child
                </Badge>
                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                <h2 className="text-slate-500 font-semibold">
                  Scholarship Program 2015
                </h2>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/events/2.jpg"
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <Badge variant="outline" className="text-xs text-slate-500">
                  Girl Child
                </Badge>
                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                <h2 className="text-slate-500 font-semibold">
                  Scholarship Program 2015
                </h2>
              </div>
            </div>
          </div>

          <Separator className="my-7" />

          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="outline">Previous</Button>
            </Link>
            <Link href="/">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
