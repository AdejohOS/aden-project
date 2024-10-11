import { Antenna, CircuitBoard, Settings } from "lucide-react";

const Values = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-green-700 border-b p-2 border-green-500">
            Core Values{" "}
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-10 md:gap-4">
          <div className="relative bg-slate-50 rounded-md flex flex-col items-center justify-center  p-4 shadow">
            <div className="absolute top-[-20px] bg-white rounded-full p-2 border">
              <Settings className="h-10 w-10 text-green-300 hover:animate-spin" />
            </div>
            <h2 className=" mt-8 mb-4 font-semibold text-slate-500">
              Bridging Educational Gap
            </h2>
            <p className="text-slate-500 text-center">
              Strengthen collaboration amongst the STEM Education ACE Impact
              centers and other organizations by working together as ADEN.{" "}
            </p>
          </div>

          <div className="relative bg-slate-50 rounded-md flex flex-col items-center justify-center  p-4 shadow">
            <div className="absolute top-[-20px] bg-white rounded-full p-2 border">
              <Antenna className="h-10 w-10 text-green-300 hover:animate-spin" />
            </div>
            <h2 className="mt-8 mb-4 font-semibold text-slate-500">
              Digital Education for Africa
            </h2>
            <p className="text-slate-500 text-center">
              Train faculty in the design and production of quality online
              digital resources, and to integrate digital technologies in
              courses.{" "}
            </p>
          </div>
          <div className="relative bg-slate-50 rounded-md flex flex-col items-center justify-center  p-4 shadow">
            <div className="absolute top-[-20px] bg-white rounded-full p-2 border">
              <CircuitBoard className="h-10 w-10 text-green-300 hover:animate-spin" />
            </div>
            <h2 className="mt-8 mb-4 font-semibold text-slate-500">
              Research & Productivity
            </h2>
            <p className="text-slate-500 text-center">
              Produce quality educational resources, adapted to local context,
              for distribution amongst the centers and other institutions.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
