import { Types } from "./types";
import actionCreator from "./actions-creator";

export const cardToggleClick = id => actionCreator(Types.CARD_TOGGLE_CLICK, id);
//export const cardClicked = id => actionCreator(Types.CARD_CLICKED, id);
export const cardCompare = id => actionCreator(Types.CARD_COMPARE_COLORS, id);
//export const cardMatch = id => actionCreator(Types.CARD_COLORS_MATCH, id, );

//delay the card compare action
const delayCardCompare = (id, dispatch) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dispatch(cardCompare(id)));
    }, 800);
  });
};

export const cardClicked = id => async dispatch => {
  dispatch(cardToggleClick(id));

  const result = await delayCardCompare(id, dispatch);
  return result;
};
