import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import NavBar from "../components/navBar/NavBar";
import { renderWithRouter } from "../utils/test-utils";

test("navbar should render correctly", async () => {
  renderWithRouter(<NavBar />);

});
