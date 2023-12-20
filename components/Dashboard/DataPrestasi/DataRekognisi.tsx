"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
// rubah nama
const DataRekognisi = () => {
  // rubah isi dan nama
  const [dataRekognisi, setDataRekognisi] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",

      peran: "",
      materi: "",
      namaKegiatan: "",
      jumlahPeserta: 0,
      tingkat: "",
      tahun: 0,
      url: "",
      timestamp: "",
    },
  ]);

  const [axel, setAxel] = useState(null);

  useEffect(() => {
    const fetchDataRekognisi = async () => {
      try {
        let value: any = localStorage.getItem("data-rekognisi");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataRekognisi(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=r"
          );
          const data = await res.json();
          setDataRekognisi(data.data);
          localStorage.setItem("data-rekognisi", JSON.stringify(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataRekognisi();
  }, []);

  // rubah
  const newColumns = [
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "peran",
      label: "Peran",
    },
    {
      key: "namaKegiatan",
      label: "Nama Kegiatan",
    },
    {
      key: "action",
      label: "Action",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-start px-12 pb-8 pt-2 bg-slate-100">
      <div className="px-4">
        <h1 className="font-bold text-3xl text-darkApp mb-6">
          {/* rubah */}
          TABEL REKOGNISI
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={newColumns}
          rows={dataRekognisi}
          jenisPrestasi="rekognisi"
        />
      </div>
    </div>
  );
};

// rubah
export default DataRekognisi;
