const styles = ({
  searchBoxBackground = "#2f3640",
  searchIconColor = "#e84118",
  searchIconBackground = "#2f3640",
  searchInputColor = "white",
  scale = 1,
}: {
  searchBoxBackground?: string;
  searchIconColor?: string;
  searchIconBackground?: string;
  searchInputColor?: string;
  scale?: number;
}) =>
  ({
    searchBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      background: `${searchBoxBackground}`,
      height: `${40 * scale}px`,
      borderRadius: `${40 * scale}px`,
      padding: `${10 * scale}px`,
    },
    searchIcon: {
      color: `${searchIconColor}`,
      float: "right",
      width: `${40 * scale}px`,
      height: `${40 * scale}px`,
      borderRadius: "50%",
      background: `${searchIconBackground}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    searchSvg: {
      width: `${40 * scale}px`,
      height: `${40 * scale}px`,
    },
    searchInput: {
      border: "none",
      background: "none",
      outline: "none",
      float: "left",
      padding: "0",
      color: `${searchInputColor}`,
      fontSize: `${16 * scale}px`,
      transition: "0.4s",
      lineHeight: `${40 * scale}px`,
      width: "0px",
    },
    searchBoxHover: {
      width: `${240 * scale}px`,
      padding: `0 ${6 * scale}px`,
    },
  } as const);

export default styles;
