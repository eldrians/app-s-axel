import React from "react";
import { Button } from "..";
import Image from "next/image";

const FormInfo = () => {
  return (
    <section className="w-full bg-slate-100 pt-16 pb-28" id="d-form">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-1/2  flex justify-end pr-8">
          <Image
            src="/d-form.gif"
            alt="Neo Data - Collection"
            width={500}
            height={200}
            className="rounded-xl shadow-xl border"
          />
        </div>
        <div className=" w-1/2 flex flex-col gap-2">
          <h3 className="text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">3 </span>Edit, Isi,
            Public
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm lg:text-lg w-4/6 2xl:text-xl font-medium">
            Rubah nama dan pindahkan lokasi file sesuai dengan keinginan, Isi
            data pada sheet awal, dan buat akses menjadi Public
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormInfo;
