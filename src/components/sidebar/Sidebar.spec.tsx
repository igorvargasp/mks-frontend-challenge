import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { store } from "@/store/store";
import Sidebar from "./Sidebar";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Sidebar setCartClick={() => true} />
    </Provider>
  );
};

describe("Sidebar Component", () => {
  it("should render the Sidebar", () => {
    renderComponent();

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });
});
