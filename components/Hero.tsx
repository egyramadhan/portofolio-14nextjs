import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="py-20" id="home">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
      </div>

      <div className="flex justify-center relative  my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" className="text-4xl md:text-5xl lg:text-6xl text-center" />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Egi as Full Stack Development with a passion for creating beautiful and functional websites. I specialize in building web applications with Nuxt.js, Next.js, React, laravel, and Tailwind CSS.
            </p>

            <a href="#projects">
                <MagicButton title="Show my Work" icon={<FaLocationArrow/>} position="right"  />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
