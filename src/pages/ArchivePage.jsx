import FadeInOnScroll from "../components/FadeInOnScroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ArchiveTable from "../components/ArchiveTable";

function ArchivePage() {
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  return (
    <div className="col-span-6 row-span-4 flex flex-col gap-14 md:gap-28">
      <FadeInOnScroll direction="top" delay={0.3}>
      <section className="mt-[6rem] md:mt-[10rem] dark:bg-[#101828]">
        <h1 className="text-gray-800 dark:text-slate-50 font-SpaceMono font-extrabold text-2xl md:text-7xl">
          Archive
        </h1>
        <p className="text-green-400 font-DMSans text-xl pt-5">
          A big list of things I’ve worked on
        </p>
        <ArchiveTable />
      </section>
      </FadeInOnScroll>
    </div>
  );
}

export default ArchivePage;
