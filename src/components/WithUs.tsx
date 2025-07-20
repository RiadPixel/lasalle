import { CircleDotDashed, NotebookPen } from "lucide-react";
import { BsMoonStarsFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";

export default function WithUs() {
  return (
    <section className="py-8 px-4">
      <div className="flex flex-col gap-3 px-6 md:px-40">
        <h2 className="text-4xl md:text-xl font-medium text-center md:text-left">
          COME TO A RESULT
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-4 text-center md:text-left">
          <span className="text-5xl md:text-6xl font-extrabold">WITH US</span>
          <p className="max-w-[300px] mx-auto md:mx-0 text-[16px] max-md:text-lg text-gray-700">
            Ready to take the first step towards a healthier, stronger you?
          </p>
        </div>
      </div>

      <div className="container mt-14 max-w-7xl">
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-0">
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-36 md:size-40">
            <NotebookPen className="text-gray-800 size-14 md:size-16" />
          </div>

          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex items-center justify-center bg-black rounded-full size-36 md:size-40">
            <CgGym className="text-white size-14 md:size-16" />
          </div>

          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-36 md:size-40">
            <BsMoonStarsFill className="text-gray-800 size-14 md:size-16" />
          </div>

          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-36 md:size-40">
            <CircleDotDashed className="text-gray-800 size-14 md:size-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
