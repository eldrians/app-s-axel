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
import { ProsesMahasiswaHeaders } from "@/utils/achievementHeader";

const ProsesMahasiswa = () => {
  const [prestasi, setPrestasi]: any = useState([]);
  const [tahun, setTahun]: any = useState([]);
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
    const data: Record<string, any> = {};
    ProsesMahasiswaHeaders.forEach((header) => {
      if (header == "tahun") {
        data[header] = tahun;
      } else if (header == "prestasi") {
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
    let object = {};
    if (data.prestasi.includes("kompetisi")) {
      value_k = localStorage.getItem("data-kompetisi");
      if (value_k) {
        k = JSON.parse(value_k);
        k = k.filter((item: any) => item.nim == data.nim);
      } else {
        k = [];
      }
    }
    if (data.prestasi.includes("karyaIlmiah")) {
      value_ki = localStorage.getItem("data-karya-ilmiah");
      if (value_ki) {
        ki = JSON.parse(value_ki);
        ki = ki.filter((item: any) => item.nim == data.nim);
      } else {
        ki = [];
      }
    }
    if (data.prestasi.includes("rekognisi")) {
      value_r = localStorage.getItem("data-rekognisi");
      if (value_r) {
        r = JSON.parse(value_r);
        r = r.filter((item: any) => item.nim == data.nim);
      } else {
        r = [];
      }
    }
    if (data.prestasi.includes("penobatan")) {
      value_p = localStorage.getItem("data-penobatan");
      if (value_p) {
        p = JSON.parse(value_p);
        p = p.filter((item: any) => item.nim == data.nim);
      } else {
        p = [];
      }
    }
    if (data.prestasi.includes("organisasi")) {
      value_o = localStorage.getItem("data-organisasi");
      if (value_o) {
        o = JSON.parse(value_o);
        o = o.filter((item: any) => item.nim == data.nim);
      } else {
        o = [];
      }
    }
    if (data.prestasi.includes("aksiKemanusiaan")) {
      value_ak = localStorage.getItem("data-aksi-kemanusiaan");
      if (value_ak) {
        ak = JSON.parse(value_ak);
        ak = ak.filter((item: any) => item.nim == data.nim);
      } else {
        ak = [];
      }
    }
    if (data.prestasi.includes("kewirausahaan")) {
      value_u = localStorage.getItem("data-kewirausahaan");
      if (value_u) {
        u = JSON.parse(value_u);
        u = u.filter((item: any) => item.nim == data.nim);
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
  return (
    <div className="w-full h-screen flex justify-center items-start p-12">
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
          <div className="pt-8">
            <Button type="submit" size="sm" color="success">
              Proses
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProsesMahasiswa;
