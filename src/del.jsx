import React from "react";


const Foot = (props)=>{
    return(
    <div id = "fish"className="dele m-4">
    <input placeholder="Titles" name = "title" value = {`${props.Title}`} type="text"></input>
    <textarea placeholder="Contents" name = "content" value = {props.content}  rows="10"></textarea>
   <span className = "btns">
    <button onClick = {()=>props.Deletes(props.id)}>Del</button>
    </span>
    </div>) }
export default Foot;
