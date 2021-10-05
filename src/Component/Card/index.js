import React from "react";
import Button from "../Button";
import SmartInput from "../SmartInput";

import "./style.css";

const Card = ({
  imageSrc = "",
  name = "",
  email = "",
  dob = "",
  Country = "",
  onEditClick,
  isEditMode,
  exitEditMode,
  id,
  saveUser,
  setCountry,
  setdob,
  setemail,
  setname,
  onUserDelete,
  isNewUser
}) => (
  <div className="card-container flex-row">
    <div className="flex-lg">
      <img src={imageSrc} />
    </div>
    <div className="flex-lg">
      <ul>
        <li>
          Name:{" "}
          <SmartInput
            disable={!isEditMode && !isNewUser}
            value={name}
            onChange={({ target }) => setname(target.value)}
          />
        </li>
        <li>
          Email:{" "}
          <SmartInput
            disable={!isEditMode && !isNewUser}
            value={email}
            onChange={({ target }) => setemail(target.value)}
          />
        </li>
        <li>
          Date of birth:{" "}
          <SmartInput
            value={dob}
            disable={!isEditMode && !isNewUser}
            onChange={({ target }) => setdob(target.value)}
          />
        </li>
        <li>
          Country:{" "}
          <SmartInput
            value={Country}
            disable={!isEditMode && !isNewUser}
            onChange={({ target }) => setCountry(target.value)}
          />
        </li>
      </ul>
    </div>
    <div className="flex-sm">
      {!isNewUser && (
        <Button
          plain
          label={!isEditMode ? "Edit" : "Save"}
          onClick={() => onEditClick(isEditMode)}
        />
      )}{" "}
      {isNewUser && <Button danger label={"Save"} onClick={() => saveUser()} />}
      {!isNewUser && isEditMode && (
        <Button danger label={"exit"} onClick={() => exitEditMode()} />
      )}
      {!isNewUser && !isEditMode && (
        <Button danger label={"Delete"} onClick={() => onUserDelete(id)} />
      )}
    </div>
  </div>
);

export default Card;
