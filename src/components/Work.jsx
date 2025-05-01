import { Link } from "react-router-dom";
import UrlShortener from "./UrlShortener";
import NotesApp from "./NotesApp";
import IMDBCLONE from "./IMDBCLONE";

import Card from "./Card";
import FadeInOnScroll from "./FadeInOnScroll";
import { useEffect, useState } from "react";

import Data from "../data";

function Work() {
  const [noOfCards, setNoOfCards] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <section id="work">
      <h1 className="mb-[2rem]   text-gray-600 font-extrabold  text-2xl dark:text-gray-300 font-SpaceMono flex flex-row flex-nowrap items-center">
        <span className="text-green-500 ">03.</span> Some Things I’ve Built
        <span class="flex-grow  block border-t mx-5 border-gray-500" />
      </h1>
      <div className="flex gap-[5rem] flex-col pt-10">
        <UrlShortener />
        <IMDBCLONE />
        <NotesApp />
      </div>
      <div className="pt-[10rem] flex  flex-col items-center justify-center">
        <FadeInOnScroll direction="up" delay={0.3}>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 ">
            Other Noteworthy Projects
          </h1>
          <p className="text-green-500 text-sm text-center underline ">
            <Link to={"/archive"}>view the archive</Link>
          </p>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] pt-[2rem]">
          {data
            .slice(0, 6)
            .map((projectData, index) =>
              <Card key={index} projectData={projectData} />
            )}

          {noOfCards &&
            data
              .slice(6)
              .map((projectData, index) =>
                <Card key={index} projectData={projectData} />
              )}
        </div>
        <button
          onClick={() => setNoOfCards(!noOfCards)}
          className="group relative mt-[5rem] inline-block bg-green-400 text-sm font-medium text-green-400  rounded-md"
          href="#"
        >
          <span className="absolute inset-0  border-green-300   rounded-md" />
          <span
            className="block border-2 border-green-400 bg-slate-50 dark:bg-[#101828] rounded-md px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
            style={{ "font-family": "Space Mono" }}
          >
            {noOfCards ? "Show Less" : "Show More"}
          </span>
        </button>
      </div>
    </section>
  );
}

export default Work;
