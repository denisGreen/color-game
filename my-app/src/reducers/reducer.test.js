import rootReducer from "./index";
import * as actions from "../actions";
import { Types } from "../actions/types";
import initialState from '../reducers/initial-state';

const initialTestState = {
  openCardId: "",
  isComparing: false,
  openCards: 0,
  cards: [
    {
      id: 1,
      color: "#f0690a",
      clicked: false
    },
    {
      id: 2,
      color: "#108651",
      clicked: false
    },
    {
      id: 3,
      color: "#108651",
      clicked: false
    },
    {
      id: 4,
      color: "#f0690a",
      clicked: false
    }
  ]
};

describe("root reducer", () => {
  it("should return initial test state", () => {
    expect(rootReducer()).toBe(initialState);
    expect(rootReducer(initialTestState)).toBe(initialTestState);
  });

  it("CARD_CLICKED action should change card's clicked state to true ", () => {
    const expectedState = {
      openCards: 1,
      cards: [
        {
          id: 1,
          color: "#f0690a",
          clicked: false
        },
        {
          id: 2,
          color: "#108651",
          clicked: true
        },
        {
          id: 3,
          color: "#108651",
          clicked: false
        },
        {
          id: 4,
          color: "#f0690a",
          clicked: false
        }
      ]
    };

    expect(rootReducer(initialTestState, actions.cardToggleClick(2))).toEqual(
      expectedState
    );
  });
  it("if the two cards with same color are clicked should remove them from the state", () => {
    const innerState = {
      openCards: 1,
      cards: [
        {
          id: 1,
          color: "#f0690a",
          clicked: false
        },
        {
          id: 2,
          color: "#108651",
          clicked: true
        },
        {
          id: 3,
          color: "#108651",
          clicked: false
        },
        {
          id: 4,
          color: "#f0690a",
          clicked: false
        }
      ]
    };
    const expectedState = {
      openCards: 0,
      cards: [
        {
          id: 1,
          color: "#f0690a",
          clicked: false
        },

        {
          id: 4,
          color: "#f0690a",
          clicked: false
        }
      ]
    };

    expect(rootReducer(innerState, actions.cardCompare(3))).toEqual(
      expectedState
    );
  });
  it("if colors do not the same, reset clicked property in the cards", () => {
    const innerState = {
      openCards: 1,
      cards: [
        {
          id: 1,
          color: "#f0690a",
          clicked: false
        },
        {
          id: 2,
          color: "#108651",
          clicked: true
        },
        {
          id: 3,
          color: "#108651",
          clicked: false
        },
        {
          id: 4,
          color: "#f0690a",
          clicked: true
        }
      ]
    };
    const expectedState = {
      openCards: 0,
      cards: [
        {
          id: 1,
          color: "#f0690a",
          clicked: false
        },
        {
          id: 2,
          color: "#108651",
          clicked: false
        },
        {
          id: 3,
          color: "#108651",
          clicked: false
        },
        {
          id: 4,
          color: "#f0690a",
          clicked: false
        }
      ]
    };
    expect(rootReducer(innerState, actions.cardCompare(4))).toEqual(
      expectedState
    );
  });
});
