import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./cards-box.css";
import ColorCard from "../color-card";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";

const CardsBox = () => {
  const { cards } = useSelector(state => state);
  const dispatch = useDispatch();

  //
  if (!cards) {
    return new Error("ColorCard crashed");
  } else if (cards.lengh === 0) {
    return (
      <div className="winner">
        <h1 className="centered">YOU WON!</h1>
        <h1 className="centered">CONGRATULATIONS!</h1>
      </div>
    );
  } else {
    return (
      <TransitionGroup className="cards-box">
        {cards.map(card => (
          <CSSTransition key={card.id} timeout={500} classNames="item">
            <ColorCard
              color={card.color}
              clicked={card.clicked}
              onClick={() => dispatch(actions.cardClicked(card.id))}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
};

export default CardsBox;
