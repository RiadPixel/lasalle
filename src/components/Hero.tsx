function Hero() {

    
  const backgroundImage = 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'; 

  return (
    <section className="container mx-auto p-4 -mt-4">
      <div 
        className="relative bg-cover bg-center rounded-lg overflow-hidden h-[600px] flex items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        
        <div className="relative z-10 text-white p-8 md:p-16 flex flex-col items-start justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block"><span className="text-primary">NO</span> PAIN</span>
            <span className="block">NO <span className="text-primary">GAIN</span></span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md">
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