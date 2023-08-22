import { Hero } from "@/components";
const page = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="w-3/5">
        <Hero />
      </div>
      <div className="w-2/5"></div>
    </div>
  );
};

export default page;
