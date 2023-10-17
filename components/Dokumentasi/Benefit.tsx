import React from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <section
      id="d-benefit"
      className="px-10 md:px-20 lg:px-28 2xl:px-72 py-4 lg:py-16 bg-gradient-to-br from-greenApp to-darkGreenApp"
    >
      <center className="py-12 lg:py-0 xl:py-0">
        <div className="mb-4 md:mb-10 xl:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-whiteApp uppercase">
            Cara Pakai?
          </h2>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="w-full p-4 lg:p-8 2xl:p-12 bg-whiteApp rounded-xl mx-0 lg:mx-32 flex flex-col md:flex-row justify-center items-center">
            <Image
              src="/d-carapakai.gif"
              alt="Neo Data - Collection"
              width={500}
              height={200}
              className="rounded-xl shadow-xl border w-full md:w-1/2"
            />
            <div className="w-full md:w-1/2 text-center md:text-left ml-0 md:ml-6 text-sm md:text-base lg:text-xl pt-6 md:pt-0">
              <p className="text-darkApp/90 font-medium border-y-2 border-greenApp py-4 2xl:py-8">
                Masukan data prestasimu pada form diatas, data akan terkirim ke
                perguruan tinggi sekaligus ke file gsheet-mu, sistem akan
                membantumu untuk mengorganisir data prestasimu dengan rapih dan
                terstruktur 😉
              </p>
            </div>
          </div>
        </div>
      </center>
    </section>
  );
};

export default Benefit;
