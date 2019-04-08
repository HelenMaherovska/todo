import todoReducer from "./todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from "../actions/types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todoReducer([], {
        type: ADD_TODO,
        text: "Run the tests",
        id: 0
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          }
        ],
        {
          type: ADD_TODO,
          text: "Use Redux",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          },
          {
            text: "Use Redux",
            completed: false,
            id: 1
          }
        ],
        {
          type: ADD_TODO,
          text: "Fix the tests",
          id: 2
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: TOGGLE_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle DELETE_TODO", () => {
    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: DELETE_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  describe("should handle UPDATE_TODO", () => {
    describe("given a proper todo id", () => {
      it("returns updated todo", () => {
        expect(
          todoReducer(
            [
              {
                text: "Use Redux",
                completed: false,
                id: 0
              }
            ],
            {
              type: UPDATE_TODO,
              todo: {
                id: 0,
                completed: false,
                text: "Updated todo"
              }
            }
          )
        ).toEqual([
          {
            text: "Updated todo",
            completed: false,
            id: 0
          }
        ]);
      });
    });
    describe("given a wrong todo id", () => {
      it("not returns updated todo", () => {
        expect(
          todoReducer(
            [
              {
                text: "Use Redux",
                completed: false,
                id: 0
              }
            ],
            {
              type: UPDATE_TODO,
              todo: {
                id: 1,
                completed: false,
                text: "Updated todo"
              }
            }
          )
        ).toEqual([
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ]);
      });
    });
  });
});
