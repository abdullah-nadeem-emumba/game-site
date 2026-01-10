export const Navbar = () => {
  return (
    <div className="flex justify-between text-white pt-9.25 pr-[62.3px] w-full">
      <h1 className="text-[29px] font-extrabold">{'Gamecamo{}'}</h1>
      <div>
        <nav className="flex gap-22 items-center">
          <ul className="flex gap-22 items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>News</li>
          </ul>
          <button className="bg-primary w-33 h-10.5 text-white rounded-md cursor-pointer">Contact us</button>
        </nav>
      </div>
    </div>
  );
};
