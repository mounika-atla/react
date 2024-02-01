import React from "react";
import {connect} from "react-redux";
function Fakestore(props){
    return(
        <div className="border border-2 m-2 p-2 border-primary">
            <h1>products store</h1>
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:"UPDATENEWTODO",payload:e.target.value})}}></input>
            <button onClick={()=>{props.dispatch({type:"ADDPRODUCT"})}}>Add Todos</button>
            <ul>{
                  props.todolist.todos.map((t,i)=>{
                    return<li>
                        {t}
                        <button onClick={()=>{props.dispatch({type:"DELTODO",index:i})}}>Del</button>
                    
                    </li>
                  }) 
                }           
            </ul>
        </div>
    )
}
export default connect (function(store){return store}) (Fakestore)