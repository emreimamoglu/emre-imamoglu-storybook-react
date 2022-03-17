import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Styles from "./Searchbar.styles";

function Searchbar(props) {
  const styles = Styles(props);
  const { placeholder } = props;
  const [hover, setHover] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div
      style={styles.searchBox}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title="SearchComponent"
    >
      <input
        style={
          hover
            ? { ...styles.searchInput, ...styles.searchBoxHover }
            : { ...styles.searchInput }
        }
        type="text"
        value={searchInput}
        title="SearchInput"
        placeholder={placeholder || "Type to search"}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <a
        style={styles.searchIcon}
        title="SearchIcon"
        onClick={() => setSearchInput("")}
      >
        <SearchIcon style={styles.searchSvg} />
      </a>
    </div>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  searchBoxBackground: PropTypes.string,
  searchIconColor: PropTypes.string,
  searchIconBackground: PropTypes.string,
  searchInputColor: PropTypes.string,
  scale: PropTypes.number,
  placeholder: PropTypes.string,
};
