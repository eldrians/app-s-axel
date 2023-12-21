"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { RegisterHeaders } from "@/utils/achievementHeader";
import { ToastError, ToastSuccess } from "@/utils/toasts";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  let onSuccess = false;
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: Record<string, any> = {};
    RegisterHeaders.forEach((header) => {
      const inputElement = e.currentTarget.elements.namedItem(
        header
      ) as HTMLInputElement;
      data[header] = inputElement.value;
    });

    try {
      const response = await fetch("/api/register", {
        // rubah
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      var info = await response.json();

      if (info.message == "done") {
        setRegisterData({
          nama: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        onSuccess = true;
        ToastSuccess("Register Berhasil");
      } else {
        ToastError("Register Gagal");
      }
    } catch (error: any) {
      console.log("error " + error.message);
    }
    if (onSuccess) {
      router.push("/login");
    }
  }
  return (
    <Card className="py-4 px-2 w-full">
      <CardHeader className="pt-2 px-4 flex-col items-center">
        <h1 className="font-bold text-2xl text-darkApp">Register</h1>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="nama"
            name="nama"
            value={registerData.nama}
            onChange={handleInputChange}
            type="text"
            label="Nama"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Input
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
            type="email"
            label="Email"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Input
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            type="password"
            label="Password"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            label="Confirm Password"
            size="sm"
            variant="bordered"
            isRequired
          />
          <Button color="success" size="sm" className="mt-2" type="submit">
            <div className="text-white">Register</div>
          </Button>
        </form>
        <div className="text-sm mt-2 w-full flex justify-center items-center">
          Sudah punya akun?{" "}
          <Link href="/login" size="sm" showAnchorIcon>
            {" "}
            Login
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default Register;
