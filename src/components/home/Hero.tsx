import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import SectionContainer from "../common/section/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer className="mt-8">
      <div className="my-4 bg-slate-800 rounded px-4 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1/3">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl font-headline text-white">
            Savor Every Bite, Start Your Journey!
          </h1>
          <p className="italic max-w-2xl text-white mt-2 mb-6">
            Discover a world of delicious flavors at your fingertips. Sign in to
            explore mouthwatering dishes, exclusive offers, and a seamless food
            ordering experience.
          </p>

          <Link to="/">
            <Button
              size="lg"
              className="cursor-pointer bg-amber-100 text-black hover:text-white"
            >
              Check Now
              <MoveRight />
            </Button>
          </Link>
        </div>

        <div className="flex-1/2">
          {/* <img src={heroImage} className="" alt="lunch" /> */}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
