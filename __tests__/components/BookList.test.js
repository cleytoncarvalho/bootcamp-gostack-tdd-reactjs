import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import { addBook } from "~/store/modules/books/actions";
import BookList from "~/components/BookList";

jest.mock("react-redux");

describe("BookList component", () => {
  it("should render book list", () => {
    useSelector.mockImplementation(cb =>
      cb({
        books: ["Book 1", "Book 2"]
      })
    );

    const { getByTestId, getByText } = render(<BookList />);

    expect(getByTestId("book-list")).toContainElement(getByText("Book 1"));
    expect(getByTestId("book-list")).toContainElement(getByText("Book 2"));
  });

  it("it should be able to add new book", () => {
    const { getByTestId, getByLabelText } = render(<BookList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Book"), { target: { value: "Book 1" } });
    fireEvent.submit(getByTestId("book-form"));

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(addBook("Book 1"));
  });
});
