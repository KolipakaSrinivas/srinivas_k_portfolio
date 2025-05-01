import React from "react";

function ArchiveTable() {
  const Projects = [
    {
      title: "Form Two",
      technology: ["React.js", "typescript", "tailwindcss", "form validation"],
      githubLink: "https://github.com/KolipakaSrinivas/TaskTwo",
      link: "https://nablasol-task-two.netlify.app/"
    },

    {
      title: "Trevland",
      technology: [
        "html",
        "CSS",
        "Javascript",
        "carousel",
        "jquery",
        "OwlCarousel2",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/Trevland",
      link: "https://trevland01.netlify.app/"
    },
    {
      title: "u-coda",
      technology: [
        "html",
        "CSS",
        "Javascript",
        "localstorage",
        "justinaguilar.com/animations",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/U-Coda",
      link: "https://u-coda01.netlify.app/"
    },
    {
      title: "Takeaway & delivery",
      technology: [
        "html",
        "CSS",
        "Javascript",
        "animations_css",
        "localstorage",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/Takeaway-delivery",
      link: "https://takeaway-delivery01.netlify.app/"
    },

    {
      title: "React Facts",
      technology: [
        "React.js",
        "CSS",
        "Javascript",
        "Dark Mode",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/React-static--app",
      link: "https://melodic-bombolone-9975e1.netlify.app/"
    },
    {
      title: "My Travel Journal",
      technology: [
        "React.js",
        "CSS",
        "Vite",
        "Javascript",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/My-Travel-Journal",
      link: "https://voluble-concha-f65c46.netlify.app/"
    },
    {
      title: "airbnb",
      technology: [
        "React.js",
        "CSS",
        "Vite",
        "Javascript",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/airbnb",
      link: "https://glowing-croissant-61e557.netlify.app/"
    },
    {
      title: "Move Search",
      technology: [
        "React.js",
        "CSS",
        "Vite",
        "Javascript",
        "TMDB API",
        "responsive design"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/moveSearchApp",
      link: "https://gleaming-youtiao-a46ba2.netlify.app/"
    },
    {
      title: "My Bhakri",
      technology: [
        "React.js",
        "CSS",
        "Vite",
        "Javascript",
        "redux",
        "React redux"
      ],
      githubLink: "https://github.com/KolipakaSrinivas/CakeShop_React_Redux",
      link: "https://glistening-daifuku-ec6c83.netlify.app/"
    },
    {
      title: "Monsters-Rolodex",
      technology: ["React.js", "CSS", "Javascript", "json placeholder"],
      githubLink: "https://github.com/KolipakaSrinivas/Monsters-Rolodex",
      link: "https://jade-kleicha-50b366.netlify.app/"
    },
    {
      title: "BMI",
      technology: ["html", "CSS", "Javascript"],
      githubLink: "https://github.com/KolipakaSrinivas/BMI"
    },
    {
      title: "zomato clone",
      technology: ["React.js", "CSS", "Javascript"],
      githubLink: "https://github.com/KolipakaSrinivas/zomato_clone",
      link: "https://jade-kleicha-50b366.netlify.app/"
    },
    {
      title: "Form One",
      technology: ["React.js", "typescript", "tailwindcss", "form validation"],
      githubLink: "https://github.com/KolipakaSrinivas/TaskOne",
      link: "https://nablasol-task-one.netlify.app/"
    },
    {
      title: "netflix-clone",
      technology: ["html", "CSS", "Javascript"],
      githubLink: "https://github.com/KolipakaSrinivas/netflix-clone"
    },
    {
      title: "Bored Bot",
      technology: ["html", "CSS", "Javascript"],
      githubLink: "https://github.com/KolipakaSrinivas/Bored-Bot"
    },
    {
      title: "REST_API",
      technology: ["Node JS", "Mongodb", "Postman", "mongoose"],
      githubLink:
        "https://github.com/KolipakaSrinivas/REST_API_With_Node_EXPRESS_MONGODB-"
    },
    {
      title: "Blog Space",
      technology: ["html", "CSS", "responsive design"],
      githubLink: "https://github.com/KolipakaSrinivas/BlogSpace"
    },
    {
      title: "Coffee Shop app",
      technology: ["React Native", "Expo", "css", "responsive design"],
      githubLink:
        "https://github.com/KolipakaSrinivas/React-Native-Expo/tree/StickerSmash"
    },
    {
      title: "Sticker Smash",
      technology: ["React Native", "Expo", "css", "responsive design"],
      githubLink:
        "https://github.com/KolipakaSrinivas/REST_API_With_Node_EXPRESS_MONGODB-"
    },
    {
      title: "Course Management App",
      technology: ["React.js", "CSS", "tailwindCS", "Typescript"],
      githubLink: "https://github.com/KolipakaSrinivas/course-management-app",
      link: "https://course-management-app.netlify.app/"
    },
    {
      title: "layout practice",
      technology: ["html", "CSS", "grid", "flex"],
      githubLink: "https://github.com/KolipakaSrinivas/layout_practice"
    },
    {
      title: "background ganator",
      technology: ["html", "CSS", "javascript"],
      githubLink: "https://github.com/KolipakaSrinivas/backgroundganator"
    }
  ];
  return (
    <div className="overflow-x-auto mt-5 relative shadow-md sm:rounded-lg">
      <table className=" border-2 border-slate-500 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase  dark:text-slate-50">
          <tr className="border-2 border-slate-500 ">
            <th scope="col" className="py-3 px-6 font-SpaceMono ">
              Title
            </th>
            <th scope="col" className="py-3 px-6 font-SpaceMono">
              Built with
            </th>
            <th scope="col" className="py-3 px-6 font-SpaceMono">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {Projects.map(project =>
            <tr
              key={project.title}
              className="bg-white border-2 border-slate-500   dark:bg-[#101828]  hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-SpaceMono font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {project.title}
              </th>
              <td className="py-4 px-6 font-SpaceMono">
                {project.technology.join(" . ")}
              </td>
              <td className="py-4 px-6 text-right flex items-center gap-2 justify-center">
                <a
                  target="_blnack"
                  href={project.githubLink}
                  className="hover:text-green-500 pt-2"
                >
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
                {project.link &&
                  <a
                    href={project.link}
                    target="_blanck"
                    className="hover:text-green-500"
                  >
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
                  </a>}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ArchiveTable;
