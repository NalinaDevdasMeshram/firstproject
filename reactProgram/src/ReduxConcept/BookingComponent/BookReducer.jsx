import { Book_Buy } from "./Book_Buy";
const initialState = {
  NumberofBook: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Book_Buy:
      return {
        ...state,
        NumberofBook: state.initialState - 1,
      };
    default:
      return state;
  }
};
export default BookReducer;
