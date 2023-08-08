import { AboutMyStack } from "./AboutMyStack";

export const AboutRight = () => {
  return (
    <div className="about-me-right col-span-6 flex flex-col items-center justify-between p-6 md:p-0 md:pe-8">
      <div>
        <h5 className="font-titles font-bold text-2xl text-white mt-3 mb-2 tracking-tight">
          Who am I?
        </h5>
        <p className="text-slate-400 text-sm xl:text-base">
          I am a 24 years old{" "}
          <span className="text-slate-300 font-semibold">
            Junior Full-Stack Web Developer
          </span>{" "}
          based in Milan=[Italy], that had always been passionate about{" "}
          <span className="text-slate-300 font-semibold">technology </span>
          and everything that revolves around it.
        </p>
        <p className="text-slate-400 text-sm xl:text-base">
          In June 2023 I have successfully completed the{" "}
          <span className="text-slate-300 font-semibold">
            Epicode's Junior Web Developer bootcamp
          </span>
          , that is an intensive 6-months training course composed of over 1000
          hours of{" "}
          <span className="text-slate-300 font-semibold">live-coding</span>{" "}
          lessons, daily{" "}
          <span className="text-slate-300 font-semibold">exercises</span> and
          team's <span className="text-slate-300 font-semibold">projects</span>.
        </p>
        <p className="text-slate-400 text-sm xl:text-base">
          As a Jr. Full-Stack I really enjoy both sides of{" "}
          <span className="text-slate-300 font-semibold">web development</span>{" "}
          and I intend to continue forming me by deepening the technologies I
          already know and studying new ones.
        </p>
      </div>
      <AboutMyStack />
    </div>
  );
};
