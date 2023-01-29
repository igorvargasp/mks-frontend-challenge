import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponents = () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  return { store };
};

describe("Footer component", () => {
  it("should render NavBar component", async () => {
    renderComponents();
    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
  it("Should show cart number", () => {
    renderComponents();
    const button = screen.getByText("0");
    expect(button).toBeInTheDocument();
  });
});
