import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  it("should render Footer component", async () => {
    render(<Footer />);
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
