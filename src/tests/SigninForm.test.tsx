import { render, screen } from "@testing-library/react";
import SigninForm from "../components/signinForm/SigninForm";
import React from "react";
import { renderWithRouter } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Sign in form works correctly", () => {
  it("if a valid username and password entered, the user should get passed", () => {
    renderWithRouter(<SigninForm />);
    const email = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(email, "test@test.com");
    const password = screen.getByTestId(/password/i);
    userEvent.type(password, "Aa123456");
    const signinBtn = screen.getByRole("button", { name: /sign in/i });
    userEvent.click(signinBtn);
  });
});
