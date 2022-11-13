import { render, screen, waitFor } from "@testing-library/react";
import ConfirmDialog from "../components/confirmDialog/ConfirmDialog";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("confirm dialog should render correctly with given props", () => {
  it("should call handleConfirm callback function, when user clicks yes button", () => {
    const handleConfirm = jest.fn();
    const setDialogOpen = jest.fn();
    render(
      <ConfirmDialog
        dialogOpen={true}
        message={"Do you want to delete an address?"}
        handleConfirm={handleConfirm}
        setDialogOpen={setDialogOpen}
      />
    );
    const confirBtn = screen.getByRole("button", { name: /yes/i });
    userEvent.click(confirBtn);
    expect(handleConfirm).toBeCalled();
  });
  it("should call setDialogOpen function with false, when user clicks no button", () => {
    const handleConfirm = jest.fn();
    const setDialogOpen = jest.fn();
    render(
      <ConfirmDialog
        dialogOpen={true}
        message={"Do you want to delete an address?"}
        handleConfirm={handleConfirm}
        setDialogOpen={setDialogOpen}
      />
    );
    const cancelBtn = screen.getByRole("button", { name: /no/i });
    userEvent.click(cancelBtn);
    expect(setDialogOpen).toBeCalledWith(false);
  });
});
