function Hero() {
  const backgroundImage = 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'; 

  return (
    <section className="p-4 -mt-4">
      <div 
        className="relative bg-cover bg-center rounded-2xl overflow-hidden min-h-[90vh] flex items-center justify-start"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        
        <div className="relative z-10 text-white p-8 md:p-16 flex flex-col items-start h-full w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block"><span className="text-primary">NO</span> PAIN</span>
            <span className="block">NO <span className="text-primary">GAIN</span></span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">
            We believe that fitness is not just a destination; it's a journey. Our state-of-the-art facility is designed to inspire and empower you to reach your health and wellness goals.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full transition duration-300">Get Started</button>
            <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full transition duration-300">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 