import FadeInOnScroll from "./FadeInOnScroll";
import { Link } from "react-router-dom";

function JobExperience() {
  return (
    <FadeInOnScroll direction="up" delay={0.3}>
      <section id="experience">
        <h1 className="mb-[1rem] md:mb-[2rem] font-SpaceMono  text-gray-600 font-extrabold  text-2xl dark:text-slate-300 flex flex-row flex-nowrap items-center">
          <span className="text-green-500">02. </span>
          Experience
          <span class="flex-grow  block border-t mx-5 border-gray-500" />
        </h1>
        <div className="text-black dark:text-white">
          <h1 className="font-bold font-SpaceMono text-xl">
            Web Developer – Dsquare Marketing
          </h1>
          <h3 className="font-DMSans text-black dark:text-gray-200">
            Oct 2023 – Present
          </h3>
          <div className="mt-5">
            <p className="font-DMSans leading-5 md:w-[75%]">
              At Dsquare Marketing, I worked as a Web Developer focusing on
              building and maintaining WordPress websites. My responsibilities
              included:
            </p>
            <ul className="list-disc pl-5 md:pl-10 pt-2 font-DMSans text-black dark:text-gray-200 marker:text-green-600">
              <li>
                Developing responsive and dynamic websites using WordPress and
                Elementor.
              </li>
              <li>Customizing themes and plugins to match client needs.</li>
              <li>
                Maintaining websites by performing regular updates, backups, and
                security checks.
              </li>
              <li>
                Ensuring optimal performance and SEO best practices across all
                projects.
              </li>
              <li>
                Providing ongoing support and implementing new features as
                required.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-black dark:text-white mt-5">
          <Link to={"/"}>
            <h1 className="font-bold font-SpaceMono text-blue-400 underline text-xl">
              Web Development Intern (WordPress)
            </h1>
          </Link>
          <h3 className="font-DMSans text-black dark:text-gray-200">
            Apr 2023 – Oct 2023
          </h3>
          <div className="mt-5">
            <p className="font-DMSans leading-5 md:w-[75%]">
              At Dsquare Marketing, I worked as a Web Developer focusing on
              building and maintaining WordPress websites. My responsibilities
              included:
            </p>
            <ul className="list-disc pl-5 md:pl-10 pt-2 font-DMSans text-black dark:text-gray-200 marker:text-green-600">
              <li>
                Built cross-device WordPress websites and collaborated with
                senior developers.{" "}
              </li>
              <li>
                Customized Elementor designs and integrated plugins for added
                functionality.
              </li>
              <li>Assisted with debugging and resolving WordPress issues.</li>
            </ul>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}

export default JobExperience;
