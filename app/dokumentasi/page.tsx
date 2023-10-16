import {
  Benefit,
  DuplicateInfo,
  EmailInfo,
  FormInfo,
  Intro,
} from "@/components";
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
      <div className="bg-slate-100 flex justify-center items-center pt-10 lg:pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-darkApp border-b-4 border-greenApp">
          Cara Pakai
        </h1>
      </div>
      <Intro />
    </div>
  );
};

export default page;
