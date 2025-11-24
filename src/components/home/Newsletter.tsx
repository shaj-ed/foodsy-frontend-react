import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <section className="my-15 py-20 bg-amber-100">
      <div className="text-center">
        <h2 className="italic font-semibold text-2xl md:text-4xl">
          Cook It or Order It? <br />
          We've Got the Best of Both Worlds!
        </h2>
        <p className="text-lg mt-2">The Ultimate Foodie Newsletter!</p>

        <div className="flex gap-3 mt-6 w-[340px] mx-auto">
          <Input className="py-5 bg-slate-200" placeholder="Enter email.." />
          <Button size="lg" className="cursor-pointer uppercase">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
