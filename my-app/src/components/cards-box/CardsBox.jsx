import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./cards-box.css";
import ColorCard from "../color-card";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";

const CardsBox = () => {
  const { cards, openCards, isComparing, openCardId } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleOnClick = (openCards, cardId) => {
    if (openCards < 2) {
      return (
        dispatch(actions.cardClicked(cardId))
      )
    }
  }


  //If no cards return Error. 
  if (!cards) {
    return new Error("ColorCard crashed");
  } else if (cards.length === 0) {
    //When all cards have been removed the game is ended
    return (
      <div className="game-container">
        <div className="winner">
          <h1 className="centered">YOU WON!</h1>
          <h1 className="centered">CONGRATULATIONS!</h1>
        </div>
      </div>

    );
  } else {
    //in all other cases render cards array
    return (
      <div className="game-container">
        <TransitionGroup className="cards-box">
          {cards.map(card => (
            <CSSTransition key={card.id} timeout={500} classNames="item">
              <ColorCard
                id={card.id}
                color={card.color}
                clicked={card.clicked}
                onClick={() => dispatch(actions.cardClicked(card.id, isComparing, openCards, openCardId))}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

    );
  }
};

export default CardsBox;
