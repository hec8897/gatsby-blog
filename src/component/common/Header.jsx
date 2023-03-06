import * as React from "react";
import { Screen } from "component";
import { Link } from "gatsby";

const Header = () => (
  <Screen>
    <div className="flex justify-between items-center py-4">
      <h1 className="font-bold text-xl">DawoonRoad</h1>
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="posting">posting</Link>
        </li>
        <li>
          <Link to="develop">develop</Link>
        </li>
      </ul>
    </div>
  </Screen>
);

export default Header;
