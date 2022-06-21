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
exports.CustomizableSearchbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Searchbar_1 = __importDefault(require("./Searchbar"));
exports.default = {
    title: "Navbar/Searchbar",
    component: Searchbar_1.default,
    argTypes: {
        searchBoxBackground: { control: "color", default: "#2f3640" },
        searchIconColor: { control: "color", default: "#e84118" },
        searchIconBackground: { control: "color", default: "#2f3640" },
        searchInputColor: { control: "color", default: "white" },
        scale: { control: { type: "range", min: 0.3, max: 2, step: 0.1 } },
        placeholder: { type: "string", default: "Type to search" },
    },
};
var BaseComponent = function (args) { return ((0, jsx_runtime_1.jsx)(Searchbar_1.default, __assign({}, args))); };
exports.CustomizableSearchbar = BaseComponent.bind({});
