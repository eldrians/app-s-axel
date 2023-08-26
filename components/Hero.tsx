"use client";
import { Button } from ".";

const Hero = async () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const email = target.elements.namedItem("email") as HTMLInputElement;

    const data = {
      email: email.value,
    };

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }

      const responseData = await response.json();
    } catch (error: any) {
      console.log("error " + error.message);
    }
  }
  return (
    <section id="hero" className="w-full flex flex-row items-center">
      <div className="w-3/5">
        <div className="py-28 text-darkApp">
          <h1 className="text-6xl font-bold">Go whenever, whenever</h1>
          <p className="text-xl my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sit blanditiis ipsum, esse architecto pariatur? Qui unde accusamus
            voluptas magni quisquam debitis mollitia quia, nobis veniam! Aliquid
            saepe am
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row gap-2 items-center"
          >
            <input
              type="email"
              id="email"
              name="email"
              className="py-3 px-4 bg-whiteApp border border-gray-300 
              text-darkApp
              focus:outline-none
              focus:ring-[0.5px]
              focus:ring-greenApp
              rounded-full w-1/2"
              placeholder="Your Email..."
              required
            />
            <Button text="Get Email!" btnType="submit" />
          </form>
        </div>
      </div>
      <div className="w-2/5"></div>
    </section>
  );
};

export default Hero;
