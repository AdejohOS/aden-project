"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import Autoplay from "embla-carousel-autoplay";

const objectives = [
  {
    index: 1,
    desc: "Strengthen collaboration amongst the STEM Education ACE Impact centers and other organizations by working together as ADEN.",
  },
  {
    index: 2,
    desc: "Train faculty in the design and production of quality online digital resources, and to integrate digital technologies in courses.",
  },
  {
    index: 3,
    desc: "Produce quality educational resources, adapted to local context, for distribution amongst the centers and other institutions.",
  },
  {
    index: 4,
    desc: "Organize seminars for students on the use of digital resources",
  },
  {
    index: 5,
    desc: "Facilitate joint research activities within the ADEN, including faculty and student exchanges",
  },
  {
    index: 6,
    desc: "Organize meetings to share and disseminate knowledge and publish the outcome of such academic efforts.",
  },
  {
    index: 7,
    desc: "Set up a common educational platform to store and distribute Open Educational Resources (OER) and policy.",
  },
];

const ObjCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1 max-h-[350px]">
        {objectives.map((objective) => (
          <CarouselItem key={objective.index} className="pt-1 md:basis-1/5">
            <div className="p-1">
              <Card className="shadow-none border-none border-b-gray-50">
                <CardContent className="flex flex-col items-center  p-2 bg-background">
                  <h2 className="h-4 w-4 text-slate-500 mb-1 font-bold">
                    {" "}
                    {objective.index}
                  </h2>
                  <p className="text-slate-500 text-left w-full h-full">
                    {objective.desc}
                  </p>
                </CardContent>
                <Separator />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ObjCarousel;
