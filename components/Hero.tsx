import { Button } from ".";

const Hero = () => {
  return (
    <section id="hero" className="w-full flex flex-row items-center">
      <div className="w-3/5">
        <div className="py-28 text-darkApp">
          <h1 className="text-6xl font-bold">Go whenever, whenever</h1>
          <p className="text-xl my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sit blanditiis ipsum, esse architecto pariatur? Qui unde accusamus
            voluptas magni quisquam debitis mollitia quia, nobis veniam! Aliquid
            saepe amet.
          </p>
          <Button text="Start App" />
        </div>
      </div>
      <div className="w-2/5"></div>
    </section>
  );
};

export default Hero;
