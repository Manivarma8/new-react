import React,{useState} from "react";
import App from './Add';
import Foot from "./del";
const Dish= ()=>{   

    const[deletes,setDelete] = useState([]);
    const Delete = (id)=>{
        setDelete((prevVal)=>{
     return prevVal.filter((indexes, Varman)=>{
     return id !== Varman;
         })
        })
     }
     const Incorporate = (Vijay)=>{
         (setDelete((prevVal)=>{
         return[...prevVal,Vijay]}
           ))
          
     }

    return(
        <>
    <div className="dele">
        <App Add = {Incorporate} 
        />
{deletes.map((Work,index)=>(
   <Foot 
   Title = {Work.title}
   id = {index}
   key = {index}
   content = {Work.content}
   Deletes = {Delete}
   />
                      
))}
    </div>
    <div>

    </div>
    </>
    )
}
export default Dish;