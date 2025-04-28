import "./App.css";
import { useEffect, useState } from "react";

//comonents
import Navbar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import Work from "./components/Work";
// import Certificates from "./components/Certificates";
import CertificatesOne from "./components/CertificatesOne"

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check local storage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    console.log(isDark);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="h-screen dark:bg-[#101828] bg-slate-50 scroll-smooth">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="md:grid px-5 grid-cols-8 grid-rows-4 dark:bg-[#101828]  bg-slate-50">
        <div className="row-span-4">
          <LeftBar toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="col-span-6 row-span-4 flex flex-col gap-14 md:gap-28">
          <Hero />
          <About />
          {/* <Certificates /> */}
          <CertificatesOne />
          <Work />
          <GetInTouch />
        </div>
        <div className="row-span-4 col-start-8">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
