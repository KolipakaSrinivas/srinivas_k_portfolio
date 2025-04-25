import React from "react";

import FadeInOnScroll from "./FadeInOnScroll";

function GetInTouch() {
  return (
    <FadeInOnScroll direction="up" delay={0.3}>
      <section
        className="flex flex-col items-center  gap-5 md:h-[50vh] lg:h-screen  px-5 pt-10 py-5"
        id="contact"
      >
        <h1 className="mb-2 font-SpaceMono  text-gray-600 font-extrabold  text-2xl dark:text-gray-300 ">
          <span className="text-green-500">02. </span>
          What’s Next?
          <span className="w-[2px] ml-[2px] h-28 bg-black z-10" />
        </h1>
        <h1 className="text-2xl md:text-5xl font-extrabold text-green-500">
          Get In Touch
        </h1>
        <p className="text-center text-sm md:w-[65%] text-gray-600 dark:text-gray-300 ">
          Although I’m currently looking for opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <a
          className="group relative mt-[5rem] inline-block bg-green-400 text-sm font-medium text-green-400  rounded-md"
          href="mailto:kolipakasrinivas456@gmail.com"
        >
          <span className="absolute inset-0  border-green-300   rounded-md" />
          <span className="block border-2 border-green-400 bg-slate-50 dark:bg-[#101828] rounded-md px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 font-SpaceMono">
            Say Hello
          </span>
        </a>
        <p className="mt-auto text-sm dark:text-slate-300 font-bold font-SpaceMono">
          Designed & Built by Srinivas K
        </p>
      </section>
    </FadeInOnScroll>
  );
}

export default GetInTouch;
