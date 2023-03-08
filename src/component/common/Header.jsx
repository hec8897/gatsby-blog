import * as React from "react";
import { Screen } from "component";
import { Link } from "gatsby";

const Header = () => (
  <Screen>
    <div className="flex justify-between items-center py-4">
      <Link to="/">
        <h1 className="font-bold text-xl">DawoonRoad</h1>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="about">FE</Link>
        </li>
        <li>
          <Link to="develop">JS/TS</Link>
        </li>
        <li>
          <Link to="posting">Posting</Link>
        </li>
      </ul>
    </div>
  </Screen>
);

export default Header;
