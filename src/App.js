import Li from "./Li";
import React, { useState } from "react";
//import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
const List = () => {
  // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  let [inputList, setInputList] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const item = () => {
    setitems([...items, inputList]);  
    setInputList("");
  };

  const del = (id) => {
    setitems((oldITEM) => {
      //console.log(oldITEM)
      return oldITEM.filter((array, index) => {
        return index !== id;
      });
    });
  };
 
  return (
    <div>  
      <div className="bg" >
        <div className="main" align="center">
          <table   align="center" className="tbl">
            <div align="center">
          <h1 className="txt"> TODO LIST</h1>
          <div className="main1">
            {/* <form> */}
              <input className="input-f"
                type="text"
                placeholder="ADD Items"
                onChange={itemEvent}
                value={inputList}
              />
              {/* <button type="reset">X</button> */}
            {/* </form> */}
            <button onClick={item}  className="bt"> + </button>
            </div>
          </div>
          <ol className="txt2">
            {items.map((values, index) => {
              return <Li key={index} id={index} onSelect={del} text={values} />;
            })}
          </ol>
          </table>
        </div>
      </div>    
     <div>
  
   </div>
     
    </div>
  );

};
export default List;
