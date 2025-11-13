import { useDispatch, useSelector } from "react-redux";
import BookAction from "./BookAction";
const BookContainer = () => {
  const noOfBook = useSelector((state) => state.NumberofBook);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Booking</h1>
      <h3>the number of book is:{noOfBook}</h3>
      <button
        onClick={() => {
          dispatch(BookAction());
        }}
      >
        buyBook
      </button>
    </div>
  );
};

export default BookContainer;
