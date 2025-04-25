import Skill from "./Skill";
// import List from "./List";
import FadeInOnScroll from "./FadeInOnScroll";

function About() {
  return (
    <FadeInOnScroll direction="up" delay={0}>
      <section
        className="md:mr-[10rem] dark:text-slate-300 font-DMSans"
        id="about"
      >
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="mb-[2rem]  text-gray-600 dark:text-gray-300 font-extrabold  text-2xl font-SpaceMono flex flex-row flex-nowrap items-center ">
            <span className="text-green-500">01.</span> About Me
            <span class="flex-grow hidden md:block border-t mx-5 border-gray-500" />
          </h1>
          <p className="text-[1rem] ">
            Hi, I’m <span className="">Srinivas K</span> – a Full Stack
            Developer with a background in MBA IT and a passion for building web
            applications.
          </p>
          <p>
            I specialize in the MERN stack, Next.js, and TypeScript, and{" "}
            <span className="underline decoration-green-500 ">
              I love turning Figma designs into fully responsive, user-friendly
              websites.
            </span>{" "}
            I have strong skills in frontend development with React.js and a
            solid understanding of backend development, APIs, and database
            management using{" "}
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              MYSQL
            </span>{" "}
            and{" "}
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              MongoDB
            </span>{" "}
            .
          </p>
          <p>
            I build and integrate {""}
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              RESTful APIs,
            </span>
            {""} manage databases, and handle end-to-end deployment using
            platforms like
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
             {""} Render.com, Netlify, Vercel,
            </span>
          </p>
          <p>
            I’m also experienced in Linux systems and cloud deployment using
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              {" "}AWS EC2{" "}
            </span>
            and{" "}
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              Elastic Beanstalk.
            </span>comfortable working with{" "}
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              {" "}Linux systems, CI/CD pipelines,{" "}
            </span>
            <span className="underline decoration-green-600">
              Git for version control and automation.
            </span>
            and I enjoy learning new technologies, solving real-world problems,
            and creating fast, modern, and scalable web apps.
          </p>
          {/* <p>
            I'm also comfortable working with
            <span className="text-amber-600 font-bold relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              {" "}Linux systems, CI/CD pipelines,{" "}
            </span>
            <span className="underline decoration-green-600">
              Git for version control and automation.
            </span>
            and I enjoy learning new technologies, solving real-world problems,
            and creating fast, modern, and scalable web apps.
          </p> */}
        </div>
        <Skill />
      </section>
    </FadeInOnScroll>
  );
}

export default About;
