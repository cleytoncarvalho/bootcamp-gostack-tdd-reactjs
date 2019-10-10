import reducer, { INITIAL_STATE } from "~/store/modules/books/reducer";
import * as Books from "~/store/modules/books/actions";

describe("Books reducer", () => {
  it("DEFAULT", () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it("ADD_BOOK", () => {
    const state = reducer(INITIAL_STATE, Books.addBook("Book 1"));

    expect(state).toStrictEqual(["Book 1"]);
  });
});
