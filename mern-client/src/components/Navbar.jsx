import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { FaBarsStaggered, FaBlog ,FaXmark} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //Togglemenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //nav items here
  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "Shop", path: "/shop" },
    { Link: "Dashboard", path: "/admin/dashboard" },
    { Link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/*logo  */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-blog"/>Books</Link>

          {/* Nav items for large items */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{item.Link}</Link>
              </li>
            ))}
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button><FaBarsStaggered className="w-5 hover:text-blue-700"/></button>
          </div>

          {/* menu buttons for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
                { isMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5"/> }
            </button>
          </div>
        </div>

        {/* For small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {navItems.map((item, index) => (
                <Link key={index} to={item.path} className="block text-base text-white uppercase cursor-pointer">{item.Link}</Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
