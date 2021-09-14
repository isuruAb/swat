import { render, screen } from "@testing-library/react";
import ImageCard from "./index";

describe("ImageCard", () => {
  test("is truthy", () => {
    expect(ImageCard).toBeTruthy();
  });

  test("renders ImageCard component and should show image tag", () => {
    const { container } = render(
      <ImageCard
        image={{
          links: { html: "#" },
          urls: { small: "#" },
          alt_description: "#"
        }}
      />
    );
    const imageTag = container.getElementsByTagName("IMG")[0];
    expect(imageTag).toBeInTheDocument();
  });
});
