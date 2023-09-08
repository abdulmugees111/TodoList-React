import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Li=(props)=>{

return (
<div>
<div className="li">
{props.id + 1}
<button className="bt-del"
 onClick={()=>{
    props.onSelect(props.id)}}
    ><DeleteForeverIcon/></button> 

  <input type="text" value={props.text} className="input"></input>
 
      
        
{/* <span> {props.text}</span> */}
</div>
</div>
);
}
export default Li;