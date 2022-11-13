import React, { useState } from "react";
import {
  fetchAddressesByUserId,
  IAddress,
  setEditing,
  setModalOpen,
} from "../../../store/addresses/addressesSlice";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentAddressId } from "../../../store/addresses/addressesSlice";
import axios from "../../../api/axios";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import ConfirmDialog from "../../confirmDialog/ConfirmDialog";

type AddressListItemProps = IAddress;

export default function AddressListItem({
  line1,
  line2,
  line3,
  line4,
  city,
  postal_code,
  country_code,
  state_code,
  state_name,
  id,
}: AddressListItemProps) {
  const dispatch = useAppDispatch();
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const deleteAddress = () => {
    axios
      .delete(`addresses/${id}`)
      .then(() => dispatch(fetchAddressesByUserId()))
      .catch(console.log);
  };

  return (
    <>
      <TableRow>
        <TableCell>{line1}</TableCell>
        <TableCell>{line2}</TableCell>
        <TableCell>{line3}</TableCell>
        <TableCell>{line4}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell>{state_code}</TableCell>
        <TableCell>{state_name}</TableCell>
        <TableCell>{postal_code}</TableCell>
        <TableCell>{country_code}</TableCell>
        <TableCell>
          <Button
            onClick={() => {
              dispatch(setEditing(true));
              dispatch(setCurrentAddressId(id));
              dispatch(setModalOpen(true));
            }}
          >
            Edit
          </Button>
          <Button onClick={() => setConfirmDialogOpen(true)}>Delete</Button>
        </TableCell>
      </TableRow>
      <ConfirmDialog
        message="Do you want to delete this address?"
        dialogOpen={confirmDialogOpen}
        handleConfirm={deleteAddress}
        setDialogOpen={setConfirmDialogOpen}
      />
    </>
  );
}
