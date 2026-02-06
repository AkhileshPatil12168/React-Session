import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="h-10 w-full bg-gray-200 flex space-x-4 justify-end px-10">
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/about"}>
        <p>About</p>
      </Link>
      <Link to={"/contact"}>
        <p>Contact</p>
      </Link>
    </div>
  );
};
