import { useEffect, useState } from "react";
import { addNewUserData, updateUser } from "../../action/user";
import Card from "../../Component/Card";

function CardContainer({
  user = {},
  onUserDelete,
  isNewUser,
  setisAddBtnClicked,
  setshowSuccess,
  setshowError,
  setalertMsg
}) {
  const [edit, setedit] = useState(false);
  const [country, setCountry] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");

  const setUserData = () => {
    setCountry(user["Country"]);
    setdob(user["Date of birth"]);
    setemail(user["Email"]);
    setname(user["Full Name"]);
  };

  useEffect(() => {
    if (!isNewUser) {
      setUserData();
    }
  }, []);

  const updateUserData = async () => {
    try {
      const resp = await updateUser({ id: user["Id"], user });
      console.log(resp);

      setshowSuccess(true);
      setshowError(false);
      setalertMsg("User updated")
    } catch (e) {
      setshowSuccess(false);
      setshowError(true);
      setalertMsg("User update fail")
      console.log("error is", e);
    }
  };

  const saveUser = async () => {
    try {
      const resp = await addNewUserData({
        Country: country,
        "Date of birth": dob,
        Email: email,
        "Full Name": name
      });
      setisAddBtnClicked(false);

      setshowSuccess(true);
      setshowError(false);
      setalertMsg("User added")
      
    } catch (e) {
      setshowSuccess(false);
      setshowError(true);
      setalertMsg("User not added")
      console.log("error is", e);
    }
  };

  const onEditClick = (wasUpdate) => {
    if (wasUpdate) {
      updateUserData();
    }
    setedit(!edit);
  };

  const onExitEditMode = () => {
    setUserData();
    setedit(false);
  };

  return (
    <div>
      <Card
        Country={country}
        dob={dob}
        email={email}
        name={name}
        id={user["Id"]}
        key={`${user["Email"]} ${user["Created at"]}`}
        onEditClick={onEditClick}
        isEditMode={edit}
        exitEditMode={onExitEditMode}
        setCountry={setCountry}
        setdob={setdob}
        setemail={setemail}
        setname={setname}
        onUserDelete={onUserDelete}
        isNewUser={isNewUser}
        saveUser={saveUser}
      />
    </div>
  );
}

export default CardContainer;
