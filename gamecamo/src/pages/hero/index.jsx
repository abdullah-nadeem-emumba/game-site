import { Navbar } from '../../components';
import { Sidebar } from '../../components/sidebar';
import { joystick } from '../../assets';

export const HeroSection = () => {
  return (
    <div className="flex w-full gap-20.5 pl-4 md:pl-0 pr-4 md:pr-10 pb-10 bg-[url(bg-vector-1.png)] bg-no-repeat bg-cover">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <main className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-22 gap-8 md:gap-0 overflow-hidden">
          <div className="space-y-3 md:space-y-4.25 max-w-full md:max-w-131.75">
            <p className="text-primary font-bold text-lg md:text-xl">Premium Gaming Services</p>
            <h2 className="text-3xl md:text-[50px] font-bold text-white leading-tight">Elite game customization and enhancements</h2>
            <p className="font-medium text-white text-sm md:text-base">
              Experience top-tier gaming modifications and enhancements tailored to your playstyle. Our expert team delivers professional-grade
              customizations for competitive and casual gamers alike.
            </p>
            <button className="bg-primary mt-8 md:mt-16 text-white rounded-full px-4 h-13 w-48.75 font-medium cursor-pointer">
              Get more details
            </button>
          </div>
          <div className="img-container shrink-0 max-w-full">
            <img src={joystick} alt="Gaming controller" className="ml-0 md:ml-0 xl:-ml-20 w-64 md:w-72 lg:w-80 xl:w-180 max-w-full" />
          </div>
        </main>
        <div className="flex justify-center mt-8 md:mt-0">
          <h1 className="w-fit font-eurostile font-bold text-6xl sm:text-8xl md:text-[150px] lg:text-[200px] xl:text-[250px] tracking-[.15em] md:tracking-[.25em] bg-linear-to-b from-[#838383] to-[#000000] bg-clip-text text-transparent">
            camos
          </h1>
        </div>
      </div>
    </div>
  );
};
