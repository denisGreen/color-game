import initialState from "./initial-state";
import { Types } from "../actions/types";

//find item in the state array
const findItem = (arr, idx) => arr.find(({ id }) => id === idx);

//trig single card.clicked property
const trigClicked = card => {
  return {
    ...card,
    clicked: !card.clicked
  };
};

//remove cards with same color
const removeColors = (state, cards, card, alredyClickedCard) => {
  return {
    openCardId: "",
    isComparing: false,
    openCards: 0,
    cards: cards.filter(
      colorCard =>
        colorCard.id !== card.id && colorCard.id !== alredyClickedCard.id
    )
  };
};

//reset single card
const resetCard = (card) => {
  return {
    ...card,
    clicked: false
  }
}

//reset cards with different colors
const resetColorCards = (
  state,
  cards,
  card,
  alredyClickedCard,
  cardIndexInCardsArray,
  alredyClickedCardIndex
) => {
  //reset last open card and save it on the same place
  const resetFirstCard = [
    ...cards.slice(0, cardIndexInCardsArray),
    resetCard(card),
    ...cards.slice(cardIndexInCardsArray + 1)
  ];
  //reset first open card and save it on the same place
  return {
    openCardId: "",
    isComparing: false,
    openCards: 0,
    cards: [
      ...resetFirstCard.slice(0, alredyClickedCardIndex),
      resetCard(alredyClickedCard),
      ...resetFirstCard.slice(alredyClickedCardIndex + 1)
    ]
  };
};

//compare colors in cards
const compareColorsInCards = (state, cards, card) => {
  const { openCards } = state;

  //check if some card is open
  const alredyClickedCardIndex = cards.findIndex(
    ({ clicked, id }) => clicked === true && id !== card.id
  );

  if (openCards === 2) {

    const cardIndexInCardsArray = cards.findIndex(({ id }) => id === card.id);
    //check if alredyClickedCardIndex is exist
    if (alredyClickedCardIndex !== -1) {

      //then compare colors
      const alredyClickedCard = cards[alredyClickedCardIndex];
      if (alredyClickedCard.color === card.color) {

        return removeColors(state, cards, card, alredyClickedCard);
      } else {
        return resetColorCards(
          state,
          cards,
          card,
          alredyClickedCard,
          cardIndexInCardsArray,
          alredyClickedCardIndex
        );
      }
    }
  }

  return state;
};
//enable comparing state
const enableComparingState = (state) => {
  return {
    isComparing: true,
    ...state
  }
}
//disable comparing state
const disableComparingState = (state) => {
  return {
    isComparing: false,
    ...state
  }
}
//trig the card.clicked
const whenClicked = (state, cards, card, cardIndexInCardsArray) => {
  const { openCards, openCardId } = state;

  //skip click if two cards already open

  if (openCards < 2) {
    
    const clickedCard = trigClicked(card);
    //reset state for the same card
    if (openCardId === card.id) {
      return {
        ...state,
        openCardId: "",
        openCards: 0,
        cards: [
          ...cards.slice(0, cardIndexInCardsArray),
          clickedCard,
          ...cards.slice(cardIndexInCardsArray + 1)
        ]
      };
    }
    return {
      ...state,
      openCardId: card.id,
      openCards: openCards + 1,
      cards: [
        ...cards.slice(0, cardIndexInCardsArray),
        clickedCard,
        ...cards.slice(cardIndexInCardsArray + 1)
      ]
    };
  }


  return state;

};

//root reducer will be passed to the store

const rootReducer = (state = initialState, action = {}) => {
  const { cards } = state;
  const card = findItem(cards, action.payload);
  //find  index in cards array
  const cardIndexInCardsArray = cards.findIndex(
    ({ id }) => id === action.payload
  );

  switch (action.type) {
    case Types.CARD_TOGGLE_CLICK:
      return whenClicked(state, cards, card, cardIndexInCardsArray);
    case Types.CARD_COMPARE_START:
      return enableComparingState(state);
    case Types.CARD_COMPARE_COLORS:
      return compareColorsInCards(state, cards, card);
    case Types.CARD_COMPARE_FINISH:
      return disableComparingState(state);
    default:
      return state;
  }
};

export default rootReducer;
