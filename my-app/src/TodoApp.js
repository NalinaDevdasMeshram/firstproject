import React from "react";
import Heading from "./Heading";
function TodoApp(){
    
    return(
        <div>
            <Heading/>
            <div>
              <input type="text" placeholder="Enter Item Name"/>
              <input type="date" placeholder="date"/>
              <button>ADD</button>
            </div>
        </div>
    )

}
export default TodoApp;