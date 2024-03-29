import { ReactElement } from "react";

const About = (): ReactElement => {
  return (
    <section className="bg-blue-500 text-white py-8 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Welcome to our Website ABOUT
          </h2>
          <p className="mt-2 text-xl">Discover amazing things here!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
