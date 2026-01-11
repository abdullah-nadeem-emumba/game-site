import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = ['Home', 'About Us', 'Portfolio', 'News'];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="flex justify-between text-white pt-9.25 pr-[62.3px] w-full relative">
      <h1 className="text-[29px] font-extrabold">{'Gamecamo{}'}</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav className="flex gap-22 items-center">
          <ul className="flex gap-22 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-primary transition-colors">
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-primary w-33 h-10.5 text-white rounded-md cursor-pointer hover:bg-opacity-90 transition-all">Contact us</button>
        </nav>
      </div>

      {/* Burger Menu Icon */}
      <button className={`md:hidden flex flex-col gap-1.5 z-50 ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close Icon */}
        <button className="absolute top-10 right-10 text-white text-4xl" onClick={closeMenu} aria-label="Close menu">
          ×
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-8 text-2xl">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-primary transition-colors" onClick={closeMenu}>
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-primary px-8 py-3 text-white rounded-md cursor-pointer hover:bg-opacity-90 transition-all mt-4" onClick={closeMenu}>
            Contact us
          </button>
        </nav>
      </div>
    </div>
  );
};
