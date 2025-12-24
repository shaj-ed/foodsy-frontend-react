import { Copyright } from "lucide-react";
import Logo from "../common/ui/Logo";
import SectionContainer from "../common/section/SectionContainer";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 py-10">
      <SectionContainer>
        <div className="flex gap-2 flex-col items-start  md:flex-row md:justify-between md:items-center pb-10">
          <Logo size="text-4xl" />
          <p className="font-semibold text-2xl">Hungry? Order in a Tap!</p>
          <Button
            size="lg"
            className="bg-red-400 cursor-pointer hover:bg-red-500"
          >
            ORDER
          </Button>
        </div>
        <Separator className="opacity-30" />

        <div className="mt-10">
          <p className="flex items-center justify-center gap-2 text-sm">
            <Copyright size="16px" />
            YumCart - All rights reserved
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
