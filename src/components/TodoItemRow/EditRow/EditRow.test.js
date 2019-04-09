import React from "react";
import { shallow } from "enzyme";
import EditRow from "components/TodoItemRow/EditRow/EditRow";

describe("editRow", () => {
  const id = "12345";
  const text = "Learn unit testing";
  const mockToggleEdit = jest.fn();
  const mockEditTodo = jest.fn();
  const mockSetRef = jest.fn();

  const props = {
    id,
    text,
    onToggleEdit: mockToggleEdit,
    onEditTodo: mockEditTodo,
    setRef: mockSetRef
  };
  const editRow = shallow(<EditRow {...props} />);

  it("renders correctly", () => {
    expect(editRow).toMatchSnapshot();
  });

  describe("edit markup", () => {
    it("has the input control", () => {
      expect(editRow.find(".form-control")).toHaveLength(1);
    });
    it("has the input control", () => {
      expect(editRow.find(".form-control")).toHaveLength(1);
    });

    it("has the `Save` button", () => {
      expect(editRow.find(".btn-success").text()).toEqual("Save");
    });

    it("has the `Cancel` button", () => {
      expect(editRow.find(".btn-danger").text()).toEqual("Cancel");
    });

    describe("when clicking the `Save` button", () => {
      beforeEach(() => {
        editRow.find(".btn-success").simulate("click");
      });

      it("fires the onEditTodo function and saves the changes", () => {
        expect(mockEditTodo).toHaveBeenCalledWith(id);
      });
    });

    describe("when clicking the `Cancel` button", () => {
      beforeEach(() => {
        editRow.find(".btn-danger").simulate("click");
      });

      it("fires the onToggleEdit function and changes the markup", () => {
        expect(mockToggleEdit).toHaveBeenCalled();
      });
    });
  });
});
