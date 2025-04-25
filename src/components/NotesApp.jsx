import FadeInOnScroll from "./FadeInOnScroll";

function   NotesApp() {
  return (
    <FadeInOnScroll direction="up" delay={0.3}>
      <div className="gap-1  flex relative  shadow-md p-3 rounded-lg bg-[#f5f5f5] cursor-pointer dark:bg-slate-800 ">
        <div className=" flex-1 h-[300px] lg:w-[70vw]  lg:h-[380px]  blur-sm hover:blur-0 bg-center">
          <img src="/NotesApp1.jpg" className="w-[100%] h-[100%]  rounded-md" />
        </div>
        <div className="w-full lg:w-[30vw] flex flex-col items-start justify-around lg:gap-[5rem] lg:items-end">
          <div className="flex  flex-col lg:items-end">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Featured Project
            </h3>
            <h1 className="text-xl font-bold text-gray-600 font-SpaceMono dark:text-green-400">
              Notes App
            </h1>
          </div>
          <div className="lg:absolute lg:bg-slate-200 lg:w-[510px] lg:py-5 lg:px-5 rounded-md lg:shadow-md  lg:dark:bg-gray-800">
            <p className="text-sm font-DMSans text-gray-600 dark:text-gray-300">
              NotesApp is a simple and responsive note-taking app built using
              React Native (Expo). It allows users to create, edit, and delete
              notes with data stored locally using async-storage. The app
              features smooth animations with react-native-reanimate and
              intuitive gestures using react-native-gesture-handler. it offers a
              clean and user-friendly interface.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end lg:text-end lg:pt-5 ">
            <p className="text-[1rem] font-SpaceMono  text-gray-800 dark:text-slate-400">
              react native, CSS, async-storage, android App, Dark Mode, expo.dev
            </p>
            <div className="flex items-end gap-2">
              <a
                href="https://github.com/KolipakaSrinivas/React-Native-Expo"
                target="_blank"
                className="text-green-500 fill-current"
              >
                <svg
                  width={20}
                  height={20}
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
              <a
                href="https://drive.google.com/file/d/10HXsgqm4x6jLfFFCDNaDEt-gppkUiphl/view?usp=drive_link"
                target="_blank"
                className="text-green-500 fill-current"
              >
                <svg
                  width={20}
                  height={20}
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
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default   NotesApp;
