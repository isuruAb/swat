import { render, screen } from "@testing-library/react";
import Navigator from "./index";

describe("Navigator", () => {
  test("is truthy", () => {
    expect(Navigator).toBeTruthy();
  });

  test("renders Navigator component and should include span tag", () => {
    const { container } = render(
      <Navigator
      onClick={()=>{}}
      pageNo={1}
      />
    );
    const pageNumberTag = container.getElementsByTagName("SPAN")[0];
    expect(pageNumberTag).toBeInTheDocument();
  });

  test("renders Navigator component and should include the page number", () => {
    render(
      <Navigator
      onClick={()=>{}}
      pageNo={1}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
