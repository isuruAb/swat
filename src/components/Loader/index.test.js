import { render } from "@testing-library/react";
import Loader from "./index";

describe("Loader", () => {
  test("is truthy", () => {
    expect(Loader).toBeTruthy();
  });

  test("renders Loader component and should include tag with className spinner-grow", () => {
    const { container } = render(<Loader />);
    const loaderTag = container.getElementsByClassName("spinner-grow")[0];
    expect(loaderTag).toBeInTheDocument();
  });
});
