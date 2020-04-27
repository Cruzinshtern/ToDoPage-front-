import React from "react";
import style from "./ClearList.module.css"

function ClearList ({onReset}) {
  return (
    <div>
      <button className={style.clearlist} onClick={onReset}>CLEAR LIST</button>
    </div>
  )
}

export default ClearList;
