"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
const InfoPilmapres = () => {
  return (
    <div className="w-full h-fit p-12">
      <div className="w-full flex flex-row justify-center px-6">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold text-darkApp mb-4">PILMAPRES</h1>
          <p className="text-darkApp text-sm pr-8">
            Pilmapres atau Pemilihan Mahasiswa Berprestasi merupakan kompetisi
            mahasiswa yang diselenggarakan oleh Pusat Prestasi Nasional yang ada
            di bawah naungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi
            setiap tahunnya. Tujuannya adalah untuk memberikan apresiasi kepada
            mahasiswa terbaik yang siap menjadi agen perubahan untuk membangun
            Indonesia yang lebih baik. Dengan fokus program Sarjana dan Diploma.
          </p>
          <div className="flex flex-row gap-2 mt-4">
            <Link
              href={
                "https://pusatprestasinasional.kemdikbud.go.id/event/seni-bahasa-dan-literasi/dikti/pemilihan-mahasiswa-berprestasi-nasional-2023-dikti"
              }
              target="_blank"
            >
              <Button color="default" size="sm" className="text-darkApp">
                Website Resmi
              </Button>
            </Link>
            <Link
              href={
                "https://pusatprestasinasional.kemdikbud.go.id/uploads/lampiran/Pedoman%20Pilmapres-Sarjana%202023.pdf"
              }
              target="_blank"
            >
              <Button color="primary" size="sm" className="text-white">
                Pedoman
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-2/5 h-auto ">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/logo-pilmapres.png"
              alt="Logo Pilmapres"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPilmapres;
