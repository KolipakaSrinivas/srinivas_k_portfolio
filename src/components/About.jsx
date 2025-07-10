import Skill from "./Skill";
import FadeInOnScroll from "./FadeInOnScroll";

function About() {
  return (
    <FadeInOnScroll direction="up" delay={0}>
      <section
        className="md:mr-[10rem] dark:text-slate-300 font-DMSans"
        id="about"
      >
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="mb-[2rem] text-gray-600 dark:text-gray-300 font-extrabold text-2xl font-SpaceMono flex flex-row flex-nowrap items-center">
            <span className="text-green-500">01.</span> About Me
            <span className="flex-grow hidden md:block border-t mx-5 border-gray-500" />
          </h1>
          <p className="text-[1rem]">
            Hi, I’m <span className="font-semibold">Srinivas K</span> – a Full
            Stack Developer with an MBA in IT and a passion for building modern,
            scalable web applications.
          </p>
          <p>
            Over the years, I’ve worked with agencies like{" "}
            <span className="text-green-500 font-bold">Dsquare Marketing</span>,
            where I developed and maintained WordPress websites using{" "}
            <span className="text-amber-600 font-bold">Elementor</span>,
            customized themes and plugins, and handled performance optimization,
            updates, and security. I also gained valuable experience in
            collaborating with clients to deliver tailored solutions.
          </p>
          <p>
            Today, I specialize in the{" "}
            <span className="text-amber-600 font-bold">MERN stack</span>,{" "}
            <span className="text-amber-600 font-bold">Next.js</span>, and{" "}
            <span className="text-amber-600 font-bold">TypeScript</span>,
            transforming Figma designs into fully responsive, user-friendly
            websites. I’m skilled in frontend development with{" "}
            <span className="underline decoration-green-500">React.js</span>,
            backend development with{" "}
            <span className="underline decoration-green-500">Node.js</span> and{" "}
            <span className="underline decoration-green-500">Express</span>, and
            managing databases like{" "}
            <span className="underline decoration-green-500">MySQL</span> and{" "}
            <span className="underline decoration-green-500">MongoDB</span>.
          </p>
          <p>
            I regularly build and integrate{" "}
            <span className="text-amber-600 font-bold">RESTful APIs</span>,
            deploy applications on platforms like{" "}
            <span className="text-amber-600 font-bold">Netlify</span>,{" "}
            <span className="text-amber-600 font-bold">Vercel</span>, and{" "}
            <span className="text-amber-600 font-bold">Render</span>, and manage
            cloud infrastructure with{" "}
            <span className="text-amber-600 font-bold">AWS EC2</span> and{" "}
            <span className="text-amber-600 font-bold">Elastic Beanstalk</span>.
            I’m also comfortable working in Linux environments, CI/CD pipelines,
            and{" "}
            <span className="underline decoration-green-500">
              Git for version control
            </span>
            .
          </p>
          <p>
            Above all, I enjoy learning new technologies, solving real-world
            problems, and crafting fast, modern, and scalable web apps that
            deliver great user experiences.
          </p>
        </div>
        <Skill />
      </section>
    </FadeInOnScroll>
  );
}

export default About;
