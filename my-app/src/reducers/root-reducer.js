import initialState from "./initial-state";
import { Types } from "../actions/types";

//find item in the state array
const findItem = (arr, idx) => arr.find(({ id }) => id === idx);

//change single color-card clicked property
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

//reset colorCards
const resetColorCards = (
  state,
  cards,
  card,
  alredyClickedCard,
  cardIndexInCardsArray,
  alredyClickedCardIndex
) => {
  const resetFirstCard = [
    ...cards.slice(0, cardIndexInCardsArray),
    trigClicked(card),
    ...cards.slice(cardIndexInCardsArray + 1)
  ];

  return {
    ...state,
    cards: [
      ...resetFirstCard.slice(0, alredyClickedCardIndex),
      trigClicked(alredyClickedCard),
      ...resetFirstCard.slice(alredyClickedCardIndex + 1)
    ]
  };
};
//compare colors in card
const compareColorsInCards = (state, cards, card) => {
  const alredyClickedCardIndex = cards.findIndex(
    ({ clicked, id }) => clicked === true && id !== card.id
  );
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

//updating the cards array
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
  //check if one of the cards is alredy clicked
};

//

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
