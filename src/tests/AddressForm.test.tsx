import { renderWithProviders, renderWithRouter } from "../utils/test-utils";
import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddressForm from "../components/addressForm/AddressForm";

describe("should render address form", () => {
  it("should allow user to enter line1", () => {
    renderWithProviders(<AddressForm />);
    const line1 = screen.getByRole("textbox", { name: /line1/i });
    userEvent.type(line1, "15");
  });
});
