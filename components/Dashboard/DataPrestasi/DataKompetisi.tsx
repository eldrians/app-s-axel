"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
import Cookies from "js-cookie";
const DataKompetisi = () => {
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
        let value: any = localStorage.getItem("data-kompetisi");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataKompetisi(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=k"
          );
          const data = await res.json();

          let checkRole = Cookies.get("role");
          console.log("checkRole", checkRole);

          if (checkRole == "dosen") {
            let dataMahasiswaDosenAwal: any =
              localStorage.getItem("mahasiswa-dosen");
            let dataMahasiwaDosen = JSON.parse(dataMahasiswaDosenAwal);
            const filteredData = data.data.filter((item: any) =>
              dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
            );
            setDataKompetisi(filteredData);
            localStorage.setItem(
              "data-kompetisi",
              JSON.stringify(filteredData)
            );
          } else {
            setDataKompetisi(data.data);
            localStorage.setItem("data-kompetisi", JSON.stringify(data.data));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKompetisi();
  }, []);

  const newColumns = [
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "capaian",
      label: "Capaian",
    },
    {
      key: "namaKompetisi",
      label: "Nama Kompetisi",
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
          TABEL KOMPETISI
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        <TableComponent
          columns={newColumns}
          rows={dataKompetisi}
          jenisPrestasi="kompetisi"
        />
      </div>
    </div>
  );
};

export default DataKompetisi;
