import React from "react";
import AboutHero from "./_components/about-hero";
import Image from "next/image";
import { CheckCircle, KanbanSquare } from "lucide-react";
import ObjCarousel from "./_components/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mandates = [
  {
    id: 1,
    title: "Promoting online learning platforms.",
    description:
      "ADEN will work on promoting online learning platforms that are accessible to students in different parts of Africa. The platforms should be user-friendly and accessible on low-bandwidth networks.",
  },
  {
    id: 2,
    title: "Provide digital devices and infrastructure ",
    description:
      "ADEN will aim to collaborate with governments, NGOs, and private organizations to provide digital devices and infrastructure to institutions and students in underserved areas.",
  },
  {
    id: 3,
    title: "Develop digital educational resources.",
    description:
      "ADEN would work on developing and promoting digital educational resources, such as e-books, videos, and interactive learning tools that can be used by students and teachers across Africa.",
  },
  {
    id: 4,
    title: "Train teachers and educators.",
    description:
      "ADEN could conduct training programs for lecturers and educators on how to use digital tools and resources in the classroom effectively.",
  },
  {
    id: 5,
    title: "Conduct research on digital education.",
    description:
      "ADEN will conduct research on the effectiveness of digital education in Africa and share the findings with policymakers, educators, and other stakeholders.",
  },
  {
    id: 6,
    title: "Foster collaboration and partnerships ",
    description:
      "ADEN will work on building collaborations and partnerships with governments, NGOs, and private organizations to improve digital education in Africa.",
  },
  {
    id: 7,
    title: "Support innovation in digital education.",
    description:
      "ADEN will support and promote innovative solutions in digital education, such as virtual laboratories, gamification, adaptive learning, and artificial intelligence.",
  },
  {
    id: 8,
    title: "Strengthen feedback mechanisms.",
    description:
      "ADEN will work to establish and strengthen feedback mechanisms to gather feedback from stakeholders (students and lecturers) that can help to continuously improve the quality and relevance of digital educational resources.",
  },
  {
    id: 9,
    title: "Promote digital literacy.",
    description:
      " ADEN would work on promoting digital literacy among students, lecturers, and parents in Africa to ensure that they are able to use digital tools and resources effectively.",
  },
];

const page = () => {
  return (
    <section>
      <AboutHero />
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-5">
          <div className="order-2 md:order-1 relative aspect-square bg-green-100/20">
            <Image
              src="/images/about/light.svg"
              alt="objectives"
              fill
              className="object-fit px-6"
            />

            <p className="absolute bottom-5 left-6  text-slate-400 text-xs ">
              Acquiring the relevant skill for the right objectives
            </p>

            <div className="absolute  left-5 top-[-20px] bg-slate-50 p-2 rounded-full shadow-md">
              <KanbanSquare className="h-8 w-8 text-green-500/40" />
            </div>
          </div>
          <div className="w-full h-full order-1 md:order-2">
            <div className=" flex flex-col">
              <h1 className=" font-bold text-green-600 text-xl text-left">
                Objectvies
              </h1>
              <p className="mt-2 text-slate-500 text-sm">
                Our objectives are:{" "}
              </p>
            </div>

            <div className="w-full h-full flex items-center justify-center overflow-auto">
              <ObjCarousel />
            </div>
          </div>
        </div>

        <div className=" bg-slate-300/20 pt-24 pb-24">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="w-full h-full">
                <div className="mb-5">
                  <h1 className=" font-bold text-green-600 text-xl">
                    Core Mandate
                  </h1>
                  <p className="mt-2 text-slate-500 text-sm">
                    The African Digital Education Network’s (ADEN) core mandates
                    include raising awareness about the benefits of digital
                    education across Africa and sharing resources with African
                    institutions of higher education.{" "}
                  </p>
                </div>
                <Accordion type="single" collapsible className="text-slate-500">
                  {mandates.map((mandate) => (
                    <div key={mandate.id}>
                      <AccordionItem value={mandate.title}>
                        <AccordionTrigger className="font-md ">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {mandate.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2">
                          {mandate.description}
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  ))}
                </Accordion>
              </div>

              <div className="relative aspect-square bg-green-100/20 h-full w-full">
                <Image
                  src="/images/about/undraw.svg"
                  alt="mandate"
                  fill
                  className="object-fit px-6"
                />

                <p className="absolute bottom-5 left-6  text-slate-400 text-xs ">
                  Acquiring the relevant skill for the right objectives
                </p>

                <div className="absolute  right-5 top-[-20px] bg-slate-50 p-2 rounded-full shadow-md">
                  <KanbanSquare className="h-8 w-8 text-green-500/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
