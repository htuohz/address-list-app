import React from "react";
import { renderWithRouter } from "../utils/test-utils";
import SignupForm from "../components/signupForm/SignupForm";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Sign up form works correctly", () => {
  it("if a valid username and password entered, the user should get passed", () => {
    renderWithRouter(<SignupForm />);
    const email = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(email, "test@test.com");
    const password = screen.getByTestId("password");
    userEvent.type(password, "Aa123456");
    const signup = screen.getByRole("button", { name: /sign up/i });
    userEvent.click(signup);
  });
});
