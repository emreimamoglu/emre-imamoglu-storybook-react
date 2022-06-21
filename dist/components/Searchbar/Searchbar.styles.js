"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (_a) {
    var _b = _a.searchBoxBackground, searchBoxBackground = _b === void 0 ? "#2f3640" : _b, _c = _a.searchIconColor, searchIconColor = _c === void 0 ? "#e84118" : _c, _d = _a.searchIconBackground, searchIconBackground = _d === void 0 ? "#2f3640" : _d, _e = _a.searchInputColor, searchInputColor = _e === void 0 ? "white" : _e, _f = _a.scale, scale = _f === void 0 ? 1 : _f;
    return ({
        searchBox: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "".concat(searchBoxBackground),
            height: "".concat(40 * scale, "px"),
            borderRadius: "".concat(40 * scale, "px"),
            padding: "".concat(10 * scale, "px"),
        },
        searchIcon: {
            color: "".concat(searchIconColor),
            float: "right",
            width: "".concat(40 * scale, "px"),
            height: "".concat(40 * scale, "px"),
            borderRadius: "50%",
            background: "".concat(searchIconBackground),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        searchSvg: {
            width: "".concat(40 * scale, "px"),
            height: "".concat(40 * scale, "px"),
        },
        searchInput: {
            border: "none",
            background: "none",
            outline: "none",
            float: "left",
            padding: "0",
            color: "".concat(searchInputColor),
            fontSize: "".concat(16 * scale, "px"),
            transition: "0.4s",
            lineHeight: "".concat(40 * scale, "px"),
            width: "0px",
        },
        searchBoxHover: {
            width: "".concat(240 * scale, "px"),
            padding: "0 ".concat(6 * scale, "px"),
        },
    });
};
exports.default = styles;
