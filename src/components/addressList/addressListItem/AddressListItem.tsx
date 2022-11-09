import React, { useState } from "react";

type AddressListItemProps = {
  addressId: number;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  city: string;
  postalCode: string;
  countryCode: string;
  stateCode: string;
  stateName: string;
};

export default function AddressListItem({
  line1,
  line2,
  line3,
  line4,
  city,
  postalCode,
  countryCode,
  stateCode,
  stateName,
}: AddressListItemProps) {
  const [editing, setEditing] = useState(false);

  const handleClickSave = () => {
    setEditing(false);

    //call update address api
  };

  const handleClickDelete = () => {
    //call delete api
  };
  return (
    <tr>
      <td>{line1}</td>
      <td>{line2}</td>
      <td>{line3}</td>
      <td>{line4}</td>
      <td>
        <input
          type="text"
          value={city}
          onChange={() => {
            return;
          }}
          readOnly={!editing}
          disabled={!editing}
        />
      </td>
      <td>{postalCode}</td>
      <td>{countryCode}</td>
      <td>{stateCode}</td>
      <td>{stateName}</td>
      <td>
        {editing ? (
          <button onClick={handleClickSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button onClick={handleClickDelete}>Delete</button>
      </td>
    </tr>
  );
}
