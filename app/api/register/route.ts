import { NextResponse } from "next/server";

type FormData = {
  nama?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const { nama, email, password, confirmPassword } = data;
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyoyKwV_BQuHVrpgznv4ThDEfFAgZNnXqGrO23WekhstGxdl6k-IPrsHF0BhMhsBBbS/exec",
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
    nama,
    email,
    password,
    confirmPassword,
    message: "done",
  });
}
