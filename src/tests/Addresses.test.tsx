import Addresses from "../pages/Addresses";
import { renderWithProviders } from "../utils/test-utils";
import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("should render Addresses correctly", () => {
  it("should allow user to click edit button", () => {
    renderWithProviders(<Addresses />);
    const editButton = screen.getByRole("button", { name: /edit/i });
    userEvent.click(editButton);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("should render a dialog when user clicks delete button", () => {
    renderWithProviders(<Addresses />);
    const deleteBtn = screen.getByRole("button", { name: /delete/i });
    userEvent.click(deleteBtn);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("should allow user to add a new address", () => {
    renderWithProviders(<Addresses />);
    const addBtn = screen.getByRole("button", { name: /add new address/i });
    userEvent.click(addBtn);
    const line1 = screen.getByRole("textbox", {
      name: /line1/i,
    });
    userEvent.type(line1, "10");
    const city = screen.getByRole("textbox", {
      name: /city/i,
    });
    userEvent.type(city, "Gold Coast");
    const stateName = screen.getByRole("textbox", {
      name: /state name/i,
    });
    userEvent.type(stateName, "Queensland");
    const stateCode = screen.getByRole("textbox", {
      name: /state code/i,
    });
    userEvent.type(stateCode, "QLD");
    const countryCode = screen.getByRole("textbox", {
      name: /country code/i,
    });
    userEvent.type(countryCode, "AU");
    const postalCode = screen.getByRole("textbox", {
      name: /postal code/i,
    });
    userEvent.type(postalCode, "4207");
    const confirmBtn = screen.getByRole("button", { name: /confirm/i });
    userEvent.click(confirmBtn);
  });
});
