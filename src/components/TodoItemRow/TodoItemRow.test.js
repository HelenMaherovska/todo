import React from "react";
import { shallow } from "enzyme";
import TodoItemRow from "components/TodoItemRow/TodoItemRow";
import Row from "components/TodoItemRow/Row/Row";
import EditRow from "components/TodoItemRow/EditRow/EditRow";

jest.mock("date-fns", () => () => ({ format: () => "06/18/2018 05:49:28" }));

describe("TodoItemRow", () => {
  const id = "12345";
  const text = "Learn unit testing";
  const completed = false;
  const date = "06/18/2018 05:49:28";
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const mockUpdate = jest.fn();

  const props = {
    id,
    text,
    completed,
    date,
    onClick: mockToggle,
    onDelete: mockDelete,
    onUpdate: mockUpdate
  };
  const todoItemRow = shallow(<TodoItemRow {...props} />);

  it("renders correctly", () => {
    expect(todoItemRow).toMatchSnapshot();
  });

  it("initilizes isEditing value in `state`", () => {
    expect(todoItemRow.state()).toEqual({ isEditing: false });
  });

  describe("default markup", () => {
    describe("isEditing value is false", () => {
      it("renders Row component", () => {
        expect(todoItemRow.find(Row)).toHaveLength(1);
      });
    });
  });
  describe("edit markup", () => {
    describe("isEditing value is true", () => {
      beforeEach(() => {
        todoItemRow.setState({ isEditing: true });
      });

      it("renders EditRow component", () => {
        expect(todoItemRow.find(EditRow)).toHaveLength(1);
      });
    });
  });
});
