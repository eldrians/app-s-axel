"use client";
import React, { useEffect, useState } from "react";
import { TableComponent } from "@/components";
import Cookies from "js-cookie";
import { TableOrganisasiHeaders } from "@/utils/tablePrestasiHeaders";
// rubah nama
const DataOrganisasi = () => {
  // rubah isi dan nama
  const [dataOrganisasi, setDataOrganisasi] = useState([
    {
      score: 0,
      nama: "",
      nim: "",
      email: "",
      urlSheet: "",
      idPrestasi: "",
      demandKey: "",

      jabatan: "",
      bidang: "",
      namaOrganisasi: "",
      tingkat: "",
      tahun: "",

      url: "",
      timestamp: "",
    },
  ]);

  useEffect(() => {
    // rubah nama
    const fetchDataOrganisasi = async () => {
      try {
        let value: any = localStorage.getItem("data-organisasi");
        if (value) {
          const parsedData = JSON.parse(value);
          setDataOrganisasi(parsedData);
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=o"
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
            setDataOrganisasi(filteredData);
            localStorage.setItem(
              "data-organisasi",
              JSON.stringify(filteredData)
            );
          } else {
            setDataOrganisasi(data.data);
            localStorage.setItem("data-organisasi", JSON.stringify(data.data));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataOrganisasi();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-start px-12 pb-8 pt-2 bg-slate-100">
      <div className="px-4">
        <h1 className="font-bold text-3xl text-darkApp mb-6">
          {/* rubah */}
          TABEL ORGANISASI
        </h1>
      </div>
      <div className="w-full h-5/6 overflow-scroll">
        {/* rubah */}
        <TableComponent
          columns={TableOrganisasiHeaders}
          rows={dataOrganisasi}
          jenisPrestasi="organisasi"
        />
      </div>
    </div>
  );
};

// rubah
export default DataOrganisasi;
