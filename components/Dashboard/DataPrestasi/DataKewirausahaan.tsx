"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
// rubah nama
const DataKewirausahaan = () => {
  // rubah isi dan nama
  const [dataKewirausahaan, setDataKewirausahaan] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",

      namaUsaha: "",
      bidang: "",
      statusHukum: "",
      jumlahKaryawan: 0,
      tingkat: "",

      url: "",
      timestamp: "",
    },
  ]);

  useEffect(() => {
    // rubah nama
    const fetchDataKewirausahaan = async () => {
      try {
        //rubah
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=u"
        );
        const data = await res.json();
        setDataKewirausahaan(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKewirausahaan();
  }, []);

  // rubah
  const newColumns = [
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "namaUsaha",
      label: "Nama Usaha",
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
          TABEL KEWIRAUSAHAAN
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={newColumns}
          rows={dataKewirausahaan}
          jenisPrestasi="kewirausahaan"
        />
      </div>
    </div>
  );
};

// rubah
export default DataKewirausahaan;
