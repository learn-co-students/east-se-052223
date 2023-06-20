import React from "react";

import Search from "./Search";
import Checkbox from "./Checkbox";

function Header({ setSearch, checkedLocation, setCheckedLocation }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} />
      <Checkbox
        checkedLocation={checkedLocation}
        setCheckedLocation={setCheckedLocation}
      />
    </header>
  );
}

export default Header;
