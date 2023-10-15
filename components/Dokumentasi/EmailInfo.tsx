import React from "react";
import { Button } from "..";
import Image from "next/image";

const EmailInfo = () => {
  return (
    <section className="w-full bg-slate-100 pt-16 pb-10" id="d-email">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-1/2  flex justify-end pr-12">
          <Image
            src="/d-email.png"
            alt="Neo Data - Collection"
            width={400}
            height={200}
            className="rounded-xl shadow-xl border"
          />
        </div>
        <div className=" w-1/2 flex flex-col gap-2">
          <h3 className="text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">1 </span>Dapatkan
            Template
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm lg:text-lg w-4/6 2xl:text-xl font-medium">
            Masukan email-mu pada input awal website, lalu dapatkan email berisi
            template pendataan prestasi mahasiswa seperti disamping
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailInfo;
