import { Button } from ".";

const TestAPI = () => {
  return (
    <section
      id="test-api"
      className="w-full flex flex-row items-center bg-slate-300"
    >
      <div className="w-1/2">
        <Button text="Get Data" />
      </div>
      <div className="w-1/2">Test my api</div>
    </section>
  );
};

export default TestAPI;
