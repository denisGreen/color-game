import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorCard from "../color-card";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<ColorCard />);
  return {
    enzymeWrapper
  };
}

describe("Color Card", () => {
  it("should render ColorCard and children", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".color-card")).toHaveLength(1);
  });
});
