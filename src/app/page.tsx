import AboutUs from "@/components/about-us";
import Excellence from "@/components/excellence";
import Hero from "@/components/hero";
import News from "@/components/news";
import Partners from "@/components/partners";
import Values from "@/components/values";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Values />
      <Excellence />
      <News />
      <Partners />
    </main>
  );
}
