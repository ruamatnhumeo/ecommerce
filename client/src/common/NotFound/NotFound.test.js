import React from "react";
import { shallow } from "enzyme";
import NotFound from "./index";

describe("<NotFound />", () => {
	it("should render '404'", () => {
		const wrapper = shallow(<NotFound />);
		expect(wrapper.html()).toContain("404");
	});
});
