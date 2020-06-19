import { v4 as uuidv4 } from "uuid";
const makeCards = qantity => {
  let cards = [];
  for (let i = 0; i < qantity; i++) {
    const id = uuidv4();
    const hexnumColor = id.slice(0, 6);
    console.log(id);
    console.log("#" + hexnumColor);
    cards.push({
      id: id,
      color: hexnumColor,
      clicked: false
    });
  }
  console.log(cards);
  return cards;
};

/* else {
    if (cards.length === 0) {
      console.log("length 0");

      cards = makeCards(8);
    }*/
// const r = Math.floor(Math.random()*255).toString(16);
// 	const g = Math.floor(Math.random()*255).toString(16);
//   const b = Math.floor(Math.random()*255).toString(16);
//   const firstColor = `#${r}${g}${b}`;
//   console.log(firstColor);