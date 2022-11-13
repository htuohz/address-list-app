import { Button, Dialog, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import {
  fetchAddressesByUserId,
  getCurrentAddressID,
  getEditing,
  IAddress,
  listAddresses,
  setCurrentAddressId,
  setEditing,
  setModalOpen,
} from "../../store/addresses/addressesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function AddressForm() {
  const [data, setData] = useState({
    line1: "",
    line2: "",
    line3: "",
    line4: "",
    city: "",
    state_name: "",
    state_code: "",
    country_code: "",
    postal_code: "",
    id: -1,
  });
  const addresses = useAppSelector(listAddresses);
  const currentAddressId = useAppSelector(getCurrentAddressID);
  const dispatch = useAppDispatch();
  const editing = useAppSelector(getEditing);

  useEffect(() => {
    if (!currentAddressId) return;
    const currentAddress = addresses.find(
      (address: IAddress) => address.id === currentAddressId
    );
    if (!currentAddress) return;
    setData(currentAddress);
  }, [currentAddressId]);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    return () => {
      setData({
        line1: "",
        line2: "",
        line3: "",
        line4: "",
        city: "",
        state_name: "",
        state_code: "",
        country_code: "",
        postal_code: "",
        id: -1,
      });
      dispatch(setCurrentAddressId(undefined));
    };
  }, []);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //add a new address
    if (!editing) {
      return axios
        .post("addresses", data)
        .then((res) => {
          if (res.status === 200) {
            dispatch(fetchAddressesByUserId());
          }
        })
        .catch(console.log)
        .finally(() => {
          dispatch(setModalOpen(false));
        });
    }
    if (!currentAddressId) return;

    //updated an existing address
    setData({
      ...data,
      id: currentAddressId,
    });
    return axios
      .put(`addresses/${currentAddressId}`, data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchAddressesByUserId());
        }
      })
      .catch(console.log)
      .finally(() => {
        dispatch(setEditing(false));
        dispatch(setCurrentAddressId(undefined));
        dispatch(setModalOpen(false));
      });
  };

  return (
    <form onSubmit={submit}>
      <Stack spacing={2} padding={2}>
        <TextField
          name="line1"
          value={data.line1}
          onChange={onHandleChange}
          label="Line1"
          required
        />
        <TextField
          type="text"
          name="line2"
          label="Line2"
          value={data.line2}
          onChange={onHandleChange}
        />
        <TextField
          type="text"
          name="line3"
          label="Line3"
          value={data.line3}
          onChange={onHandleChange}
        />
        <TextField
          type="text"
          name="line4"
          label="Line4"
          value={data.line4}
          onChange={onHandleChange}
        />
        <TextField
          type="text"
          name="city"
          value={data.city}
          onChange={onHandleChange}
          label="City"
          required
        />
        <TextField
          type="text"
          name="state_code"
          value={data.state_code}
          label="State Code"
          onChange={onHandleChange}
          required
        />
        <TextField
          type="text"
          name="state_name"
          value={data.state_name}
          onChange={onHandleChange}
          label="State Name"
          required
        />
        <TextField
          type="text"
          name="country_code"
          value={data.country_code}
          onChange={onHandleChange}
          label="Country Code"
          required
        />
        <TextField
          type="text"
          name="postal_code"
          value={data.postal_code}
          onChange={onHandleChange}
          label="Postal Code"
          required
        />
        <div>
          <Button type={"submit"}>Confirm</Button>
          <Button onClick={() => dispatch(setModalOpen(false))}>Cancel</Button>
        </div>
      </Stack>
    </form>
  );
}
