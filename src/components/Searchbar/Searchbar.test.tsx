import { screen, render, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";
import "@testing-library/jest-dom";

describe("Test Searchbar", () => {
  describe("Test Searchbar Component Existence", () => {
    test("Searchbar Existence", () => {
      render(<Searchbar />);
      const searchBar: HTMLElement = screen.getByTitle("SearchComponent");
      expect(searchBar).toBeInTheDocument();
    });
    test("SearchInput Existence", () => {
      render(<Searchbar />);
      const searchInput: HTMLElement = screen.getByTitle("SearchInput");
      expect(searchInput).toBeInTheDocument();
    });

    test("SearcIcon Existence", () => {
      render(<Searchbar />);
      const searchIcon: HTMLElement = screen.getByTitle("SearchIcon");
      expect(searchIcon).toBeInTheDocument();
    });

    test("Custom Placeholder", () => {
      render(<Searchbar placeholder="jest test" />);
      const placeholder: HTMLElement =
        screen.getByPlaceholderText(/jest test/i);
      expect(placeholder).toBeInTheDocument();
    });
  });

  describe("Test Searchbar Event Handling", () => {
    test("SearchInput Functionality", () => {
      render(<Searchbar />);
      const searchInput: HTMLInputElement = screen.getByTitle("SearchInput");
      fireEvent.change(searchInput, { target: { value: "text changed" } });
      expect(searchInput.value).toBe("text changed");
    });

    test("SearchIcon Click Functionality", () => {
      render(<Searchbar />);
      const searchIcon: HTMLElement = screen.getByTitle("SearchIcon");
      const searchInput: HTMLInputElement = screen.getByTitle("SearchInput");
      fireEvent.click(searchIcon);
      expect(searchInput.value).toBe("");
    });
  });
});
