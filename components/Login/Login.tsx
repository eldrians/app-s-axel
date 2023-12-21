"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Link,
} from "@nextui-org/react";

const Login = () => {
  return (
    <Card className="py-4 px-2 w-full">
      <CardHeader className="pt-2 px-4 flex-col items-center">
        <h1 className="font-bold text-2xl text-darkApp">Login</h1>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          type="email"
          label="Email"
          size="sm"
          variant="bordered"
          isRequired
        />
        <Input
          type="password"
          label="Password"
          size="sm"
          variant="bordered"
          isRequired
        />
        <Button color="success" size="sm" className="mt-2">
          <div className="text-white">Login</div>
        </Button>
        <div className="text-sm w-full flex justify-center items-center">
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
