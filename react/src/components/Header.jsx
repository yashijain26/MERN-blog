import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const path = useLocation();
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-5 py-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-200 rounded-lg text-white">
          Yash Technologies
        </span>
        <span className="px-2">   Blog</span>
       
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={FaSearchengin}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10  lg:hidden " color="gray" pill>
        <FaSearchengin />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <MdDarkMode />
        </Button>
        <Link to="/SignIn">
          <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as={"div"}>
          <Link to="/About">About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/Projects"} as={"div"}>
          <Link to="/Projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
