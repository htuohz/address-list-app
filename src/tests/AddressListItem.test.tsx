import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import AddressListItem from "../components/addressList/addressListItem/AddressListItem";

describe("should render address list item", () => {
  it("should render address, city, postal code, country code, state code and state name", () => {
    render(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            countryCode="AU"
            stateCode="NSW"
            stateName="New South Walse"
            postalCode="1001"
          />
        </tbody>
      </table>
    );
    const city = screen.getByDisplayValue(/sydney/i);
    expect(city).toBeInTheDocument();
  });

  it("should render edit and delete button", () => {
    render(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            countryCode="AU"
            stateCode="NSW"
            stateName="New South Walse"
            postalCode="1001"
          />
        </tbody>
      </table>
    );
    const deleteBtn = screen.getByRole("button", { name: /delete/i });
    expect(deleteBtn).toBeInTheDocument();
    const editBtn = screen.getByRole("button", { name: /edit/i });
    expect(editBtn).toBeInTheDocument();
  });

  it("should not allow users to edit the fields before clicking editing button", () => {
    render(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            countryCode="AU"
            stateCode="NSW"
            stateName="New South Walse"
            postalCode="1001"
          />
        </tbody>
      </table>
    );
    const city = screen.getByDisplayValue(/sydney/i);
    expect(city).toBeDisabled();
  });

  it("should allow users to edit the fields after clicking editing button", () => {
    render(
      <table>
        <tbody>
          <AddressListItem
            line1="1 Xyz street"
            line2=""
            line3=""
            line4=""
            city="Sydney"
            countryCode="AU"
            stateCode="NSW"
            stateName="New South Walse"
            postalCode="1001"
          />
        </tbody>
      </table>
    );
    const city = screen.getByDisplayValue(/sydney/i);
    expect(city).toBeDisabled();
    const editBtn = screen.getByRole("button", { name: /edit/i });
    userEvent.click(editBtn);
    expect(city).toBeEnabled();
    const saveBtn = screen.getByRole("button", { name: /save/i });
    expect(saveBtn).toBeInTheDocument();
  });
});
