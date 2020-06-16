import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardsBox from "./index";
import ColorCard from "../color-card";


Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<CardsBox />);
  return {
    enzymeWrapper
  };
}

describe("Cards Box", () => {
  it("should render Cards Box and children", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(ColorCard)).toHaveLength(16);
  });
});
