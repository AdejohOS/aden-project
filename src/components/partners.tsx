import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Partners = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-green-700 border-b p-2 border-green-500">
            Partners{" "}
          </span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://acenpee.abu.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative rounded-md overflow-hidden w-full h-full  shadow-md border-l-2 p-4">
                    <div className="relative aspect-square rounded-md">
                      <Image
                        src="/images/partners/acenpee.jpg"
                        alt="image"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p className="text-sm">
                  Africa Centre of Excellence on New Pedagogies in Engineering
                  Education (ACENPEE), Ahmadu Bello University (ABU), Zaria,
                  Nigeria.
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://acetel.nou.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/partners/acetel.jpg"
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p className="text-sm">
                  Africa Centre of Excellence on Technology Enhanced Learning
                  (ACETEL), National Open University of Nigeria (NOUN), Abuja
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://lasu-aceitse.org.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/partners/aceit.png"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p className="text-sm">
                  Africa Centre of Excellence for Innovative and Transformative
                  STEM Education (ACEITSE), Lagos State University (LASU),
                  Lagos, Nigeria.
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://www.cea-ms4ssa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/partners/ceai.jpg"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p className="text-sm">
                  Africa Centre of Excellence for Teaching/Learning Mathematics
                  and Science for Sub-Saharan Africa (CEA MS4SSA), Abdou
                  Moumouni University of Niamey, Republic of Niger.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Partners;
