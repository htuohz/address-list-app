import { rest } from "msw";
import React from "react";
import AddressList from "../components/addressList/AddressList";
import { renderWithProviders } from "../utils/test-utils";
import { setupServer } from "msw/node";

it("should render address list", () => {
  renderWithProviders(<AddressList />);
});
