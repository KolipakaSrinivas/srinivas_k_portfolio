import FadeInOnScroll from "./FadeInOnScroll";
function RightBar() {
  return (
    <ul className="hidden  fixed bottom-0 right-14 md:flex flex-col items-center gap-5 mt-5 font-SpaceMono">
      <FadeInOnScroll direction="kk" delay={1.7}>

      <a
        href="mailto:kolipakasrinivas456@gmail.com"
        className="[writing-mode:vertical-rl] text-sm dark:text-slate-300 dark:hover:text-green-400"
        >
        kolipakasrinivas456@gmail.com
      </a>
      <li className="w-[2px]  h-28 mt-5 ml-2 bg-black dark:bg-slate-300 z-10" />
      </FadeInOnScroll>
    </ul>
  );
}

export default RightBar;
