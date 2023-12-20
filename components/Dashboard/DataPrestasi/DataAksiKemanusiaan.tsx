"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
// rubah nama
const DataAksiKemanusiaan = () => {
  // rubah isi dan nama
  const [dataAksiKemanusiaan, setDataAksiKemanusiaan] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",

      peran: "",
      namaKegiatan: "",
      tingkat: "",
      tahun: 0,

      url: "",
      timestamp: "",
    },
  ]);

  useEffect(() => {
    // rubah nama
    const fetchDataAksiKemanusiaan = async () => {
      try {
        //rubah
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=ak"
        );
        const data = await res.json();
        setDataAksiKemanusiaan(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAksiKemanusiaan();
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
      key: "tingkat",
      label: "Tingkat",
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
          TABEL AKSI KEMANUSIAAN
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={newColumns}
          rows={dataAksiKemanusiaan}
          jenisPrestasi="aksiKemanusiaan"
        />
      </div>
    </div>
  );
};

// rubah
export default DataAksiKemanusiaan;
