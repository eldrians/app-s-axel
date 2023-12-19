"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
const DataKompetisi = () => {
  // const [dataKompetisi, setDataKompetisi] = useState({
  // });

  const [dataKompetisi, setDataKompetisi] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",
      capaian: "",
      kategori: "",
      statusTim: "",
      namaKompetisi: "",
      tingkat: "",
      tahun: 0,
      url: "",
      timestamp: "",
    },
  ]);

  useEffect(() => {
    const fetchDataKompetisi = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=k"
        );
        const data = await res.json();
        console.log(data.data);

        setDataKompetisi(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKompetisi();
  }, []);

  const rowsKompetisi = dataKompetisi.map(
    ({
      idPrestasi,
      nama,
      demandKey,
      capaian,
      kategori,
      namaKompetisi,
      tingkat,
    }) => ({
      idPrestasi,
      nama,
      demandKey,
      capaian,
      kategori,
      namaKompetisi,
      tingkat,
    })
  );

  const newColumns = [
    {
      key: "idPrestasi",
      label: "ID Prestasi",
    },
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "demandKey",
      label: "Demand Key",
    },
    {
      key: "capaian",
      label: "Capaian",
    },
    {
      key: "kategori",
      label: "Kategori",
    },
    {
      key: "namaKompetisi",
      label: "Nama Kompetisi",
    },
    {
      key: "tingkat",
      label: "Tingkat",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-start px-12 py-8 bg-slate-100">
      <div className="px-4">
        <h1 className="font-bold text-3xl text-darkApp mb-6">
          TABEL KOMPETISI
        </h1>
      </div>
      <div className="w-full h-[450px] overflow-scroll bg-white">
        <TableComponent columns={newColumns} rows={rowsKompetisi} />
      </div>
    </div>
  );
};

export default DataKompetisi;
