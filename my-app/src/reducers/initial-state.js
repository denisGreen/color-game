import { v4 as uuidv4 } from "uuid";

// const makeColor = num => {
//       let fistSix = id.slice(0, 6);
//       return "#" + fistSix;
//     };
//     const color = makeColor(id);
//     console.log(id);
//     console.log(color);

const initialState = {
  isComparing: false,
  openCards: 0,
  cards: [
    {
      id: uuidv4(),
      color: "#f0690a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#108651",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#108651",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#f0690a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#10f90a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#1202b4",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#1202b4",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#10f90a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#f0699a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#101051",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#101051",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#f0699a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#13690a",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#108614",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#108614",
      clicked: false
    },
    {
      id: uuidv4(),
      color: "#13690a",
      clicked: false
    }
  ]
};

export default initialState;
/*{
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
    } */
