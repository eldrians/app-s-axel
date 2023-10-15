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
      <div className="bg-slate-100 flex justify-center items-center pt-32">
        <h1 className="text-7xl font-semibold text-darkApp">SETUP?</h1>
      </div>
      <EmailInfo />
      <DuplicateInfo />
      <FormInfo />
      <div className="bg-slate-100 flex justify-center items-center pt-16">
        <h1 className="text-7xl font-semibold text-darkApp">CARA PAKAI?</h1>
      </div>
      <Intro />
    </div>
  );
};

export default page;
