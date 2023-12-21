import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(req: any) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;
  let role = req.cookies.get("role");

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url.includes("/dashboard")) {
    if (role.value == "mahasiswa") {
      return NextResponse.redirect("http://localhost:3000/");
    }
  }

  if (!verify && url.includes("/dokumentasi")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
