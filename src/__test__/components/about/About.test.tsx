import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";

import About from "../../../components/about/About";

import { techStack, techTools } from "../../../components/about/utils";

describe("About Component Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Render Test", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  test("CV Download Test", () => {
    render(<About />);

    const downloadButton = screen.getByText("CV DOWNLOAD");

    fireEvent.click(downloadButton);
    expect(downloadButton).toHaveAttribute(
      "href",
      "public/cv/AdrianDelPrado_CV.pdf"
    );
    expect(downloadButton).toHaveAttribute(
      "download",
      "adrian_del_prado_cv.pdf"
    );
    expect(downloadButton).toHaveAttribute("target", "_blank");
  });

  test("Tech Stack Render Test", () => {
    render(<About />);
    const stackIcons = screen.getAllByTestId("tech-stack-icon");
    expect(stackIcons.length).toBe(techStack.length);
  });

  test("Tech Tools Render Test", () => {
    render(<About />);
    const toolsIcons = screen.getAllByTestId("tech-tools-icon");
    expect(toolsIcons.length).toBe(techTools.length);
  });

  test("Image Hover Test", () => {
    render(<About />);
    const image = screen.getByAltText("me");

    fireEvent.mouseOut(image);
    expect(image).toHaveStyle(
      "filter: grayscale(100%) drop-shadow(15px 10px 4px crimson)"
    );
  });
});
