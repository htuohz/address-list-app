import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import { renderWithProviders } from "../utils/test-utils";

test("log out button should work", async () => {
  renderWithProviders(<App />);
  const logoutBtn = screen.getByRole("button", { name: /sign out/i });
  userEvent.click(logoutBtn);
  const signinBtn = await screen.findByRole("button", { name: /sign in/i });
  expect(signinBtn).toBeInTheDocument();
});
