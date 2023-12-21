"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LoginHeaders } from "@/utils/achievementHeader";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    nim: "",
    password: "",
  });
  const [dataAccount, setDataAccount] = useState([
    {
      nim: "",
      email: "",
      nama: "",
      password: "",
      role: "",
    },
  ]);
  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyoyKwV_BQuHVrpgznv4ThDEfFAgZNnXqGrO23WekhstGxdl6k-IPrsHF0BhMhsBBbS/exec"
        );
        const data = await res.json();
        console.log(data);
        setDataAccount(data.account);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAccount();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  async function getMahasiswaDosen(nip: any) {
    try {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbziRm_DhObWTXSY8CeRuS9-IyB4bZl8KOxUonOhtHYFFM9WodLJUunT5kOkcpK-93vk/exec?nip=${nip}`
      );
      const data = await res.json();
      localStorage.setItem("mahasiswa-dosen", JSON.stringify(data.mahasiswa));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: Record<string, any> = {};
    LoginHeaders.forEach((header) => {
      const inputElement = e.currentTarget.elements.namedItem(
        header
      ) as HTMLInputElement;
      data[header] = inputElement.value;
    });

    let result = dataAccount.find((item) => item.nim == data.nim);
    if (result == undefined) {
      console.log("data tidak ditemukan");
    } else {
      let checkPassword = data.password == result.password;
      if (checkPassword) {
        Cookies.set("loggedin", "success");
        Cookies.set("role", result.role);
        localStorage.setItem("data-user-nim",result.nim);
        localStorage.setItem("data-user-nama",result.nama);
        if (result.role == "dosen") {
          getMahasiswaDosen(result.nim);
        }
        router.push("/");
      } else {
        console.log("pass/email salah");
      }
    }
  }
  return (
    <Card className="py-4 px-2 w-full">
      <CardHeader className="pt-2 px-4 flex-col items-center">
        <h1 className="font-bold text-2xl text-darkApp">Login</h1>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="nim"
            name="nim"
            value={loginData.nim}
            onChange={handleInputChange}
            type="text"
            label="NIM / NIP"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Input
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            type="password"
            label="Password"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Button color="success" size="sm" className="mt-2" type="submit">
            <div className="text-white">Login</div>
          </Button>
        </form>
        <div className="text-sm w-full flex justify-center items-center mt-2">
          Belum punya akun?{" "}
          <Link href="/register" size="sm" showAnchorIcon>
            {" "}
            Register
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default Login;
