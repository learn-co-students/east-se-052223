import React, { useState } from "react";

import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("");
  const [checkedLocation, setCheckedLocation] = useState(false);

  return (
    <div className="app">
      <Header
        setSearch={setSearch}
        checkedLocation={checkedLocation}
        setCheckedLocation={setCheckedLocation}
      />
      <ListingsContainer search={search} checkedLocation={checkedLocation} />
    </div>
  );
}

export default App;
