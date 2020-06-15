import rootReducer from "./index";
import * as actions from "../actions";
import { Types } from "../actions/types";

const initialTestState = {
  level: 1,
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
  it("should return initial state", () => {
    expect(rootReducer()).toBe(initialTestState);
  });

  it.only("CARD_CLICKED action should change card's clicked state to true ", () => {
    const expectedState = {
      level: 1,
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
  it.only("if the two cards with same color are clicked should remove them from the state", () => {
    const innerState = {
      level: 1,
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
      level: 1,
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
  it.only("if colors do not the same, reset clicked property in the cards", () => {
    const innerState = {
      level: 1,
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
      level: 1,
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
