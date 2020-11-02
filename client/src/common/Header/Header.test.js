import React from "react";
import { shallow } from "enzyme";
import { useSelector } from "react-redux";

import Header from "./index";
import Search from "../../features/search";
import Login from "../../features/auth/components/Login";
import Account from "../../features/auth/components/Account";
import Cart from "../../features/cart/components/Cart";
import Menu from "../Menu/index";

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("<Header />", () => {
	it("rendering before login", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.containsMatchingElement(<Header />)).toBe(false);
		expect(wrapper.containsMatchingElement(<Search />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Cart />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Menu />)).toBe(true);
	});

	it("rendering after login", () => {
		const wrapper = shallow(<Header />);

		useSelector.mockImplementation((cb) =>
			cb({
				auth: {
					isAuthenticated: true,
				},
			})
		);

		wrapper.update();
		expect(mockDispatch).toHaveBeenCalledWith({
			type: "SOME_TYPE",
			payload: "somePaylod",
		});

		expect(wrapper.containsMatchingElement(<Search />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Account />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Cart />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Menu />)).toBe(true);
	});
});
