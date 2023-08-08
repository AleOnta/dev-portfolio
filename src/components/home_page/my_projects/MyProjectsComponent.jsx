export const MyProjectsComponent = () => {
  return (
    <div className="container p-6 pb-0 md:p-0 md:px-8">
      <h3 className="text-white text-4xl font-bold font-titles mt-32 mb-20">
        My Projects
      </h3>
      <div className="my-projects-container w-full flex flex-wrap justify-between">
        <div className="project-card stretched-project h-72 m-0 my-2 rounded-lg border border-slate-400 flex items-center justify-between">
          <div className="project-img w-1/3 h-full bg-black"></div>
          <div className="project-body text-slate-400 w-2/3">
            <h4>Project #1</h4>
          </div>
        </div>
        <div className="project-card retired-project h-72 m-0 my-2 rounded-lg border border-slate-400">
          <div className="project-img"></div>
          <div className="project-body text-slate-400">
            <h4>Project #2</h4>
          </div>
        </div>
        <div className="project-card retired-project h-72 m-0 my-2 rounded-lg border border-slate-400">
          <div className="project-img"></div>
          <div className="project-body text-slate-400">
            <h4>Project #3</h4>
          </div>
        </div>
        <div className="project-card stretched-project h-72 m-0 my-2 rounded-lg border border-slate-400 flex items-center justify-between">
          <div className="project-body text-slate-400 w-2/3">
            <h4>Project #4</h4>
          </div>
          <div className="project-img w-1/3 h-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};
