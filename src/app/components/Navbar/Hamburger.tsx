import React from "react";

interface HamburgerProps {
  isMenuOpen: boolean; // Add isMenuOpen prop
  setIsMenuOpen: (isOpen: boolean) => void; // Add setIsMenuOpen prop
}

const Hamburger = ({ isMenuOpen, setIsMenuOpen }: HamburgerProps) => {
  return (
    <>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
};

export default Hamburger;
