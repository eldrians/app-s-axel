import { NextRequest, NextResponse } from "next/server";

type FormData = {
  email?: string;
  judulPrestasi?: string;
  nama?: string;
  jenis?: string;
};
export async function GET() {
  return NextResponse.json({
    message: "Hi Im Axel",
  });
}

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const { email, judulPrestasi, nama, jenis } = data;
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxnjuGonM9Ei1tt70wmgm54NYTtAAiLvBrRQ14qHAws-dhkmNfzG-uvriNAZl1WUxwoCA/exec",
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
    email,
    judulPrestasi,
    nama,
    jenis,
  });
}
