import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@testing-library/jest-dom";
import Products from "./Products";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

describe("Products component", () => {
  it("should render roducts", () => {
    renderComponent();

    expect(<Products />).toBeTruthy();
  });
});
