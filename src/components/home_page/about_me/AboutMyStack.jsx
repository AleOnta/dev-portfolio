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
  return (
    <div className="w-full flex flex-col justify-around pt-6">
      <h5 className="font-titles font-bold text-2xl text-white mt-3 mb-2 tracking-tight">
        let myStack = {"{"}
      </h5>
      <ul className="ps-5">
        <li>
          <h6 className="font-titles text-md text-slate-300 pt-3 pb-3 md:pt-6">
            Frontend:
          </h6>
          <div className="flex justify-start items-center flex-wrap gap-5 overflow-hidden">
            <Html5Original size={40} />
            <Css3Original size={40} />
            <SassOriginal size={40} />
            <BootstrapOriginal size={40} />
            <TailwindcssPlain size={40} />
            <JavascriptOriginal size={40} />
            <TypescriptOriginal size={40} />
            <ReactOriginal size={40} />
            <h5 className="font-titles font-bold text-2xl text-white">,</h5>
          </div>
        </li>
        <li>
          <h6 className="font-titles text-md text-slate-300 pt-8 pb-3 ">
            Backend:
          </h6>
          <div className="flex justify-start items-center gap-5">
            <JavaOriginal size={40} />
            <img
              src={HibernateOriginal}
              alt="hibernate framework logo"
              style={{ width: 40 }}
            />
            <SpringOriginal size={40} />
            <PostgresqlOriginal size={40} />
            <h5 className="font-titles font-bold text-2xl text-white">,</h5>
          </div>
        </li>
        <li>
          <h6 className="font-titles text-md text-slate-300 pt-8 pb-3 ">
            Other Skills:
          </h6>
          <div className="flex justify-start items-center gap-5">
            <GitOriginal size={40} />
          </div>
        </li>
      </ul>
      <h5 className="font-titles font-bold text-2xl text-white mt-3 md:mt-6 tracking-tight">
        {"}"}
      </h5>
    </div>
  );
};
