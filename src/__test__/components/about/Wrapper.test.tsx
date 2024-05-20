import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Wrapper from "../../../components/about/Wrapper";
import { SvgIcons } from "../../../components";

describe("Wrapper Component", () => {
  test("renders svg icons", () => {
    const icons = [
      "ic_react",
      "ic_vue",
      "ic_javascript",
      "ic_typescript",
      "ic_html",
      "ic_css",
      "ic_bootstrap",
      "ic_tailwind",
      "ic_material_ui",
    ];

    const container = render(
      <Wrapper>
        <SvgIcons name="ic_react" />
      </Wrapper>
    );

    // Assert
    expect(icons.length).toBeGreaterThan(0);

    expect(container).toMatchSnapshot();
  });
});
