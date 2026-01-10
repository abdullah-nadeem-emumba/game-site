import { Navbar } from '../../components';
import { Sidebar } from '../../components/sidebar';
import { joystick } from '../../assets';

export const HeroSection = () => {
  return (
    <div className="flex w-full gap-20.5 pr-10 pb-10 bg-[url(bg-vector-1.png)] bg-no-repeat bg-cover">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main className="flex justify-between items-center pt-22">
          <div className="space-y-4.25 max-w-131.75">
            <p className="text-primary font-bold text-xl">Created by Abdullah Nadeem</p>
            <h2 className="text-[50px] font-bold text-white">Work that we produce for our clients</h2>
            <p className="font-medium text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
            <button className="bg-primary mt-16 text-white rounded-full px-4 h-13 w-48.75 font-medium cursor-pointer">Get more details</button>
          </div>
          <div className="img-container">
            <img src={joystick} className="-ml-20" />
          </div>
        </main>
        <div className="flex justify-center">
          <h1 className="w-fit font-eurostile font-bold text-[250px] tracking-[.25em] bg-linear-to-b from-[#838383] to-[#000000] bg-clip-text text-transparent">
            camos
          </h1>
        </div>
      </div>
    </div>
  );
};
