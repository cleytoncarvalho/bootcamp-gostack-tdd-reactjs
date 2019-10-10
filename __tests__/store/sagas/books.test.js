import { runSaga } from "redux-saga";
import MockAdapter from "axios-mock-adapter";
import api from "~/services/api";

import {
  getBooksSuccess,
  getBooksFailure
} from "~/store/modules/books/actions";
import { getBooks } from "~/store/modules/books/sagas";

const apiMock = new MockAdapter(api);

describe("Books saga", () => {
  it("should be able to fetch books", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("/books").reply(200, ["Book 1"]);

    await runSaga({ dispatch }, getBooks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getBooksSuccess(["Book 1"]));
  });

  it("should fail when api fail", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("/books").reply(500);

    await runSaga({ dispatch }, getBooks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getBooksFailure());
  });
});
