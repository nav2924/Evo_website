import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { close, logo, menu } from "../assets"; // Ensure these paths are correct
import { navLinks } from "../constants"; // Ensure these paths are correct

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleRefresh = () => {
    window.location.reload(); // Refreshes the current page
  };

  return (
    <nav className="w-full flex  justify-between items-center navbar">
      <img src={logo} alt="company-logo" className="w-[250px] h-[160px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-10`}
          onClick={handleRefresh}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite`}
          onClick={() => setActive("Features")}
        >
          <Link to="/course">Course</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
