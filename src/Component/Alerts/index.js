import Button from "../Button";
import "./style.css";

const Alert = ({ isSuccess, msg }) => {
  let _className = "alert";

  if (isSuccess) {
    _className += " alert-success";
  } else {
    _className += " alert-error";
  }

  return <div className={_className}>{msg}</div>;
};

export default Alert;
