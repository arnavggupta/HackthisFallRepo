import Roadmap from "./Roadmap";

function Resources() {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <p className=" font-semibold text-5xl">
        Start your study with the Roadmap
      </p>
      <div className=" h-[50vh] flex items-center ">
        <Roadmap />
      </div>
      <div className="text-xl border-2 py-2 px rounded-full px-6 border-blue-500">
        <a href="https://react.dev/">Resources Link</a>
      </div>
    </div>
  );
}

export default Resources;
