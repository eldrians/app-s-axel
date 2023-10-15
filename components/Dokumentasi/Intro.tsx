import React from "react";
import { Button } from "..";
import Image from "next/image";

const Intro = () => {
  return (
    <section
      className="w-full bg-slate-100 pt-20 flex flex-row justify-center items-center pb-72"
      id="d-email"
    >
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-full  flex justify-center">
          <Image
            src="/cp-web.gif"
            alt="Neo Data - Collection"
            width={400}
            height={200}
            className="rounded-xl shadow-xl border"
          />
        </div>
        <div className=" w-full flex flex-col gap-2 justify-center items-center pt-12">
          <h3 className="text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">Step 1. </span>Via
            Website
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm text-center lg:text-lg w-4/6 2xl:text-xl font-medium">
            Isi Data Prestasimu via website, masukan data pribadi lalu data
            prestasi dari berbagai jenis prestasi yang ada
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-full  flex justify-center">
          <Image
            src="/cp-sheet.svg"
            alt="Neo Data - Collection"
            width={400}
            height={200}
            className="rounded-xl shadow-xl border"
          />
        </div>
        <div className=" w-full flex flex-col gap-2 justify-center items-center pt-12">
          <h3 className="text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">Step 2. </span>Lihat
            GSheet Mu
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm text-center lg:text-lg w-4/6 2xl:text-xl font-medium">
            Secara otomatis, data mu masuk ke GSheet pribadimu yang dapat kamu
            gunakan sebagai arsip pribadi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
