"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
// rubah nama
const DataKaryaIlmiah = () => {
  // rubah isi dan nama
  const [dataKaryaIlmiah, setDataKaryaIlmiah] = useState([
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
    const fetchDataKaryaIlmiah = async () => {
      try {
        let value: any = localStorage.getItem("data-karya-ilmiah");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataKaryaIlmiah(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=ki"
          );
          const data = await res.json();
          setDataKaryaIlmiah(data.data);
          localStorage.setItem("data-karya-ilmiah", JSON.stringify(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKaryaIlmiah();
  }, []);

  // rubah
  const newColumns = [
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "judul",
      label: "Judul",
    },
    {
      key: "namaPenerbit",
      label: "Penerbit",
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
          TABEL KARYA ILMIAH
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={newColumns}
          rows={dataKaryaIlmiah}
          jenisPrestasi="karyaIlmiah"
        />
      </div>
    </div>
  );
};

// rubah
export default DataKaryaIlmiah;
