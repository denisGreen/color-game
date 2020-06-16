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
    ...state,
    cards: cards.filter(
      colorCard =>
        colorCard.id !== card.id && colorCard.id !== alredyClickedCard.id
    )
  };
};

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
    trigClicked(card),
    ...cards.slice(cardIndexInCardsArray + 1)
  ];
  //reset first open card and save it on the same place
  return {
    ...state,
    cards: [
      ...resetFirstCard.slice(0, alredyClickedCardIndex),
      trigClicked(alredyClickedCard),
      ...resetFirstCard.slice(alredyClickedCardIndex + 1)
    ]
  };
};
//compare colors in cards
const compareColorsInCards = (state, cards, card) => {
  const alredyClickedCardIndex = cards.findIndex(
    ({ clicked, id }) => clicked === true && id !== card.id
  );
  //check if some card is open
  if (alredyClickedCardIndex !== -1) {
    console.log("one is clicked");
    //then check id
    const cardIndexInCardsArray = cards.findIndex(({ id }) => id === card.id);
    if (cardIndexInCardsArray !== alredyClickedCardIndex) {
      console.log("cards not the same");
      //then compare colors
      const alredyClickedCard = cards[alredyClickedCardIndex];
      if (alredyClickedCard.color === card.color) {
        console.log("remove");
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

//trig the card.clicked
const whenClicked = (state, cards, card, cardIndexInCardsArray) => {
  const clickedCard = trigClicked(card);

  return {
    ...state,
    cards: [
      ...cards.slice(0, cardIndexInCardsArray),
      clickedCard,
      ...cards.slice(cardIndexInCardsArray + 1)
    ]
  };
  
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
    case Types.CARD_COMPARE_COLORS:
      return compareColorsInCards(state, cards, card);
    default:
      return state;
  }
};

export default rootReducer;
