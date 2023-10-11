import { FormKaryaIlmiah } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="pt-28 pb-12 px-20 bg-greenApp">
      <div className="bg-white rounded-xl p-10 shadow">
        <h1 className="text-3xl font-bold text-darkApp uppercase">
          karya ilmiah
        </h1>
        <FormKaryaIlmiah />
      </div>
    </div>
  );
};

export default page;
