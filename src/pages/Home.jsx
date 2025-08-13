//comonents
import Hero from "../components/Hero";
import About from "../components/About";
import GetInTouch from "../components/GetInTouch";
import Work from "../components/Work";
import Certificates from "../components/Certificates";
import JobExperience from "../components/JobExperience";
import Internship from "../components/Internship";

function Home() {
  return (
    <div className="col-span-6 row-span-4 flex flex-col gap-14 md:gap-28">
      <Hero />
      <About />
      <JobExperience />
      {/* <Internship/> */}
      <Certificates />
      <Work />
      <GetInTouch />
    </div>
  );
}

export default Home;
