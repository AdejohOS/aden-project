import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="h-screen pt-24 bg-gradient-to-l from-sky-300/20 ...">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="space-y-3">
            <h1 className="text-center text-4xl md:text-left md:text-5xl font-bold mb-4 text-slate-700">
              <span className="text-green-700"> Africa&#39;s</span> Growth is
              our{" "}
              <span className="border-b border-green-200">responsibility!</span>
            </h1>
            <p className="text-center md:text-left mb-4 text-slate-500">
              Digital education has the potential to overcome some of the
              traditional barriers to education in Africa, such as the lack of
              physical infrastructure and the shortage of qualified teachers.
            </p>
            <div className="text-center md:text-left">
              <Link href="about">
                <Button
                  variant="secondary"
                  className="text-slate-500 text-center"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/hero.png"
              alt=""
              width={700}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
