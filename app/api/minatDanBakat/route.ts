import { NextResponse } from "next/server";

type FormData = {
  jenisPrestasi?: string;
  urlSheet?: string;
  nama?: string;
  nim?: string;
  demandKey?: string;
  minatDanBakat?: string;
  jenis?: string;
  keahlian?: string;
  url?: string;
};
export async function GET() {
  return NextResponse.json({
    message: "Hi Im Axel",
  });
}

export async function POST(request: Request) {
  console.log("axel");
  const data: FormData = await request.json();
  const {
    jenisPrestasi,
    urlSheet,
    nama,
    nim,
    demandKey,
    minatDanBakat,
    jenis,
    keahlian,
    url,
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

    const responseData = await response.json();
  } catch (error: any) {
    console.log("error " + error.message);
  }
  return NextResponse.json({
    jenisPrestasi,
    urlSheet,
    nama,
    nim,
    demandKey,
    minatDanBakat,
    jenis,
    keahlian,
    url,
  });
}
