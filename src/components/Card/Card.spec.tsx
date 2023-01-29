import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@testing-library/jest-dom";
import Card from "./Card";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Card
        id={5}
        name={"Macbook Pro"}
        brand={"apple"}
        description={"description"}
        photo={"https://via.placeholder.com/150"}
        price={"2000"}
      />
    </Provider>
  );
};

describe("Card component", () => {
  it("should render a product", async () => {
    renderComponent();

    expect(await screen.findByText("Macbook Pro")).toBeInTheDocument();
  });

  it("should add a product to cart", async () => {
    renderComponent();
    const addToCartBtn = await screen.findByText("Comprar");

    fireEvent.click(addToCartBtn);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
