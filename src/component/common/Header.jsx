import * as React from "react";
import { Link } from "gatsby";

const Header = ({ active }) => (
  <header className="flex justify-between items-center py-4">
    <Link to="/">
      <h1 className="font-bold text-xl">DawoonRoad</h1>
    </Link>
    <ul className="flex gap-4 items-center">
      <li className={active === "react" && "font-bold underline"}>
        <Link to="/react">React</Link>
      </li>
      <li className={active === "front_end" && "font-bold underline"}>
        <Link to="/front_end">Front End</Link>
      </li>
    </ul>
  </header>
);

export default Header;
