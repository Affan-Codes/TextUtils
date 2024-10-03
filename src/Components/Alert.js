import React from "react";

export default function Alert(props) {

  const capitalize=(word)=>{
    const letter = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
      {capitalize(props.alert.type)} : {props.alert.message}
    </div>
  );
}
