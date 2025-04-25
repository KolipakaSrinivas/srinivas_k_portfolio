import { TypeAnimation } from "react-type-animation";

import FadeInOnScroll from "./FadeInOnScroll";

function Hero() {
  return (
    <section className="flex mt-[4rem] lg:mt-[5rem] flex-col gap-7 pt-5 dark:bg-[#101828]" id="home">
      <FadeInOnScroll direction="up" delay={1}>
        <h4 className="text-black  text-xl dark:text-slate-300 font-SpaceMono">
          Hi
          <span className="text-green-600">,</span>
          my name is
        </h4>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up" delay={1.1}>
        <h1 className="text-5xl  md:text-8xl font-manrope font-extrabold text-green-500 font-SpaceMono">
          Srinivas <span>K</span>
        </h1>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up" delay={1.2}>
        <h2 className="text-2xl md:text-4xl md:w-[85%]  text-gray-700 dark:text-slate-300 font-SpaceMono">
          I'm a Full Stack Developer skilled in{" "}
          <span className="inline-block min-w-[120px] md:min-w-[200px] text-left text-green-500 ">
            <TypeAnimation
              sequence={["React JS", 3000, "Next JS", 5000]}
              repeat={Infinity}
            />
          </span>{" "}
          and{" "}
          <span className="inline-block min-w-[80px] md:min-w-[130px] text-left text-green-500 ">
            <TypeAnimation
              sequence={["javascript", 3000, "typescript", 5000]}
              repeat={Infinity}
            />
          </span>{" "}
        </h2>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up" delay={1.3}>
        <p className="w-[95%] md:w-[80%] lg:w-[60%] dark:text-slate-300 font-SpaceMono">
          With expertise in React.js and{" "}
          <span className="rounded px-2 font-bold bg-green-500 text-white">
            backend development
          </span>
          ,I build robust Web apps that prioritize user experience, turning
          <span className="underline decoration-green-500 decoration-2">
            {" "}designs into reality.
          </span>
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up" delay={1.3}>
        {/* <button  style={{ "font-family": "Space Mono" }} className="border-2 px-5 p-2 rounded-md border-green-500"></button> */}
        <a
          className="group relative  inline-block bg-green-400 text-sm font-medium text-green-500  rounded-md"
          href="#"
        >
          <span className="absolute inset-0  border-green-300   rounded-md" />
          <span
            className="block border-2 font-bold text-[1rem] border-green-400 bg-slate-50 dark:bg-[#101828] rounded-md px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
            style={{ "font-family": "Space Mono" }}
          >
            Resume
          </span>
        </a>
      </FadeInOnScroll>
    </section>
  );
}

export default Hero;
