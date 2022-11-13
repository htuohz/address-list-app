import styled from "@emotion/styled";
import React from "react";
import AddressList from "../components/addressList/AddressList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getModalOpen,
  setEditing,
  setModalOpen,
} from "../store/addresses/addressesSlice";
import { Button, Dialog } from "@mui/material";
import AddressForm from "../components/addressForm/AddressForm";

export default function Addresses() {
  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector(getModalOpen);
  return (
    <StyledContainer>
      <Button
        onClick={() => {
          dispatch(setEditing(false));
          dispatch(setModalOpen(true));
        }}
      >
        Add new address
      </Button>
      <AddressList />
      <Dialog maxWidth="sm" fullWidth open={modalOpen}>
        <AddressForm />
      </Dialog>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 3rem;
`;
