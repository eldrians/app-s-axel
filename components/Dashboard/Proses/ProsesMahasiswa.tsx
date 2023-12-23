"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@nextui-org/react";
import {
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
} from "@nextui-org/react";
import TableComponent from "../Table";
import { ProsesMahasiswaHeaders } from "@/utils/achievementHeader";
import {
  TableKompetisiHeaders,
  TableKaryaIlmiahHeaders,
  TableRekognisiHeaders,
  TablePenobatanHeaders,
  TableOrganisasiHeaders,
  TableAksiKemanusiaanHeaders,
  TableKewirausahaanHeaders,
} from "@/utils/tablePrestasiHeaders";

import { GeneratePDF } from "@/components/Pdf/GeneratePDF";

const ProsesMahasiswa = () => {
  const [prestasi, setPrestasi]: any = useState([]);
  const [dataKompetisi, setDataKompetisi] = useState([]);
  const [dataKaryaIlmiah, setDataKaryaIlmiah] = useState([]);
  const [dataRekognisi, setDataRekognisi] = useState([]);
  const [dataPenobatan, setDataPenobatan] = useState([]);
  const [dataOrganisasi, setDataOrganisasi] = useState([]);
  const [dataAksiKemanusiaan, setDataAksiKemanusiaan] = useState([]);
  const [dataKewirausahaan, setDataKewirausahaan] = useState([]);
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
        data[header] = prestasi;
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
    if (data.prestasi.includes("kompetisi")) {
      value_k = localStorage.getItem("data-kompetisi");
      if (value_k) {
        k = JSON.parse(value_k);
        k = k.filter((item: any) => item.nim == data.nim);
        setDataKompetisi(k);
      } else {
        k = [];
      }
    }
    if (data.prestasi.includes("karyaIlmiah")) {
      value_ki = localStorage.getItem("data-karya-ilmiah");
      if (value_ki) {
        ki = JSON.parse(value_ki);
        ki = ki.filter((item: any) => item.nim == data.nim);
        setDataKaryaIlmiah(ki);
      } else {
        ki = [];
      }
    }
    if (data.prestasi.includes("rekognisi")) {
      value_r = localStorage.getItem("data-rekognisi");
      if (value_r) {
        r = JSON.parse(value_r);
        r = r.filter((item: any) => item.nim == data.nim);
        setDataRekognisi(r);
      } else {
        r = [];
      }
    }
    if (data.prestasi.includes("penobatan")) {
      value_p = localStorage.getItem("data-penobatan");
      if (value_p) {
        p = JSON.parse(value_p);
        p = p.filter((item: any) => item.nim == data.nim);
        setDataPenobatan(p);
      } else {
        p = [];
      }
    }
    if (data.prestasi.includes("organisasi")) {
      value_o = localStorage.getItem("data-organisasi");
      if (value_o) {
        o = JSON.parse(value_o);
        o = o.filter((item: any) => item.nim == data.nim);
        setDataOrganisasi(o);
      } else {
        o = [];
      }
    }
    if (data.prestasi.includes("aksiKemanusiaan")) {
      value_ak = localStorage.getItem("data-aksi-kemanusiaan");
      if (value_ak) {
        ak = JSON.parse(value_ak);
        ak = ak.filter((item: any) => item.nim == data.nim);
        setDataAksiKemanusiaan(ak);
      } else {
        ak = [];
      }
    }
    if (data.prestasi.includes("kewirausahaan")) {
      value_u = localStorage.getItem("data-kewirausahaan");
      if (value_u) {
        u = JSON.parse(value_u);
        u = u.filter((item: any) => item.nim == data.nim);
        setDataKewirausahaan(u);
      } else {
        u = [];
      }
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

  const returnTableKompetisi = () => {
    if (dataKompetisi.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">Data Kompetisi</h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableKompetisiHeaders}
              rows={dataKompetisi}
              type="semi-kompleks"
              jenisPrestasi="kompetisi"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const returnTableKaryaIlmiah = () => {
    if (dataKaryaIlmiah.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">
              Data Karya Ilmiah
            </h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableKaryaIlmiahHeaders}
              rows={dataKaryaIlmiah}
              type="semi-kompleks"
              jenisPrestasi="karyaIlmiah"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const returnTableRekognisi = () => {
    if (dataRekognisi.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">Data Rekognisi</h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableRekognisiHeaders}
              rows={dataRekognisi}
              type="semi-kompleks"
              jenisPrestasi="rekognisi"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const returnTablePenobatan = () => {
    if (dataPenobatan.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">Data Penobatan</h4>
          </div>
          <div>
            <TableComponent
              columns={TablePenobatanHeaders}
              rows={dataPenobatan}
              type="semi-kompleks"
              jenisPrestasi="penobatan"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const returnTableOrganisasi = () => {
    if (dataOrganisasi.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">Data Organisasi</h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableOrganisasiHeaders}
              rows={dataOrganisasi}
              type="semi-kompleks"
              jenisPrestasi="organisasi"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const returnTableAksiKemanusiaan = () => {
    if (dataAksiKemanusiaan.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">
              Data Aksi Kemanusiaan
            </h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableAksiKemanusiaanHeaders}
              rows={dataAksiKemanusiaan}
              type="semi-kompleks"
              jenisPrestasi="aksiKemanusiaan"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const returnTableKewirausahaan = () => {
    if (dataKewirausahaan.length > 0) {
      return (
        <div className="w-full h-fit p-8 border rounded">
          <div className="w-full flex justify-start">
            <h4 className="font-semibold text-darkApp mb-2">
              Data Kewirausahaan
            </h4>
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <TableComponent
              columns={TableKewirausahaanHeaders}
              rows={dataKewirausahaan}
              type="semi-kompleks"
              jenisPrestasi="kewirausahaan"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-start p-12">
      <form onSubmit={handleSubmit} className="w-full h-fit">
        <div className="w-full h-fit rounded border border-darkGreenApp p-6 flex flex-col">
          <div>
            <Input
              id="nim"
              name="nim"
              //   value={formData.nim}
              value={"2102211"}
              onChange={handleInputChange}
              type="text"
              size="sm"
              variant="bordered"
              label="NIM / NIP"
              labelPlacement="outside"
              placeholder="Masukan NIM Mahasiswa"
              isRequired
            />
          </div>
          <div className="pt-4 flex flex-row gap-12 h-auto">
            <div className="pt-4 h-auto">
              <div>
                <h3 className="text-darkApp font-semibold pb-2">
                  Kebutuhan Prestasi
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <CheckboxGroup
                  color="success"
                  value={prestasi}
                  onValueChange={setPrestasi}
                  size="sm"
                >
                  <Checkbox value="kompetisi">
                    <div className="text-sm">Kompetisi</div>
                  </Checkbox>
                  <Checkbox value="karyaIlmiah">
                    <div className="text-sm">Karya Ilmiah</div>
                  </Checkbox>
                  <Checkbox value="rekognisi">
                    <div className="text-sm">Rekognisi</div>
                  </Checkbox>
                  <Checkbox value="penobatan">
                    <div className="text-sm">Penobatan</div>
                  </Checkbox>
                  <Checkbox value="organisasi">
                    <div className="text-sm">Organisasi</div>
                  </Checkbox>
                  <Checkbox value="aksiKemanusiaan">
                    <div className="text-sm">Aksi Kemanusiaan</div>
                  </Checkbox>
                  <Checkbox value="kewirausahaan">
                    <div className="text-sm">Kewirausahaan</div>
                  </Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-row gap-2">
            <Button
              type="submit"
              size="sm"
              color="success"
              className="text-white"
            >
              Proses
            </Button>
            <Button
              onClick={() =>
                GeneratePDF(
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
              Generate PDF
            </Button>
          </div>
        </div>
      </form>
      <div className="w-full h-fit flex flex-col gap-4 mt-4">
        {returnTableKompetisi()}
        {returnTableKaryaIlmiah()}
        {returnTableRekognisi()}
        {returnTablePenobatan()}
        {returnTableOrganisasi()}
        {returnTableAksiKemanusiaan()}
        {returnTableKewirausahaan()}
      </div>
    </div>
  );
};

export default ProsesMahasiswa;
