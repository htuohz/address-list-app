import React, { useEffect, useState } from "react";
import AddressListItem from "./addressListItem/AddressListItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchAddressesByUserId,
  IAddress,
  listAddresses,
} from "../../store/addresses/addressesSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AddressList() {
  const disptach = useAppDispatch();
  const addresses = useAppSelector(listAddresses);

  useEffect(() => {
    disptach(fetchAddressesByUserId());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Line1</TableCell>
            <TableCell>Line2</TableCell>
            <TableCell>Line3</TableCell>
            <TableCell>Line4</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State Code</TableCell>
            <TableCell>State Name</TableCell>
            <TableCell>Postal Code</TableCell>
            <TableCell>Country Code</TableCell>
            <TableCell>Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.length &&
            addresses.map(
              ({
                id,
                line1,
                line2,
                line3,
                line4,
                city,
                state_code,
                state_name,
                postal_code,
                country_code,
              }: IAddress) => (
                <AddressListItem
                  key={id}
                  id={id}
                  line1={line1}
                  line2={line2}
                  line3={line3}
                  line4={line4}
                  city={city}
                  state_code={state_code}
                  state_name={state_name}
                  postal_code={postal_code}
                  country_code={country_code}
                />
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
