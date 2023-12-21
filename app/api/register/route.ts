import { NextResponse } from "next/server";

type FormData = {
  nim?: string;
  nama?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
};

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const { nim, nama, email, password, confirmPassword, role } = data;
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
    nim,
    nama,
    email,
    password,
    confirmPassword,
    role,
    message: "done",
  });
}
