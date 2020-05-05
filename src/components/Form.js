import React from "react";
import style from "./Form.module.css"
import uuid from "uuid"

const Form = ({onSubmit, item}) =>  {

  function handleClick (e) {
    e.preventDefault();
    const data = {
      id: !!item ? item.id : uuid(),
      title: e.target.elements.title.value,
      type: e.target.elements.type.value.toLowerCase(),
      description: e.target.elements.description.value
    };
    onSubmit(data);
    e.target.reset();
  }
  function upperFirst(value) {
      return value[0].toUpperCase() + value.slice(1);
  }

  return(
      <form onSubmit={handleClick} id="form">
        <input placeholder="Title" name="title" defaultValue={item ? item.title : ""}/>
        <select name="type" defaultValue={item ? upperFirst(item.type) : ""}>
          <option className="other">Other</option>
          <option className="study">Study</option>
          <option className="home">Home</option>
          <option className="sport">Sport</option>
        </select>
        <textarea placeholder="Describe you activity..." name="description" defaultValue={item ? item.description: ""}/>
        <div className={style.btns_div}>
          <button className={style.btn_1} type="submit">{item ? "UPDATE" : "SAVE"}</button>
          <button className={style.btn_2} type="reset">CANCEL</button>
        </div>
      </form>
  )
};

export default Form;
