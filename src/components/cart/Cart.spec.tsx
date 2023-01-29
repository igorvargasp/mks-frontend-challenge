import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@testing-library/jest-dom";
import Cart from "./Cart";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Cart
        id={5}
        name={"Macbook Pro"}
        brand={"apple"}
        description={"description"}
        photo={"https://via.placeholder.com/150"}
        price={"2000"}
        quantity={1}
      />
    </Provider>
  );
};

describe("Cart Component", () => {
  it("should render a product", async () => {
    renderComponent();

    expect(await screen.findByText("Macbook Pro")).toBeInTheDocument();
  });
});
