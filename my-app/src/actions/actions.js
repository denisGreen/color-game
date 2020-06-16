import { Types } from "./types";
import actionCreator from "./actions-creator";

export const cardToggleClick = id => actionCreator(Types.CARD_TOGGLE_CLICK, id);

export const cardCompare = id => actionCreator(Types.CARD_COMPARE_COLORS, id);


//delay the card compare action to see the second card color
const delayCardCompare = (id, dispatch) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dispatch(cardCompare(id)));
    }, 800);
  });
};

//async action to trig the reducer
export const cardClicked = id => async dispatch => {
  dispatch(cardToggleClick(id));

  const result = await delayCardCompare(id, dispatch);
  return result;
};
