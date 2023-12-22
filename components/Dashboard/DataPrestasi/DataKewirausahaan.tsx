"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
import Cookies from "js-cookie";
import { TableKewirausahaanHeaders } from "@/utils/tablePrestasiHeaders";
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
        let value: any = localStorage.getItem("data-kewirausahaan");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataKewirausahaan(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=u"
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
            setDataKewirausahaan(filteredData);
            localStorage.setItem(
              "data-kewirausahaan",
              JSON.stringify(filteredData)
            );
          } else {
            setDataKewirausahaan(data.data);
            localStorage.setItem(
              "data-kewirausahaan",
              JSON.stringify(data.data)
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKewirausahaan();
  }, []);

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
          columns={TableKewirausahaanHeaders}
          rows={dataKewirausahaan}
          jenisPrestasi="kewirausahaan"
        />
      </div>
    </div>
  );
};

// rubah
export default DataKewirausahaan;
