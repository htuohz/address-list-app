import { render } from "@testing-library/react";
import React from "react";
import Signin from "../pages/Signin";
import { renderWithRouter } from "../utils/test-utils";

test("should render Signin", () => {
  renderWithRouter(<Signin />);
});
