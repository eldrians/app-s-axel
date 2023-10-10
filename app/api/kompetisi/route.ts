import { NextRequest, NextResponse } from "next/server";

type FormData = {
  urlSheet?: string;
  nama?: string;
  nim?: string;
  demandKey?: string;
  capaian?: string;
  kategori?: string;
  jenis?: string;
  kompetisi?: string;
  tingkat?: string;
  tahun?: string;
  url?: string;
};
export async function GET() {
  return NextResponse.json({
    message: "Hi Im Axel",
  });
}

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const {
    urlSheet,
    nama,
    nim,
    demandKey,
    capaian,
    kategori,
    jenis,
    kompetisi,
    tingkat,
    tahun,
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
    urlSheet,
    nama,
    nim,
    demandKey,
    capaian,
    kategori,
    jenis,
    kompetisi,
    tingkat,
    tahun,
    url,
  });
}
