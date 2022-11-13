import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import AddressListItem from "../components/addressList/addressListItem/AddressListItem";
import { renderWithProviders } from "../utils/test-utils";

describe("should render address list item", () => {
  it("should render address, city, postal code, country code, state code and state name", () => {
    renderWithProviders(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            country_code="AU"
            state_code="NSW"
            state_name="New South Walse"
            postal_code="1001"
            id={0}
          />
        </tbody>
      </table>
    );
    const row = screen.getByRole("row");
    expect(row).toHaveTextContent(/sydney/i);
    expect(row).toHaveTextContent(/au/i);
    expect(row).toHaveTextContent(/nsw/i);
    expect(row).toHaveTextContent(/new south walse/i);
    expect(row).toHaveTextContent("1001");
  });

  it("should render edit and delete button", () => {
    renderWithProviders(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            country_code="AU"
            state_code="NSW"
            state_name="New South Walse"
            postal_code="1001"
            id={0}
          />
        </tbody>
      </table>
    );
    const deleteBtn = screen.getByRole("button", { name: /delete/i });
    expect(deleteBtn).toBeInTheDocument();
    const editBtn = screen.getByRole("button", { name: /edit/i });
    expect(editBtn).toBeInTheDocument();
  });
});
