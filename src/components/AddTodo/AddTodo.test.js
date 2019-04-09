import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import { AddTodo } from "components/AddTodo/AddTodo";

describe("AddTodo", () => {
  const text = "Learn unit testing";
  const mockAddTodo = jest.fn();

  const { container } = render(<AddTodo addTodo={mockAddTodo} />);

  it("renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  describe("Initial state", () => {
    it("should have the `Add Todo` button", () => {
      expect(container.querySelector(".btn-success").textContent).toBe(
        "Add Todo"
      );
    });
  });

  describe("before typing into the add todo input", () => {
    const inputVal = container.querySelector("input");

    fireEvent.change(inputVal, { target: { value: text } });

    it("updates the inputValue state", () => {
      expect(container.querySelector("input")).toHaveAttribute("value", text);
    });
  });

  describe("when clicking the `Add Todo` button", () => {
    beforeEach(() => {
      const btn = container.querySelector(".btn-success");
      fireEvent.click(btn);
    });

    it("successfully calls the onClick handler", () => {
      expect(mockAddTodo.mock.calls.length).toEqual(1);
    });

    it("dispatches the `addTodo()` it receives from props", () => {
      expect(mockAddTodo).toHaveBeenCalledWith(text);
    });
  });

  describe("after clicking the `Add Todo` button", () => {
    it("inputValue in state should be empty", () => {
      expect(container.querySelector("input")).toHaveAttribute("value", "");
    });
  });
});
