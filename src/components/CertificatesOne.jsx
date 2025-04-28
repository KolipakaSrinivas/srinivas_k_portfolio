import FadeInOnScroll from "./FadeInOnScroll";
import React from "react";

function CertificatesOne() {
  const [activeTab, setActiveTab] = React.useState(0);
  const certifications = [
    {
      shortTitle: "Front End Dev",
      title: "Front End Development Libraries",
      subheading:
        "Completed 300+ hours of hands-on learning covering React, Redux, Bootstrap, jQuery.",
      provider: "freeCodeCamp",
      reason: "Libraries Certification",
      Credential:
        "https://www.freecodecamp.org/certification/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3/front-end-development-libraries",
      date: "june 2024",
      highlights: [
        "Front End Development Libraries Certification, demonstrating proficiency in modern front-end tools and frameworks.",
        "Built responsive UIs using Bootstrap, and utility classes for mobile-first design.",
        "Developed dynamic SPAs with React, props, state, and lifecycle methods for interactive user experiences.",
        "Managed application state using Redux, implementing actions, reducers, and the store to handle complex data flows.",
        "Enhanced UI with jQuery and DOM manipulation.",
        "Styled applications using Sass, employing variables and functions for modular and maintainable CSS."
      ]
    },
    {
      shortTitle: "Back End Dev",
      title: "Back End Development and APIs",
      subheading:
        "Completed 300+ hours of hands-on learning covering Back End Development and APIs.",
      reason: "APIs Certification",
      provider: "freeCodeCamp",
      Credential:
        "https://www.freecodecamp.org/certification/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3/back-end-development-and-apis",
      date: "May 2024",
      highlights: [
        "Designed and deployed robust RESTful APIs using Node.js and Express.js, understanding of routing, and middleware for scalable backend architecture.",
        "NoSQL databases with MongoDB and Mongoose and schema modeling to ensure data integrity and flexible document storage.",
        "Developed backend systems by integrating third-party APIs and creating endpoints that handle complex client-server.",
        "Express middleware for security and routing, maintainable server logic while ensuring smooth handling of HTTP requests and responses.",
        "Implemented token-based authentication and data validation, following backend security best practices to protect user data.",
        "Built and deployed real-world backend projects and gaining experience with debugging, deployment, and API testing using tools like Postman."
      ]
    },
    {
      shortTitle: "JavaScript DSA",
      title: "Legacy JavaScript Algorithms and Data Structures",
      subheading:
        "Completed 300+ hours of hands-on learning covering JavaScript Algorithm and Data Structures.",
      provider: "freeCodeCamp",
      reason: "Algorithms and Data Structures Certification",
      Credential:
        "https://www.freecodecamp.org/certification/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3/javascript-algorithms-and-data-structures",
      date: "April 2024",
      highlights: [
        "Mastered Core JavaScript Concepts: Gained proficiency in  functions and ES6+ features like arrow functions, destructuring, and template literals.​",
        "Implemented Fundamental Data Structures: Built and manipulated arrays, objects, stacks, queues, linked lists, trees, graphs, and hash maps, understanding their use cases and performance implications.",
        "Solved a variety of algorithmic challenges, enhancing logical thinking and the ability to write efficient code.",
        "Functional Programming Principles: Utilized concepts like pure functions, higher-order functions, and recursion to write clean and maintainable code.",
        "Debugging and Testing Abilities: Developed skills in identifying and fixing bugs, writing test cases, and ensuring code reliability and correctness.​",
        "l also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP)."
      ]
    },
    {
      shortTitle: "Web Dev",
      title: "Full Stack Web Development Internship Program",
      // "Completed 300+ hours of hands-on learning covering React, Redux, Bootstrap, jQuery, and Sass.",
      subheading: "",
      provider: "Edureka",
      reason: "internship",
      Credential:
        "https://www.edureka.co/lms/certificate/eadbec64970ff1f71af79be32ef00625",
      date: "March 2023",
      highlights: [
        "Comprehensive Understanding of web Gained in-depth knowledge of  (SPA), enabling the design and implementation of scalable and secure solutions",
        "Hands-On Experience with vs code Worked extensively with tools such as postman, enhancing practical skills through real-world projects",
        "Project-Based Learning: Completed multiple projects, including full stack project, demonstrating the ability to apply theoretical knowledge in practical scenarios.​",
        "Collaboration and Problem-Solving Skills: Engaged in collaborative environments, honing problem-solving abilities and effective communication within team settings."
      ]
    }
  ];
  return (
    <FadeInOnScroll direction="up" delay={0.3}>
      <section>
        <h1 className="mb-[1rem] md:mb-[2rem] font-SpaceMono  text-gray-600 font-extrabold  text-2xl dark:text-slate-300 flex flex-row flex-nowrap items-center">
          <span className="text-green-500">02. </span>
          certifications & internship
          <span class="flex-grow  block border-t mx-5 border-gray-500" />
        </h1>
        <div class="md:flex justify-start gap-1 md:gap-5">
          <ul class="flex flex-col gap-3  flex-wrap pt-[2rem]  md:items-stretch md:flex-col  w-full justify-around md:justify-start space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 md:mb-0 md:w-[13rem]">
            {certifications.map((certification, index) =>
              <li>
                <button
                  onClick={() => setActiveTab(index)}
                  class={`px-4 py-3 ${activeTab == index
                    ? "bg-green-500 text-white dark:bg-green-500 dark:border-none"
                    : "bg-slate-200 hover:bg-gray-300"} text-sm  text-gray-600  dark:text-slate-200 rounded-lg w-full dark:bg-[#101828] dark:border-2  dark:border-green-400`}
                >
                  {certification.shortTitle}
                </button>
              </li>
            )}
          </ul>
          <div class="p-3 md:p-5 bg-slate-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-[#101828] rounded-lg w-full">
            {certifications.map((certification, index) =>
              <div
                className={`${activeTab !== index &&
                  "hidden"} text-gray-500  list-outside  transition-colors  delay-100 ease-in-out`}
              >
                <div className="flex flex-col md:flex-row items-center gap-2 text-xl  font-bold text-black dark:text-slate-100">
                  <h1 className=" ">{certification.title} </h1>
                  <a
                    href={certification.Credential}
                    className="text-sm text-blue-700 hover:text-blue-400 font-medium underline flex gap-1"
                  >
                    {" "}Show Credential{" "}
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-4 pt-1"
                    >
                      <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
                    </svg>
                  </a>{" "}
                </div>
                <h1 className="font-bold text-sm  text-gray-400 font-Space-Mono">
                  {certification.provider} issued {certification.date}
                </h1>
                <p className="pb-5 text-gray-500 md:w-[70%] lg:w-[90%]">
                  {certification.subheading}
                </p>
                <ul
                  style={{
                    "list-style-type": "square",
                    "font-family": "DM Sans"
                  }}
                >
                  {certification.highlights.map(task =>
                    <li className="decoration-clone pb-1 text-gray-700 dark:text-slate-400
                    ">
                      {task}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}

export default CertificatesOne;
