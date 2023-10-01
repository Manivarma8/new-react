import React, {useState} from "react";


const App = (props)=>{
  const [Work, Setwork] = useState({title : "", content : ""})
  const Modify = (event)=>{
    const{name, value} = event.target;
   return(
   Setwork((prevVal)=>{return{...prevVal,[name] : value}})
   )
   }
 const Fish = ()=>{
return(
  props.Add(Work),
  Setwork({
    title : "",
    content : ""
  })
)
 }

 return(
    <>
    <div  className = "main m-4">
      <input type="text" placeholder="Title " name = "title" onChange = {Modify} value = {Work.title}/>
      <textarea placeholder = "Content" value= {Work.content} name = "content" onChange = {Modify} rows="10"></textarea>
    <button onClick={Fish}>Add</button>
    </div>
  </>)
}
export default App;
