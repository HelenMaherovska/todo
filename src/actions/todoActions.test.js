import { format } from "date-fns";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FILTER_TODO,
  UPDATE_TODO
} from "./types";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  filterTodo,
  updateTodo
} from "./todoActions";

jest.mock("uuid", () => ({ v4: jest.fn(() => 0) }));

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: ADD_TODO,
      id: 0,
      complete: false,
      date: format(new Date(), "MM/DD/YYYY HH:mm:ss"),
      text
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });

  it("should create an action to toggle a todo", () => {
    const expectedAction = {
      type: TOGGLE_TODO,
      id: 0
    };
    expect(toggleTodo(0)).toEqual(expectedAction);
  });

  it("should create an action to delete a todo", () => {
    const expectedAction = {
      type: DELETE_TODO,
      id: 0
    };
    expect(deleteTodo(0)).toEqual(expectedAction);
  });

  it("should create an action to updateTodo a todo", () => {
    const todo = {
      type: UPDATE_TODO,
      id: 0,
      complete: false,
      date: format(new Date(), "MM/DD/YYYY HH:mm:ss"),
      text: "Updated text"
    };

    const expectedAction = {
      type: UPDATE_TODO,
      date: format(new Date(), "MM/DD/YYYY HH:mm:ss"),
      todo
    };
    expect(updateTodo(todo)).toEqual(expectedAction);
  });

  it("should create an action to filter a todo", () => {
    const expectedAction = {
      type: FILTER_TODO,
      filter: "ALL"
    };
    expect(filterTodo("ALL")).toEqual(expectedAction);
  });
});
