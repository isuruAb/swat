import { render, screen } from "@testing-library/react";

import Error from "./index";

describe("Error", () => {
  test("is truthy", () => {
    expect(Error).toBeTruthy();
  });

  test("renders Error component and should show error message", () => {
    render(<Error text="This is test" />);

    expect(screen.getByText("This is test")).toBeInTheDocument();
  });
});
