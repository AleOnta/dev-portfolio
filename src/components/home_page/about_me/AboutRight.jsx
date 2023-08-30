import MyStackComponent from "./MyStackComponent";

export const AboutRight = () => {
  return (
    <div className="about-me-right col-span-6 flex flex-col items-center justify-between p-6 md:p-0 md:pe-8">
      <div className="my-9 md:my-0">
        <h5 className="font-titles font-bold text-2xl xs:mb-5 xs:text-3xl md:text-4xl text-white mb-2 md:mb-12  lg:mb-10 tracking-tight">
          Who am I?
        </h5>
        <div className="rounded-lg bg-gun-metal bg-opacity-50 px-4 py-3 md:bg-inherit lg:bg-gun-metal lg:bg-opacity-50 p-3 md:p-0 lg:px-4 lg:py-4 shadow-md md:shadow-none lg:shadow-md">
          <p className="text-snow-white text-sm xs:text-base 2xl:text-base ">
            I am a 24 years old{" "}
            <span className="text-slate-400 font-semibold">
              Junior Full-Stack Web Developer
            </span>{" "}
            based in Milan=[Italy], that had always been passionate about{" "}
            <span className="text-slate-400 font-semibold">technology </span>
            and everything that revolves around it.
          </p>
          <p className="text-snow-white text-sm  xs:text-base 2xl:text-base">
            In June 2023 I have successfully completed the{" "}
            <span className="text-slate-400 font-semibold">
              Epicode's Junior Web Developer bootcamp
            </span>
            , that is an intensive 6-months training course composed of over
            1000 hours of{" "}
            <span className="text-slate-400 font-semibold">live-coding</span>{" "}
            lessons, daily{" "}
            <span className="text-slate-400 font-semibold">exercises</span> and
            team's{" "}
            <span className="text-slate-400 font-semibold">projects</span>.
          </p>
          <p className="text-snow-white text-sm xs:text-base 2xl:text-base ">
            As a Jr. Full-Stack I really enjoy both sides of{" "}
            <span className="text-slate-400 font-semibold">
              web development
            </span>{" "}
            and I intend to continue forming me by deepening the technologies I
            already know and studying new ones.
          </p>
        </div>
      </div>
      <MyStackComponent />
    </div>
  );
};
