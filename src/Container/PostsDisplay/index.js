import { useState } from "react";
import Alert from "../../Component/Alerts";
import Button from "../../Component/Button";
import CardContainer from "../CardContainer";

import "./style.css";

const PostDisplay = ({ _users, onUserDelete, isLoading }) => {
  const [isAddBtnClicked, setisAddBtnClicked] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const [showError, setshowError] = useState(false);
  const [alertMsg, setalertMsg] = useState("");
  if (isLoading) {
    <span>Loading data ....</span>;
  }
  return (
    <div >
      {(showSuccess || showError) && (
        <Alert isSuccess={showSuccess} msg={alertMsg} />
      )}
      <Button safe label="Add" onClick={setisAddBtnClicked} />
      {isAddBtnClicked && (
        <CardContainer
          isNewUser={isAddBtnClicked}
          setisAddBtnClicked={setisAddBtnClicked}
          setshowSuccess={setshowSuccess}
          setshowError={setshowError}
          setalertMsg={setalertMsg}
        />
      )}

      <div className="PostDisplay">
        {(!_users || _users.length == 0) && <div>No User found</div>}
        {_users &&
          _users.map((user) => (
            <CardContainer
              onUserDelete={onUserDelete}
              setshowSuccess={setshowSuccess}
              setshowError={setshowError}
              setalertMsg={setalertMsg}
              key={`${user["Created at"]} ${user["Email"]} `}
              user={user}
            />
          ))}
      </div>
    </div>
  );
};

export default PostDisplay;
