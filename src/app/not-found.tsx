import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="container px-4 mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-9xl font-bold">404</h2>
          <p className="text-2xl">Sorry, the page not found!</p>
          <p>The link is either broken or has been removed.</p>
          <Link href="/">
            <Button variant="theme">
              <Home className="size-5 mr-2" /> Return Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
