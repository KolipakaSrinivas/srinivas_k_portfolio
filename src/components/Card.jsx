import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

function Card({ projectData }) {
  return (
    <FadeInOnScroll direction="up" delay={0}>
      <div class="relative cursor-pointer w-[310px] md:w-[270px] h-[280px] dark:text-white">
        <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg dark:bg-green-400" />
        <div class="relative p-5 bg-slate-50 h-[280px]  dark:bg-[#101828] border-2 border-green-500 dark:border-green-400 rounded-lg hover:scale-105 transition duration-500">
          <div class="flex items-center justify-between">
            <a href={projectData.githubLink}>
              <svg
                width={25}
                height={25}
                className="text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={projectData.liveLink}>
              <svg
                className="text-green-500"
                width={25}
                height={25}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div className="pt-5 flex flex-col gap-5">
            <h2 className="leading-4 text-xl text-gray-700  dark:text-slate-300 font-bold font-SpaceMono">
              {projectData.title}
            </h2>
            <p className="text-sm font-medium font-DMSans text-gray-600 dark:text-gray-300">
              {projectData.description}
            </p>
            <h1 className="text-sm text-gray-500 font-SpaceMono font-extrabold">
              {projectData.techStack}
            </h1>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default Card;
