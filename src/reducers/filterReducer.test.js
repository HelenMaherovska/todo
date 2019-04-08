import filterReducer from "./filterReducer";
import { FILTER_TODO } from "../actions/types";

describe("filter reducer", () => {
  it("should handle initial state", () => {
    expect(filterReducer(undefined, {})).toEqual("ALL");
  });

  it("should handle FILTER_TODO", () => {
    expect(
      filterReducer("ALL", {
        type: FILTER_TODO,
        filter: "ACTIVE"
      })
    ).toEqual("ACTIVE");
  });
});
