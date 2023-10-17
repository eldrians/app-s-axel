import { Button, DuplicateInfo, EmailInfo } from "@/components";
const page = () => {
  return (
    <div>
      <div className="bg-slate-100 flex justify-center items-center pt-24 lg:pt-32">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-darkApp border-b-4 border-greenApp">
          Mulai Pendataan !
        </h1>
      </div>
      <EmailInfo />
      <DuplicateInfo />
      <div className="bg-slate-100 pb-32 flex flex-col gap-10 md:gap-12 justify-center items-center pt-10 lg:pt-20">
        <a href="/">
          <Button text="Kembali dan Mulai Data Prestasimu !" />
        </a>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-darkApp border-b-4 border-greenApp">
          Selesai :)
        </h1>
      </div>
    </div>
  );
};

export default page;
