"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
import Cookies from "js-cookie";
import { TableAksiKemanusiaanHeaders } from "@/utils/tablePrestasiHeaders";
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
        let value: any = localStorage.getItem("data-aksi-kemanusiaan");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataAksiKemanusiaan(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=ak"
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
            setDataAksiKemanusiaan(filteredData);
            localStorage.setItem(
              "data-aksi-kemanusiaan",
              JSON.stringify(filteredData)
            );
          } else {
            setDataAksiKemanusiaan(data.data);
            localStorage.setItem(
              "data-aksi-kemanusiaan",
              JSON.stringify(data.data)
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAksiKemanusiaan();
  }, []);

  // rubah

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
          columns={TableAksiKemanusiaanHeaders}
          rows={dataAksiKemanusiaan}
          jenisPrestasi="aksiKemanusiaan"
        />
      </div>
    </div>
  );
};

// rubah
export default DataAksiKemanusiaan;
