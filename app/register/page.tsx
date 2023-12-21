import { Register } from "@/components";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-2/6 ">
      <div className="flex flex-col w-full items-center gap-8">
        <Image
          src="/neo-white-text.png"
          alt="Neo Data - Collection"
          width={75}
          height={75}
          className="w-16 md:w-20 lg:w-24"
          priority
        />
        <Register />
      </div>
    </div>
  );
};

export default page;
