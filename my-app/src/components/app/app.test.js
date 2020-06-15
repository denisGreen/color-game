import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./index";
import CardsBox from "../cards-box";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<App />);
  return {
    enzymeWrapper
  };
}

describe("App", () => {
  it("should render App and children", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(CardsBox)).toHaveLength(1);
  });
});
