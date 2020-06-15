import * as actions from "./index";
import { Types } from "./types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Actions", () => {
  it.only("should create CARD_TOGGLE_CLICK action with id as payload", () => {
    const expected = {
      type: Types.CARD_TOGGLE_CLICK,
      payload: 2
    };
    expect(actions.cardToggleClick(2)).toEqual(expected);
  });
  it.only("should create a CARD_COMPARE_COLORS action ", () => {
    const expected = {
      type: Types.CARD_COMPARE_COLORS,
      payload: 2
    };
    expect(actions.cardCompare(2)).toEqual(expected);
  });
  it.only(`should create asynchronuos action and dispatch CARD_TOGGLE_CLICK 
  and CARD_COMPARE_COLORS`, () => {
    const expectedActions = [
      {
        type: Types.CARD_TOGGLE_CLICK,
        payload: 2
      },
      {
        type: Types.CARD_COMPARE_COLORS,
        payload: 2
      }
    ];
    const store = mockStore({});

    //return the Promise
    return store.dispatch(actions.cardClicked(2)).then(() => {
      const testActions = store.getActions();
      expect(testActions).toEqual(expectedActions);
    });
  }); //end of async test
});
