"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var Searchbar_styles_1 = __importDefault(require("./Searchbar.styles"));
function Searchbar(props) {
    var styles = (0, Searchbar_styles_1.default)(props);
    var placeholder = props.placeholder;
    var _a = (0, react_1.useState)(false), hover = _a[0], setHover = _a[1];
    var _b = (0, react_1.useState)(""), searchInput = _b[0], setSearchInput = _b[1];
    console.log("Emre");
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: styles.searchBox, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, title: "SearchComponent" }, { children: [(0, jsx_runtime_1.jsx)("input", { style: hover
                    ? __assign(__assign({}, styles.searchInput), styles.searchBoxHover) : __assign({}, styles.searchInput), type: "text", value: searchInput, title: "SearchInput", placeholder: placeholder || "Type to search", onChange: function (e) { return setSearchInput(e.target.value); } }), (0, jsx_runtime_1.jsx)("a", __assign({ style: styles.searchIcon, title: "SearchIcon", onClick: function () { return setSearchInput(""); } }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, { style: styles.searchSvg }) }))] })));
}
exports.default = Searchbar;
