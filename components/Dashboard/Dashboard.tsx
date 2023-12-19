"use client";
import React, { useEffect, useState } from "react";
import { BarChart, LineChart, PieChart } from "@/components";

const Dashboard = () => {
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
  useEffect(() => {
    const fetchDataDashboard = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzrbq690QFoaWsidjc1S4Wf-tT-qtYtN70ObrT1f6JJwE87KsovLFL7U_5f8AOhxZnT_Q/exec"
        );
        const data = await res.json();
        setDataDashboard(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataDashboard();
  }, []);
  return (
    <div className="w-full h-full p-12 flex flex-col gap-8">
      {/* bagian 1 */}
      <div className="w-full flex flex-row gap-4">
        <div className="w-1/3 h-[130px] rounded shadow-lg flex flex-row">
          <div className="w-2/5 h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="w-3/5 h-full flex flex-col py-4 items-start justify-center text-darkApp">
            <div className="text-4xl font-bold">{dataDashboard.mahasiswa}</div>
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <p>mahasiswa berprestasi</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[130px] rounded shadow-lg flex flex-row">
          <div className="w-2/5 h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
          <div className="w-3/5 h-full flex flex-col py-4 items-start justify-center text-darkApp">
            <div className="text-4xl font-bold">{dataDashboard.prestasi}</div>
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <p>prestasi</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[130px] rounded shadow-lg flex flex-row">
          <div className="w-2/5 h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-greenApp"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
          </div>
          <div className="w-3/5 h-full flex flex-col py-4 items-start justify-center text-darkApp">
            <div className="text-4xl font-bold">47</div>
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <p>prestasi diproses</p>
            </div>
          </div>
        </div>
      </div>

      {/* bagian 2 */}
      <div className="w-full flex flex-row gap-4">
        <div className="w-3/5 h-fit  p-4 rounded shadow-lg border border-greenApp">
          <div>
            <BarChart
              labels={[
                "Kompetisi",
                "Karya Ilmiah",
                "Rekognisi",
                "Penobatan",
                "Organisasi",
                "Kewiraushaan",
                "Aksi Kemanusiaan",
              ]}
              data={[
                dataDashboard.kompetisi,
                dataDashboard.karyaIlmiah,
                dataDashboard.rekognisi,
                dataDashboard.penobatan,
                dataDashboard.organisasi,
                dataDashboard.kewirausahaan,
                dataDashboard.aksiKemanusiaan,
              ]}
            />
          </div>
        </div>
        <div className="w-2/5 h-full bg-red-300 ">
          <div className="bg-white p-2 border border-greenApp rounded shadow-lg w-full flex flex-col justify-center items-center">
            <div className="w-[300px] h-full">
              <PieChart labels={["2020", "2021", "2022"]} data={[30, 40, 30]} />
            </div>
          </div>
        </div>
      </div>

      {/* bagian 3 */}
      <div></div>
    </div>
  );
};

export default Dashboard;
