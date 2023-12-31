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

  // data Minat dan Bakat
  minatDanBakat?: string;
  jenisMDB?: string;
  keahlian?: string;
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

    // data Minat dan Bakat
    minatDanBakat,
    jenisMDB,
    keahlian,
  } = data;
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

    // data Minat dan Bakat
    minatDanBakat,
    jenisMDB,
    keahlian,

    // message
    message: "done",
  });
}
