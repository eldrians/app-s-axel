import { NextRequest, NextResponse } from "next/server";

type FormData = {
  email?: string;
};
export async function GET() {
  return NextResponse.json({
    message: "Hi Im Axel",
  });
}

export async function POST(request: Request) {
  const data: FormData = await request.json();
  const { email } = data;
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzdnpG4SwUGTZuQzcUGCh7m6IxF5HteAuftTpKT7g7_gUWd9sDOZI4wsonc_ZPMf5ZK/exec",
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
  });
}
