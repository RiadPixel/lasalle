import { CircleDotDashed, NotebookPen } from "lucide-react";
import { BsMoonStarsFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";

export default function WithUs() {
  return (
    <section className="px-10 py-5">
      <h2 className="mb-4 text-3xl font-normal">COME TO A RESULT</h2>
      <span className="text-4xl font-extrabold md:text-7xl ">WITH US</span>

      <div className="container mx-auto mt-14 max-w-7xl">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-0">
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-48">
            <NotebookPen className="text-gray-800 size-20" />
          </div>

          <div className="w-24 h-1 border-t-2 border-gray-400 border-dotted lg:w-32 lg:mx-2"></div>

          <div className="flex items-center justify-center bg-black rounded-full size-48">
            <CgGym className="text-white size-20" />
          </div>

          <div className="w-24 h-1 border-t-2 border-gray-400 border-dotted lg:w-32 lg:mx-2"></div>

          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-48">
            <BsMoonStarsFill className="text-gray-800 size-20" />
          </div>

          <div className="w-24 h-1 border-t-2 border-gray-400 border-dotted lg:w-32 lg:mx-2"></div>

          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-48">
            <CircleDotDashed className="text-gray-800 size-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
