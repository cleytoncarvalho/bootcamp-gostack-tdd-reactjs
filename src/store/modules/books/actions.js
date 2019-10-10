export function addBook(book) {
  return {
    type: "ADD_BOOK",
    payload: { book }
  };
}

export function getBooksSuccess(data) {
  return {
    type: "GET_BOOKS_SUCCESS",
    payload: { data }
  };
}

export function getBooksFailure() {
  return {
    type: "GET_BOOKS_FAILURE"
  };
}
