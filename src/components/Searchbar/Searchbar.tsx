import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "./Searchbar.styles";

export type Props = {
  searchBoxBackground?: string;
  searchIconColor?: string;
  searchIconBackground?: string;
  searchInputColor?: string;
  scale?: number;
  placeholder?: string;
};

function Searchbar(props: Props) {
  const styles = Styles(props);
  const { placeholder } = props;
  const [hover, setHover] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  console.log("Emre");

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
