import { INCREASEONE } from "../constants";
import { DECREASEONE } from "../constants";

// Part2: Define Actions
export const increaseOne = (counter) => (dispatch) => {
   dispatch({
     type: INCREASEONE,
     payload: counter+1,
   });
 };


export const decreaseOne = (counter) => (dispatch) => {
   dispatch({
     type: DECREASEONE,
     payload: counter-1,
   });
 };

 