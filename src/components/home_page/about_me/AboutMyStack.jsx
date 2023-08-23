import useWindowDimensions from "../../../hooks/useWindowDimensions";
import HibernateOriginal from "../../../assets/svg/hibernate.svg";
import {
  BootstrapOriginal,
  Css3Original,
  GitOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  SassOriginal,
  SpringOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";

export const AboutMyStack = () => {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  function defineSize() {
    if (width < 370) {
      return 25;
    } else if (width >= 370 && width < 436) {
      return 30;
    } else if (width >= 436 && width < 536) {
      return 35;
    } else if (width >= 536 && width < 640) {
      return 40;
    } else if (width >= 640 && width < 768) {
      return 45;
    } else if (width >= 768 && width < 886) {
      return 30;
    } else if (width >= 886 && width < 1024) {
      return 32;
    } else if (width >= 1024 && width < 1536) {
      return 35;
    } else {
      return 45;
    }
  }

  return (
    <div className="w-full flex flex-col justify-around p-6 bg-gun-metal bg-opacity-50 rounded-lg shadow-md">
      <h5 className="font-titles font-bold text-2xl text-white mt-3 mb-2 tracking-tight">
        let myStack = {"{"}
      </h5>
      <ul className="ps-5">
        <li>
          <h6 className="font-titles text-base md:text-xs font-medium text-slate-300 pt-3 pb-3 md:pt-4">
            Front end:
          </h6>
          <div
            className={`flex items-center ${
              width < 370
                ? "gap-1"
                : width >= 370 && width < 436
                ? "gap-2"
                : width >= 436 && width < 536
                ? "gap-3"
                : width >= 536 && width < 640
                ? "gap-4"
                : width >= 640 && width < 768
                ? "gap-5"
                : width >= 768 && width < 1024
                ? "gap-2"
                : width >= 1024 && width < 1280
                ? "gap-4"
                : width >= 1280 && width < 1536
                ? "gap-5"
                : "gap-8"
            }`}
          >
            <Html5Original size={defineSize()} />
            <Css3Original size={defineSize()} />
            <SassOriginal size={defineSize()} />
            <BootstrapOriginal size={defineSize()} />
            <TailwindcssPlain size={defineSize()} />
            <JavascriptOriginal size={defineSize()} />
            <TypescriptOriginal size={defineSize()} />
            <ReactOriginal size={defineSize()} />
            <h5 className="font-titles font-bold text-2xl text-white">,</h5>
          </div>
        </li>
        <li>
          <h6 className="font-titles text-base md:text-xs font-medium text-slate-300 pt-5 pb-3 ">
            Back end:
          </h6>
          <div className="flex justify-start items-center gap-5">
            <JavaOriginal size={defineSize()} />
            <img
              src={HibernateOriginal}
              alt="hibernate framework logo"
              style={{ width: defineSize() }}
            />
            <SpringOriginal size={defineSize()} />
            <PostgresqlOriginal size={defineSize()} />
            <h5 className="font-titles font-bold text-2xl text-white">,</h5>
          </div>
        </li>
        <li>
          <h6 className="font-titles text-base md:text-xs font-medium text-slate-300 pt-5 pb-3 ">
            Other Skills:
          </h6>
          <div className="flex justify-start items-center gap-5">
            <GitOriginal size={defineSize()} />
          </div>
        </li>
      </ul>
      <h5 className="font-titles font-bold text-2xl text-white mt-3 md:mt-6 tracking-tight">
        {"}"}
      </h5>
    </div>
  );
};
