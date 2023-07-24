import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/context";

function SearchBar(props) {
  const { employeeName, setEmployeeName } = useContext(AppContext);
  return (
    <form
      action=""
      className="searchbar"
      onSubmit={() => {
        let searchtextinput = document.querySelector("#searchtext").value;
        setEmployeeName(searchtextinput);
      }}
    >
      <input type="text" placeholder="Search" id="searchtext" />
      <input type="submit" value="submit" />
    </form>
  );
}

export default SearchBar;
