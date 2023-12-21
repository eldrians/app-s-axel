"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  DashboardDosen,
  DashboardUPI,
  LineChart,
  PieChart,
} from "@/components";
import Cookies from "js-cookie";
const Dashboard = () => {
  const [role, setRole] = useState("");
  const [jumlahMahasiswa, setJumlahMahasiswa] = useState(0);
  const [jumlahPrestasi, setJumlahPrestasi] = useState(0);
  const [dataDashboard, setDataDashboard] = useState({
    mahasiswa: 0,
    prestasi: 0,
    kompetisi: 0,
    karyaIlmiah: 0,
    rekognisi: 0,
    penobatan: 0,
    organisasi: 0,
    kewirausahaan: 0,
    aksiKemanusiaan: 0,
    mahasiswa2020: 0,
    mahasiswa2021: 0,
    mahasiswa2022: 0,
    mahasiswa2023: 0,
  });

  const [n_k, setN_k] = useState(0);
  const [n_ki, setN_ki] = useState(0);
  const [n_r, setN_r] = useState(0);
  const [n_p, setN_p] = useState(0);
  const [n_o, setN_o] = useState(0);
  const [n_ak, setN_ak] = useState(0);
  const [n_u, setN_u] = useState(0);
  useEffect(() => {
    const fetchDataDashboard = async () => {
      try {
        let checkRole = Cookies.get("role");
        if (typeof window !== "undefined") {
          const roleUser = Cookies.get("role");
          setRole(roleUser || "Axel");
        }
        if (checkRole == "dosen") {
          let dataMahasiswaDosenAwal: any =
            localStorage.getItem("mahasiswa-dosen");
          let dataMahasiwaDosen = JSON.parse(dataMahasiswaDosenAwal);
          let totalData = dataMahasiwaDosen.length;
          setJumlahMahasiswa(totalData);
          let value_k: any = localStorage.getItem("data-kompetisi");
          let value_ki: any = localStorage.getItem("data-ki");
          let value_r: any = localStorage.getItem("data-r");
          let value_p: any = localStorage.getItem("data-p");
          let value_o: any = localStorage.getItem("data-o");
          let value_ak: any = localStorage.getItem("data-ak");
          let value_u: any = localStorage.getItem("data-u");
          if (
            !value_k &&
            !value_ki &&
            !value_r &&
            !value_p &&
            !value_o &&
            !value_ak &&
            !value_u
          ) {
            getSeluruhDataPrestasiMahasiswaDosen();
          }
          setJumlahPrestasi(getTotalPrestasiMahasiswaDosen());
        } else {
          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzrbq690QFoaWsidjc1S4Wf-tT-qtYtN70ObrT1f6JJwE87KsovLFL7U_5f8AOhxZnT_Q/exec"
          );
          const data = await res.json();
          setDataDashboard(data.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataDashboard();
  }, []);

  const getTotalPrestasiMahasiswaDosen = () => {
    //kompetisi
    let data_k: any = localStorage.getItem("data-kompetisi");
    let n_data_k: any = JSON.parse(data_k).length;
    setN_k(JSON.parse(data_k).length);

    //karya-ilmiah
    let data_ki: any = localStorage.getItem("data-karya-ilmiah");
    let n_data_ki: any = JSON.parse(data_ki).length;
    setN_ki(JSON.parse(data_ki).length);

    //rekognisi
    let data_r: any = localStorage.getItem("data-rekognisi");
    let n_data_r: any = JSON.parse(data_r).length;
    setN_r(JSON.parse(data_r).length);

    //penobatan
    let data_p: any = localStorage.getItem("data-penobatan");
    let n_data_p: any = JSON.parse(data_p).length;
    setN_p(JSON.parse(data_p).length);

    //organisasi
    let data_o: any = localStorage.getItem("data-organisasi");
    let n_data_o: any = JSON.parse(data_o).length;
    setN_o(JSON.parse(data_o).length);

    //aksi-kemanusiaan
    let data_ak: any = localStorage.getItem("data-aksi-kemanusiaan");
    let n_data_ak: any = JSON.parse(data_ak).length;
    setN_ak(JSON.parse(data_ak).length);

    //kewirausahaan
    let data_u: any = localStorage.getItem("data-kewirausahaan");
    let n_data_u: any = JSON.parse(data_u).length;
    setN_u(JSON.parse(data_u).length);

    let total_n =
      n_data_k +
      n_data_ki +
      n_data_r +
      n_data_p +
      n_data_o +
      n_data_ak +
      n_data_u;
    return total_n;
  };
  const getSeluruhDataPrestasiMahasiswaDosen = async () => {
    let dataMahasiswaDosenAwal: any = localStorage.getItem("mahasiswa-dosen");
    let dataMahasiwaDosen = JSON.parse(dataMahasiswaDosenAwal);
    // kompetisi
    const res_kompetisi = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=k"
    );
    const data_kompetisi = await res_kompetisi.json();
    const filteredData_kompetisi = data_kompetisi.data.filter((item: any) =>
      dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-kompetisi",
      JSON.stringify(filteredData_kompetisi)
    );

    // karyaIlmiah
    const res_karyaIlmiah = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=ki"
    );
    const data_karyaIlmiah = await res_karyaIlmiah.json();
    const filteredData_karyaIlmiah = data_karyaIlmiah.data.filter((item: any) =>
      dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-karya-ilmiah",
      JSON.stringify(filteredData_karyaIlmiah)
    );

    // rekognisi
    const res_rekognisi = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=r"
    );
    const data_rekognisi = await res_rekognisi.json();
    const filteredData_rekognisi = data_rekognisi.data.filter((item: any) =>
      dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-rekognisi",
      JSON.stringify(filteredData_rekognisi)
    );

    // penobatan
    const res_penobatan = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=p"
    );
    const data_penobatan = await res_penobatan.json();
    const filteredData_penobatan = data_penobatan.data.filter((item: any) =>
      dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-penobatan",
      JSON.stringify(filteredData_penobatan)
    );

    // organisasi
    const res_organisasi = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=o"
    );
    const data_organisasi = await res_organisasi.json();
    const filteredData_organisasi = data_organisasi.data.filter((item: any) =>
      dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-organisasi",
      JSON.stringify(filteredData_organisasi)
    );

    // aksi-kemanusiaan
    const res_aksiKemanusiaan = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=ak"
    );
    const data_aksiKemanusiaan = await res_aksiKemanusiaan.json();
    const filteredData_aksiKemanusiaan = data_aksiKemanusiaan.data.filter(
      (item: any) => dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-aksi-kemanusiaan",
      JSON.stringify(filteredData_aksiKemanusiaan)
    );

    // kewirausahaan
    const res_kewirausahaan = await fetch(
      "https://script.google.com/macros/s/AKfycbzMec1oHDLO-exHQ5F2pE_4IddsTx9qx4EeFzM4uRtAPaqIztHfM-gic2KVXhOsWNJm/exec?type=u"
    );
    const data_kewirausahaan = await res_kewirausahaan.json();
    const filteredData_kewirausahaan = data_kewirausahaan.data.filter(
      (item: any) => dataMahasiwaDosen.some((mhs: any) => mhs.nim == item.nim)
    );
    localStorage.setItem(
      "data-kewirausahaan",
      JSON.stringify(filteredData_kewirausahaan)
    );
  };

  const DashboardComponent = () => {
    if (role == "dosen") {
      return (
        <DashboardDosen
          nMahasiswa={jumlahMahasiswa}
          nPrestasi={jumlahPrestasi}
          n_k={n_k}
          n_ki={n_ki}
          n_r={n_r}
          n_p={n_p}
          n_o={n_o}
          n_ak={n_ak}
          n_u={n_u}
        />
      );
    } else {
      return (
        <DashboardUPI
          nMahasiswa={dataDashboard.mahasiswa}
          nPrestasi={dataDashboard.prestasi}
          n_k={dataDashboard.kompetisi}
          n_ki={dataDashboard.karyaIlmiah}
          n_r={dataDashboard.rekognisi}
          n_p={dataDashboard.penobatan}
          n_o={dataDashboard.organisasi}
          n_ak={dataDashboard.aksiKemanusiaan}
          n_u={dataDashboard.kewirausahaan}
        />
      );
    }
  };
  return (
    <>{DashboardComponent()}</>
    // <div className="w-full h-full p-12 flex flex-col gap-8">

    //   {/* bagian 1 */}
    //   <div className="w-full flex flex-row gap-4">
    //     <div className="w-1/2 h-[130px] rounded shadow-lg flex flex-row">
    //       <div className="w-2/5 h-full flex justify-center items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-20 h-20 text-blue-500"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    //           />
    //         </svg>
    //       </div>
    //       <div className="w-3/5 h-full flex flex-col py-4 items-start justify-center text-darkApp">
    //         {angkaJumlahMahasiswa()}
    //         <div className="text-sm flex items-center gap-2 text-gray-500">
    //           <p>mahasiswa berprestasi</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-1/2 h-[130px] rounded shadow-lg flex flex-row">
    //       <div className="w-2/5 h-full flex justify-center items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-20 h-20 text-yellow-500"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
    //           />
    //         </svg>
    //       </div>
    //       <div className="w-3/5 h-full flex flex-col py-4 items-start justify-center text-darkApp">
    //         {angkaJumlahPrestasi()}
    //         <div className="text-sm flex items-center gap-2 text-gray-500">
    //           <p>prestasi</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* bagian 2 */}
    //   <div className="w-full flex flex-row gap-4">
    //     <div className="w-3/5 h-fit  p-4 rounded shadow-lg border border-greenApp">
    //       <div>{BarChartComponent()}</div>
    //     </div>
    //     <div className="w-2/5 h-full bg-red-300 ">
    //       <div className="bg-white p-2 border border-greenApp rounded shadow-lg w-full flex flex-col justify-center items-center">
    //         <div className="w-[300px] h-full">
    //           <PieChart labels={["2020", "2021", "2022"]} data={[30, 40, 30]} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* bagian 3 */}
    //   <div></div>
    // </div>
  );
};

export default Dashboard;
