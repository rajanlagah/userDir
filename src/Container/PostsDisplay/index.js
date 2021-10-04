import { useEffect, useState } from "react";
import Card from "../../Component/Card";

import "./style.css";

function PostDisplay({_users}) {
 

  return (
    <div className="PostDisplay">
      {_users &&
        _users.map((user) => (
          <Card
            Country={user["Country"]}
            dob={user["Date of birth"]}
            email={user["Email"]}
            name={user["Full Name"]}
            id={user["Id"]}
            key={user["Id"]}
          />
        ))}
    </div>
  );
}

export default PostDisplay;
