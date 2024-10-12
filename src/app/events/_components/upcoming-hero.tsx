import React from "react";

import Image from "next/image";

const UpcomingHero = () => {
  return (
    <section className="py-16">
      <div className="relative aspect-video h-[30vh] w-full">
        <Image
          src="/images/gallery/events.png"
          alt="image"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full bg-green-400 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-3xl font-bold mt-20">
          <span className="text-green-700 border-b p-2 border-green-500">
            Events{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default UpcomingHero;
