import { renderWithRouter } from "../utils/test-utils";
import React from "react";
import Signup from "../pages/Signup";

test("should render Signup", () => {
  renderWithRouter(<Signup />);

});
