import { NextResponse } from "next/server";

type FormData = {
  jenisPrestasi?: string;

  // dataMahasiswa
  namaLengkap?: string;
  nim?: string;
  email?: string;
  urlSheet?: string;

  // dataPrestasi
  demandKey?: string;
  urlPrestasi?: string;

  // data Kewirausahaan
  namaUsaha?: string;
  bidang?: string;
  statusHukum?: string;
  jumlahKaryawan?: string;
  tingkat?: string;
  totalScore?: number;
};
export async function GET() {
  return NextResponse.json({
    message: "Hi Im Axel",
  });
}

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const {
    jenisPrestasi,

    // data mahasiswa
    namaLengkap,
    nim,
    email,
    urlSheet,

    // data prestasi
    demandKey,
    urlPrestasi,

    // data Kewirausahaan
    namaUsaha,
    bidang,
    statusHukum,
    jumlahKaryawan,
    tingkat,
    totalScore,
  } = data;
  if (data.tingkat == "Internasional") {
    data.totalScore = 50;
  } else if (data.tingkat == "Regional") {
    data.totalScore = 40;
  } else if (data.tingkat == "Nasional") {
    data.totalScore = 30;
  } else if (data.tingkat == "Provinsi") {
    data.totalScore = 20;
  } else if (data.tingkat == "Perguruan Tinggi") {
    data.totalScore = 10;
  }
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwoUI3PSqCUF_xyNMU9vugMuMZ8x1O5JGqy8v5KKfukPpBE7fm0HcKpAKENiBXSxvL8VA/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "error",
    });
  }
  return NextResponse.json({
    jenisPrestasi,

    // data mahasiswa
    namaLengkap,
    nim,
    email,
    urlSheet,

    // data prestasi
    demandKey,
    urlPrestasi,

    // data Kewirausahaan
    namaUsaha,
    bidang,
    statusHukum,
    jumlahKaryawan,
    tingkat,
    totalScore,

    // message
    message: "done",
  });
}
