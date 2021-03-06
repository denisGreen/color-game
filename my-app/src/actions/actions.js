import { Types } from "./types";
import actionCreator from "./actions-creator";

export const cardToggleClick = id => actionCreator(Types.CARD_TOGGLE_CLICK, id);
export const cardCompareStart = ()=> actionCreator(Types.CARD_COMPARE_START);
export const cardCompareFinish = ()=> actionCreator(Types.CARD_COMPARE_FINISH);

export const cardCompare = id => actionCreator(Types.CARD_COMPARE_COLORS, id);


//delay the card compare action to let animation finish
const delayCardCompare = (id, dispatch) => {
  return new Promise(resolve => {

      setTimeout(() => {

        resolve(dispatch(cardCompare(id)));
      }, 1000);
      
  });
    
};

//async action to trig the reducer
export const cardClicked = (id, isComparing, openCards, openCardId) => async dispatch => {

  //disable click if comparing and more then 2 clicks
  if(!isComparing && openCards < 2){
    dispatch(cardToggleClick(id));
  }
  
  
  //start comparing only if one card is open
  if(!isComparing && openCards === 1 && openCardId !== id) {
    
    //dispatch compare Start to disable other cards
    dispatch(cardCompareStart());
    //wait some time for the animation
    await delayCardCompare(id, dispatch)

    //after comparing finish enable all cards 
    dispatch(cardCompareFinish())
    
  }
  
};
