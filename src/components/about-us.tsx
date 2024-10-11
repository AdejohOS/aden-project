import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="bg-slate-300/20 py-24">
      <div className="container mx-auto grid grid-cols-2 items-center justify-center">
        <div className="relative rounded-full overflow-hidden">
          <Image
            src="/images/cordinator.jpg"
            alt="aden-cordinator"
            width={200}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
        <div className="  rounded-md">
          <div className="p-3 w-full h-full flex flex-col items-left justify-center">
            <h2 className="text-3xl font-bold mt-2 text-green-700 inline pb-1 ">
              Welcome to Aden!!
            </h2>

            <p className="my-2 text-slate-500  ">
              {" "}
              I welcome you to the homepage of the African Digital Education
              Network (ADEN). the program helps graduate students, faculty
              members, and industry professionals in engineering and allied STEM
              fields improve their teaching and course design skills.{" "}
            </p>

            <div className="flex flex-col mt-2">
              <p>Prof Raymond B. Bako</p>
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
