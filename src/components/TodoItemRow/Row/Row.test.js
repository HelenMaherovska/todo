import React from "react";
import { shallow } from "enzyme";
import Row from "components/TodoItemRow/Row/Row";

jest.mock("date-fns", () => () => ({ format: () => "06/18/2018 05:49:28" }));

describe("default Row", () => {
  const id = "12345";
  const date = "06/18/2018 05:49:28";
  const completed = false;
  const text = "Learn unit testing";
  const mockToggleEdit = jest.fn();
  const mockClick = jest.fn();
  const mockDelete = jest.fn();

  const props = {
    id,
    text,
    completed,
    date,
    onClick: mockClick,
    onDelete: mockDelete,
    onToggleEdit: mockToggleEdit
  };
  const row = shallow(<Row {...props} />);

  it("renders correctly", () => {
    expect(row).toMatchSnapshot();
  });
  describe("default markup", () => {
    it("has the `Edit` button", () => {
      expect(row.find(".btn-info").text()).toEqual("Edit");
    });
    describe("row item", () => {
      const rows = row.find(".todo-text");

      it("has the todo with text and date", () => {
        expect(rows.length).toEqual(2);
      });
      it("has a proper todo text", () => {
        expect(rows.first().text()).toEqual(text);
      });
      it("has a proper todo date", () => {
        const rows = row.find(".todo-text");
        expect(rows.last().text()).toEqual(date);
      });
      describe("when toggle the todo item", () => {
        beforeEach(() => {
          rows.first().simulate("click");
        });

        it("fires the onClick function and change `completed` prop", () => {
          expect(mockClick).toHaveBeenCalledWith(id);
        });
        it("updates text style", () => {
          expect(rows.first().hasClass("completed")).toBeFalsy();
        });
      });
    });

    it("has the `Delete Todo` button", () => {
      expect(row.find(".btn-danger").text()).toEqual("Delete");
    });

    describe("when clicking the `Delete` button", () => {
      beforeEach(() => {
        row.find(".btn-danger").simulate("click");
      });
      it("fires the onDelete function and delete the todo", () => {
        expect(mockDelete).toHaveBeenCalledWith(id);
      });
    });

    describe("when clicking the `Edit` button", () => {
      beforeEach(() => {
        row.find(".btn-info").simulate("click");
      });

      it("fires the onToggleEdit function and changes the markup", () => {
        expect(mockToggleEdit).toHaveBeenCalled();
      });
    });
  });
});
