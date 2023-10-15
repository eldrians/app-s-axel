"use client";
import React from "react";
import { Button } from ".";
import { deleteCookie, setCookie } from "cookies-next";

const Test = () => {
  const addCookie = () => {
    setCookie("user", true, {
      path: "/",
    });
  };

  // removing cookies
  const removeCookie = () => {
    deleteCookie("user", {
      path: "/",
    });
  };
  return (
    <div>
      <Button text="Add Cookies" btnType="submit" handleClick={addCookie} />
      <Button
        text="Remove Cookies"
        btnType="submit"
        handleClick={removeCookie}
      />
    </div>
  );
};

export default Test;
