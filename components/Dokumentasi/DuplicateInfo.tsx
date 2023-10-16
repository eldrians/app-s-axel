import React from "react";
import { Button } from "..";
import Image from "next/image";

const DuplicateInfo = () => {
  return (
    <section
      className="w-full bg-slate-100 pt-10 md:pt-6 lg:pt-16 pb-10  flex flex-col gap-16"
      id="d-duplicate"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end pr-0 lg:pr-8 pb-8 lg:pb-0">
          <Image
            src="/d-duplicate.gif"
            alt="Neo Data - Collection"
            width={500}
            height={200}
            className="rounded-xl shadow-xl border w-4/6 md:w-5/6 lg:w-3/5"
          />
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-2 px-10 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h3 className="text-3xl lg:text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">2 </span>Duplikasi
            Dokumen
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm lg:text-lg w-full md:w-5/6 lg:w-4/6 2xl:text-xl font-medium text-justify">
            Tekan button "duplikasi dokumen"
            <span className="font-bold text-darkApp"> {">"} </span>duplikasi
            dokumen beserta Google Apps Scriptnya{" "}
            <span className="font-bold text-darkApp">{">"}</span> simpan dalam
            GDrive mu
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end pr-0 lg:pr-8 pb-8 lg:pb-0">
          <Image
            src="/d-form.gif"
            alt="Neo Data - Collection"
            width={500}
            height={200}
            className="rounded-xl shadow-xl border w-4/6 md:w-5/6 lg:w-3/5"
          />
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-2 px-10 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h3 className="text-3xl lg:text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">3 </span>Akses Public
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm lg:text-lg w-full md:w-5/6 lg:w-4/6 2xl:text-xl font-medium text-justify">
            Rubah hak akses menjadi{" "}
            <span className="font-bold text-darkApp">Public</span> dan{" "}
            <span className="font-bold text-darkApp">Editor</span> lalu{" "}
            <span className="font-bold text-darkApp border-b-2 border-greenApp">
              Simpan dan Salin Link URL
            </span>{" "}
            dimanapun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DuplicateInfo;
