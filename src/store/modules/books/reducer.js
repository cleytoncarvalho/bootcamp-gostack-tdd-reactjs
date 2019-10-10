import produce from "immer";

export const INITIAL_STATE = [];

export default function books(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_BOOK":
        draft.push(action.payload.book);
        break;
      default:
    }
  });
}
