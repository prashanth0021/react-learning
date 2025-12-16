import React,{ useRef } from "react";
function UncontrolledInput(){
    const inputRef=useRef(null);
    function showValue(){
        alert("CurrentValue"+inputRef.current.value);
    }
    return(
        <div>
            <h3>UncontrolledInput</h3>
            <input type="text" ref={inputRef}/>
            <button onClick={showValue}>Show Input Value</button>
        </div>
    );
}
export {UncontrolledInput};