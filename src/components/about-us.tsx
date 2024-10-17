import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="bg-slate-300/20 py-20">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <div className="relative rounded-full overflow-hidden aspect-square h-80 w-80">
          <Image
            src="/images/cordinator.jpg"
            alt="aden-cordinator"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" text-center rounded-md">
          <div className="p-3 w-full h-full flex flex-col items-left justify-center">
            <h2 className="text-4xl font-bold mt-2 text-green-700 inline pb-1 ">
              Welcome to Aden!
            </h2>

            <p className="my-2 text-slate-500 max-w-[700px]  ">
              {" "}
              I welcome you to the homepage of the African Digital Education
              Network (ADEN). the program helps graduate students, faculty
              members, and industry professionals in engineering and allied STEM
              fields improve their teaching and course design skills.{" "}
            </p>

            <div className="flex flex-col mt-2">
              <p className="font-semibold">Prof Raymond B. Bako</p>
              <span className="italic text-xs text-slate-400">
                Co-ordinator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
