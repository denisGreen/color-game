import { Types } from "./types";
import actionCreator from "./actions-creator";

export const cardToggleClick = id => actionCreator(Types.CARD_TOGGLE_CLICK, id);
export const cardCompareStart = ()=> actionCreator(Types.CARD_COMPARE_START);
export const cardCompareFinish = ()=> actionCreator(Types.CARD_COMPARE_FINISH);

export const cardCompare = id => actionCreator(Types.CARD_COMPARE_COLORS, id);


//delay the card compare action to see the second card color
const delayCardCompare = (id, dispatch) => {
  return new Promise(resolve => {

    
      setTimeout(() => {

        resolve(dispatch(cardCompare(id)));
      }, 1000);
     
    
  });
    
};

//async action to trig the reducer
export const cardClicked = (id, isComparing, openCards) => async dispatch => {
  dispatch(cardToggleClick(id));
  console.log("cardClicked", openCards)
  if(!isComparing && openCards === 1) {
    dispatch(cardCompareStart());
    const result = await delayCardCompare(id, dispatch)
    if(result){
      dispatch(cardCompareFinish())
    }
    
  
  }
  
};
