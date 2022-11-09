import { render } from "@testing-library/react";
import React from "react";
import AddressList from "../components/addressList/AddressList";

it("should render address list", () => {
  render(<AddressList />);
});
