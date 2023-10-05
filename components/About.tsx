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
    <div className="h-full p-8 px-6 md:px-6 2xl:px-20 flex flex-col justify-center items-center shadow-xl rounded-lg bg-whiteApp cursor-default">
      <div className="mb-4">
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
      className="px-10 md:px-20 lg:px-28 2xl:px-72 py-4 lg:py-28 bg-gradient-to-br from-greenApp to-darkGreenApp"
    >
      <center className="py-12 lg:py-0 xl:py-0">
        <div className="mb-6 md:mb-10 xl:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-whiteApp uppercase">
            Cara Pakai ?
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 items-center justify-center gap-4 ">
          <AboutItem
            svg={"/input-email.svg"}
            no={1}
            title="Masukan Email"
            desc="Masukkan alamat email Anda ke dalam kolom input di atas untuk menerima template formulir."
          />
          <AboutItem
            svg={"/duplicate-file.svg"}
            no={2}
            title="Salin Template"
            desc="Salin template yang diterima melalui email, lalu simpan di Google Drive Anda."
          />
          <AboutItem
            svg={"/fill-data.svg"}
            no={3}
            title="Isi Data Prestasimu"
            desc="Hore proses selesai, isi seluruh prestasi/keahlian mu disana"
          />
        </div>
      </center>
    </section>
  );
};

export default About;
