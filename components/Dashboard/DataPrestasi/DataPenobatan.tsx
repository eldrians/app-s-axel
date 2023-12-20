"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
// rubah nama
const DataPenobatan = () => {
  // rubah isi dan nama
  const [dataPenobatan, setDataPenobatan] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",

      tandaKehormatan: "",
      tingkat: "",
      lembaga: "",
      url: "",
      timestamp: "",
    },
  ]);

  useEffect(() => {
    // rubah nama
    const fetchDataPenobatan = async () => {
      try {
        let value: any = localStorage.getItem("data-penobatan");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataPenobatan(parsedData);
        } else {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=p"
        );
        const data = await res.json();
        setDataPenobatan(data.data);
        localStorage.setItem("data-penobatan", JSON.stringify(data.data));
      }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataPenobatan();
  }, []);

  // rubah
  const newColumns = [
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "tandaKehormatan",
      label: "Tanda Kehormatan",
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
          TABEL PENOBATAN
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={newColumns}
          rows={dataPenobatan}
          jenisPrestasi="penobatan"
        />
      </div>
    </div>
  );
};

// rubah
export default DataPenobatan;
