"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Searchbar_1 = __importDefault(require("./Searchbar"));
require("@testing-library/jest-dom");
describe("Test Searchbar", function () {
  describe("Test Searchbar Component Existence", function () {
    test("Searchbar Existence", function () {
      (0, react_1.render)((0, jsx_runtime_1.jsx)(Searchbar_1.default, {}));
      var searchBar = react_1.screen.getByTitle("SearchComponent");
      expect(searchBar).toBeInTheDocument();
    });
    test("SearchInput Existence", function () {
      (0, react_1.render)((0, jsx_runtime_1.jsx)(Searchbar_1.default, {}));
      var searchInput = react_1.screen.getByTitle("SearchInput");
      expect(searchInput).toBeInTheDocument();
    });
    test("SearcIcon Existence", function () {
      (0, react_1.render)((0, jsx_runtime_1.jsx)(Searchbar_1.default, {}));
      var searchIcon = react_1.screen.getByTitle("SearchIcon");
      expect(searchIcon).toBeInTheDocument();
    });
    test("Custom Placeholder", function () {
      (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(Searchbar_1.default, {
          placeholder: "jest test",
        })
      );
      var placeholder = react_1.screen.getByPlaceholderText(/jest test/i);
      expect(placeholder).toBeInTheDocument();
    });
  });
  describe("Test Searchbar Event Handling", function () {
    test("SearchInput Functionality", function () {
      (0, react_1.render)((0, jsx_runtime_1.jsx)(Searchbar_1.default, {}));
      var searchInput = react_1.screen.getByTitle("SearchInput");
      react_1.fireEvent.change(searchInput, {
        target: { value: "text changed" },
      });
      expect(searchInput.value).toBe("text changed");
    });
    test("SearchIcon Click Functionality", function () {
      (0, react_1.render)((0, jsx_runtime_1.jsx)(Searchbar_1.default, {}));
      var searchIcon = react_1.screen.getByTitle("SearchIcon");
      var searchInput = react_1.screen.getByTitle("SearchInput");
      react_1.fireEvent.click(searchIcon);
      expect(searchInput.value).toBe("");
    });
  });
});
