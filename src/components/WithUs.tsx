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

      <div className="container md:mx-auto mt-14 max-w-7xl">
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-0">
          <div className="flex flex-col gap-3 items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-gray-300 rounded-full bg-gray-50 size-44 text-center px-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">1500+</span>
            <span className="text-sm md:text-base font-medium text-gray-800">M²</span>
          </div>
          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex flex-col gap-3 items-center hover:scale-110 transition-all duration-300 justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-44 text-center px-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">120+</span>
            <span className="text-sm md:text-base font-medium text-gray-800">COURS PAR SEMAINE</span>
          </div>

          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex flex-col gap-3 items-center hover:scale-110 transition-all duration-300 justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-44 text-center px-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">7</span>
            <span className="text-sm md:text-base font-medium text-gray-800">J/7</span>
          </div>

          <div className="w-16 hidden md:block md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2" />

          <div className="flex flex-col gap-3 items-center hover:scale-110 transition-all duration-300 justify-center border-2 border-gray-300 rounded-full bg-gray-50 size-44 text-center px-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">1+</span>
            <span className="text-sm md:text-base font-medium text-gray-800">PISCINE CHAUFFÉE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
