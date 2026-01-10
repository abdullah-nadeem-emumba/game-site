export const Navbar = () => {
  return (
    <div className="flex justify-between text-white pt-9.25 pr-[62.3px]">
      <h1 className="text-[29px] font-extrabold">{'Gamecamo{}'}</h1>
      <div>
        <nav className="flex gap-5 items-center">
          <ul className="flex gap-5 items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>News</li>
          </ul>
          <button className="bg-[#FA9021] w-33 h-10.5 text-white rounded-md">Contact us</button>
        </nav>
      </div>
    </div>
  );
};
