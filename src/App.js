import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Login form</h1>
    

      Username : <input   type = "text"/><br></br>
      Password :<input  type="text"/><br></br>
          <button onClick={()=>alert("login successful")}>login</button>
      
     

      
      
    </div>
    
   
  );
  
}
