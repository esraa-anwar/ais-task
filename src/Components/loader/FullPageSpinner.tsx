import React from "react";
import loader from "./loading.gif"
import "./styles.scss"
export default function FullPageSpinner(props:boolean) {
  if (props.show) {
    return (
      <div className="full-page-spinner">
    <img src={loader} alt="" />
      </div>
    );
  }
  return null;
}