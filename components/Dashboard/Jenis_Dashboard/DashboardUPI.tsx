import { BarChart, PieChart, TableComponent } from "@/components";
import React from "react";

const DashboardUPI = ({
  nMahasiswa,
  nPrestasi,
  n_k,
  n_ki,
  n_r,
  n_p,
  n_o,
  n_u,
  n_ak,
}: {
  nMahasiswa: number;
  nPrestasi: number;
  n_k: number;
  n_ki: number;
  n_r: number;
  n_p: number;
  n_o: number;
  n_u: number;
  n_ak: number;
}) => {
  const newColumns = [
    {
      key: "nim",
      label: "NIM",
    },
    {
      key: "nama",
      label: "Nama",
    },
    {
      key: "totalPrestasi",
      label: "Prestasi",
    },
  ];

  const dataDosen = [
    {
      nim: "123456789",
      nama: "Jajang, M.T",
      totalPrestasi: 4,
    },
    {
      nim: "987654321",
      nama: "Dr. Ronald, M.T",
      totalPrestasi: 5,
    },
    {
      nim: "9875465123",
      nama: "Dr. Rani Megasari, M.T",
      totalPrestasi: 12,
    },
  ];
  return (
    <div className="w-full h-full p-12 flex flex-col gap-8">
      <div className="px-4">
        <h1 className="font-bold text-3xl text-darkApp mb-6">DASHBOARD UPI</h1>
      </div>
      {/* bagian 1 */}
      <div className="w-full flex flex-row gap-4">
        <div className="w-1/2 h-[130px] rounded shadow-lg flex flex-row">
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
            <div className="text-4xl font-bold">{nMahasiswa}</div>
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <p>mahasiswa berprestasi</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[130px] rounded shadow-lg flex flex-row">
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
            <div className="text-4xl font-bold">{nPrestasi}</div>
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <p>prestasi {nPrestasi}</p>
            </div>
          </div>
        </div>
      </div>

      {/* bagian 2 */}
      <div className="w-full h-fit flex flex-row gap-4">
        <div className="w-3/5 h-full p-4 rounded shadow-lg border border-greenApp">
          <div className="w-full h-full text-darkApp text-center pb-4">
            <h2 className="font-bold">
              Distribusi Prestasi berdasarkan Kategori
            </h2>
          </div>
          <div className="w-full">
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
              data={[n_k, n_ki, n_r, n_p, n_o, n_u, n_ak]}
            />
          </div>
        </div>
        <div className="w-2/5 h-auto p-4 rounded shadow-lg border border-greenApp">
          <div className="w-full text-darkApp text-center pb-4">
            <h2 className="font-bold">Prestasi Terbaru</h2>
          </div>
          <div className="h-[220px] w-full flex justify-center">
            <PieChart labels={["2020", "2021", "2022"]} data={[43, 12, 29]} />
          </div>
        </div>
      </div>

      {/* bagian 3 */}
      <div className="w-full h-[300px] p-4 rounded shadow-lg border border-greenApp">
        <div className="w-full text-darkApp text-center">
          <h2 className="font-bold">
            Distribusi Prestasi Berdasarkan Pembimbing Akademik
          </h2>
        </div>
        <div className="h-[220px] overflow-y-scroll">
          <TableComponent
            columns={newColumns}
            rows={dataDosen.sort((a, b) => b.totalPrestasi - a.totalPrestasi)}
            type="simple"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardUPI;
