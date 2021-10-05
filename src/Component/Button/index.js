import "./style.css";

const Button = ({ label, onClick, safe, plain, danger }) => {
  let _className = "btn";

  if (safe) {
    _className += " btn-safe";
  }

  if(plain){
    _className += " btn-plain";
  }
  if(danger){
    _className += " btn-danger";
  }

  return (
    <button className={_className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
