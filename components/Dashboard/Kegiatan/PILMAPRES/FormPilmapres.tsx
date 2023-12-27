"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { ProsesMahasiswaHeaders } from "@/utils/achievementHeader";
import { GeneratePDFPilmapres } from "@/components/Pdf/GeneratePDF";

const FormPilmapres = () => {
  const [dataKompetisi, setDataKompetisi]: any = useState([]);
  const [dataKaryaIlmiah, setDataKaryaIlmiah]: any = useState([]);
  const [dataRekognisi, setDataRekognisi]: any = useState([]);
  const [dataPenobatan, setDataPenobatan]: any = useState([]);
  const [dataOrganisasi, setDataOrganisasi]: any = useState([]);
  const [dataAksiKemanusiaan, setDataAksiKemanusiaan]: any = useState([]);
  const [dataKewirausahaan, setDataKewirausahaan]: any = useState([]);
  const [formData, setFormData] = useState({
    nim: "",
    prestasi: [""],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDataKompetisi([]);
    setDataKaryaIlmiah([]);
    setDataRekognisi([]);
    setDataPenobatan([]);
    setDataOrganisasi([]);
    setDataAksiKemanusiaan([]);
    setDataKewirausahaan([]);
    const data: Record<string, any> = {};
    ProsesMahasiswaHeaders.forEach((header) => {
      if (header == "prestasi") {
        data[header] = [
          "kompetisi",
          "karyaIlmiah",
          "rekognisi",
          "penobatan",
          "organisasi",
          "aksiKemanusiaan",
          "kewirausahaan",
        ];
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    let dataHasil = [];
    let value_k: any = [],
      value_ki: any = [],
      value_r: any = [],
      value_p: any = [],
      value_o: any = [],
      value_ak: any = [],
      value_u: any = [];
    let k: any, ki: any, r: any, p: any, o: any, ak: any, u: any;

    value_k = localStorage.getItem("data-kompetisi");
    if (value_k) {
      k = JSON.parse(value_k);
      k = k.filter((item: any) => item.nim == data.nim);
      setDataKompetisi(k);
    } else {
      k = [];
    }

    value_ki = localStorage.getItem("data-karya-ilmiah");
    if (value_ki) {
      ki = JSON.parse(value_ki);
      ki = ki.filter((item: any) => item.nim == data.nim);
      setDataKaryaIlmiah(ki);
    } else {
      ki = [];
    }

    value_r = localStorage.getItem("data-rekognisi");
    if (value_r) {
      r = JSON.parse(value_r);
      r = r.filter((item: any) => item.nim == data.nim);
      setDataRekognisi(r);
    } else {
      r = [];
    }

    value_p = localStorage.getItem("data-penobatan");
    if (value_p) {
      p = JSON.parse(value_p);
      p = p.filter((item: any) => item.nim == data.nim);
      setDataPenobatan(p);
    } else {
      p = [];
    }

    value_o = localStorage.getItem("data-organisasi");
    if (value_o) {
      o = JSON.parse(value_o);
      o = o.filter((item: any) => item.nim == data.nim);
      setDataOrganisasi(o);
    } else {
      o = [];
    }

    value_ak = localStorage.getItem("data-aksi-kemanusiaan");
    if (value_ak) {
      ak = JSON.parse(value_ak);
      ak = ak.filter((item: any) => item.nim == data.nim);
      setDataAksiKemanusiaan(ak);
    } else {
      ak = [];
    }

    value_u = localStorage.getItem("data-kewirausahaan");
    if (value_u) {
      u = JSON.parse(value_u);
      u = u.filter((item: any) => item.nim == data.nim);
      setDataKewirausahaan(u);
    } else {
      u = [];
    }

    dataHasil.push({
      ...(k && { kompetisi: k }),
      ...(ki && { karyaIlmiah: ki }),
      ...(r && { rekognisi: r }),
      ...(p && { penobatan: p }),
      ...(o && { organisasi: o }),
      ...(ak && { aksiKemanusiaan: ak }),
      ...(u && { kewirausahaan: u }),
    });

    console.log(dataHasil[0]);
  }

  const returnDataHasil = () => {
    let totalPrestasi: number = 0;
    let totalScore: number = 0;
    let nama: any, email: any, nim: any;
    let checkBiodata = false;
    if (dataKompetisi.length > 0) {
      totalPrestasi += dataKompetisi.length;
      if (checkBiodata == false) {
        nama = dataKompetisi[0].nama;
        nim = dataKompetisi[0].nim;
        email = dataKompetisi[0].email;
        checkBiodata = true;
      }
      dataKompetisi.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataKaryaIlmiah.length > 0) {
      totalPrestasi += dataKaryaIlmiah.length;
      if (checkBiodata == false) {
        nama = dataKaryaIlmiah[0].nama;
        nim = dataKaryaIlmiah[0].nim;
        email = dataKaryaIlmiah[0].email;
        checkBiodata = true;
      }
      dataKaryaIlmiah.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataRekognisi.length > 0) {
      totalPrestasi += dataRekognisi.length;
      if (checkBiodata == false) {
        nama = dataRekognisi[0].nama;
        nim = dataRekognisi[0].nim;
        email = dataRekognisi[0].email;
        checkBiodata = true;
      }
      dataRekognisi.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataPenobatan.length > 0) {
      totalPrestasi += dataPenobatan.length;
      if (checkBiodata == false) {
        nama = dataPenobatan[0].nama;
        nim = dataPenobatan[0].nim;
        email = dataPenobatan[0].email;
        checkBiodata = true;
      }
      dataPenobatan.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataOrganisasi.length > 0) {
      totalPrestasi += dataOrganisasi.length;
      if (checkBiodata == false) {
        nama = dataOrganisasi[0].nama;
        nim = dataOrganisasi[0].nim;
        email = dataOrganisasi[0].email;
        checkBiodata = true;
      }
      dataOrganisasi.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataAksiKemanusiaan.length > 0) {
      totalPrestasi += dataAksiKemanusiaan.length;
      if (checkBiodata == false) {
        nama = dataAksiKemanusiaan[0].nama;
        nim = dataAksiKemanusiaan[0].nim;
        email = dataAksiKemanusiaan[0].email;
        checkBiodata = true;
      }
      dataAksiKemanusiaan.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (dataKewirausahaan.length > 0) {
      totalPrestasi += dataKewirausahaan.length;
      if (checkBiodata == false) {
        nama = dataKewirausahaan[0].nama;
        nim = dataKewirausahaan[0].nim;
        email = dataKewirausahaan[0].email;
        checkBiodata = true;
      }
      dataKewirausahaan.map((item: any) => {
        totalScore += item.score;
      });
    } else {
      totalPrestasi += 0;
    }

    if (totalPrestasi > 0) {
      return (
        <div className="w-full h-auto px-4 text-sm text-darkApp border-l border-greenApp ml-4 flex flex-col justify-start gap-2">
          <div className="pl-4">
            <h3 className="text-2xl font-bold">Data Prestasi</h3>
          </div>
          <div>
            <Table hideHeader aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>x</TableColumn>
                <TableColumn>Hasil</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Nama</TableCell>
                  <TableCell>{nama}</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>NIM</TableCell>
                  <TableCell>{nim}</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Email</TableCell>
                  <TableCell>{email}</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Total Prestasi</TableCell>
                  <TableCell>{totalPrestasi}</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Total Skor</TableCell>
                  <TableCell>{totalScore}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="w-full flex justify-start pl-2 pt-2">
            <Button
              onClick={() =>
                GeneratePDFPilmapres(
                  "mahasiswa",
                  totalScore,
                  dataKompetisi.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    capaian: item.capaian,
                    kategori: item.kategori,
                    statusTim: item.statusTim,
                    namaKompetisi: item.namaKompetisi,
                    tingkat: item.tingkat,
                    tahun: item.tahun,
                    score: item.score,
                  })),
                  dataKaryaIlmiah.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    judul: item.judul,
                    jenisKTI: item.jenisKTI,
                    statusPenulis: item.statusPenulis,
                    namaPenerbit: item.namaPenerbit,
                    tingkat: item.tingkat,
                    tahun: item.tahun,
                    score: item.score,
                  })),
                  dataRekognisi.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    peran: item.peran,
                    materi: item.materi,
                    namaKegiatan: item.namaKegiatan,
                    tingkat: item.tingkat,
                    tahun: item.tahun,
                    score: item.score,
                  })),
                  dataPenobatan.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    tandaKehormatan: item.tandaKehormatan,
                    tingkat: item.tingkat,
                    lembaga: item.lembaga,
                    score: item.score,
                  })),
                  dataOrganisasi.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    jabatan: item.jabatan,
                    bidang: item.bidang,
                    namaOrganisasi: item.namaOrganisasi,
                    tingkat: item.tingkat,
                    tahun: item.tahun,
                    score: item.score,
                  })),
                  dataAksiKemanusiaan.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    peran: item.peran,
                    namaKegiatan: item.namaKegiatan,
                    tingkat: item.tingkat,
                    tahun: item.tahun,
                    score: item.score,
                  })),
                  dataKewirausahaan.map((item: any) => ({
                    nama: item.nama,
                    email: item.email,
                    nim: item.nim,
                    idPrestasi: item.idPrestasi,
                    namaUsaha: item.namaUsaha,
                    bidang: item.bidang,
                    tingkat: item.tingkat,
                    score: item.score,
                  }))
                )
              }
              size="sm"
              color="danger"
            >
              Buat PDF
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-auto px-4 text-sm text-darkApp border-l border-greenApp ml-4 flex justify-start">
          Masukan NIM Mahasiswa pada kolom input
        </div>
      );
    }
  };

  return (
    <div className="w-full h-fit px-16">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full border border-greenApp rounded p-4 flex flex-row items-center"
      >
        <div className="w-1/5">
          <div className="w-full">
            <Input
              id="nim"
              name="nim"
              //   value={formData.nim}
              value={"2102211"}
              onChange={handleInputChange}
              type="text"
              size="sm"
              variant="bordered"
              label="NIM Mahasiswa"
              labelPlacement="outside"
              placeholder="Masukan NIM Mahasiswa"
              isRequired
            />
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              size="sm"
              color="success"
              className="text-white"
            >
              Proses
            </Button>
          </div>
        </div>
        <div className="w-4/5 h-auto">{returnDataHasil()}</div>
      </form>
    </div>
  );
};

export default FormPilmapres;
