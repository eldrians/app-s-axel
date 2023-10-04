import React from "react";
import Image from "next/image";

const AboutItem = ({
  svg,
  no,
  title,
  desc,
}: {
  svg?: any;
  no?: number;
  title?: string;
  desc?: string;
}) => {
  return (
    <div className="p-8 px-8 flex flex-col justify-center items-center shadow-xl rounded-lg bg-whiteApp">
      <div className="mb-4 animate-wiggle">
        <Image src={svg} alt="Neo Data - Collection" width={150} height={150} />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="-ml-2 mr-2 text-xs  text-whiteApp font-semibold">
          <div className="w-[20px] h-[20px] bg-darkGreenApp rounded-full flex items-center justify-center">
            {no}
          </div>
        </div>
        <h4 className="text-md md:text-lg lg:text-xl text-darkApp font-bold">
          {title}
        </h4>
      </div>
      <p className="text-xs md:text-sm lg:text-md mt-1 text-darkApp/60">
        {desc}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="px-10 md:px-20 lg:px-28 py-4 lg:py-28 bg-gradient-to-br from-greenApp to-darkGreenApp"
    >
      <center>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-whiteApp uppercase">
            about
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center justify-center gap-4">
          <AboutItem
            svg={"/input-email.svg"}
            no={1}
            title="Input Email"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptatibus?"
          />
          <AboutItem
            svg={"/duplicate-file.svg"}
            no={2}
            title="Duplicate Template"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptatibus?"
          />
          <AboutItem
            svg={"/fill-data.svg"}
            no={3}
            title="Start Inputing"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptatibus?"
          />
        </div>
      </center>
    </section>
  );
};

export default About;
