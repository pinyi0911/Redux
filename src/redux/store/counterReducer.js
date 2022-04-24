import { INCREASEONE } from "../constants";
import { DECREASEONE } from "../constants";

// Part3: Define Reducers
const initialCounter = { counter: 0 };

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {

    case INCREASEONE:
      return { counter: action.payload };

    case DECREASEONE:
      return { counter: action.payload };

    default:
      return state;
  }
}

export default counterReducer;
