import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("is truthy", () => {
    expect(Header).toBeTruthy();
  });

  test("renders Header component and should contain header text", () => {
    render(<Header />);
    expect(screen.getByText("SWAT UNSPLASH TAKE HOME")).toBeInTheDocument();
  });
});
