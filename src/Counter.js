import React,{useState} from "react"


function Counter(){
 const[count,setCount]=useState(0);
    function Increase(){
 setCount(count+1);
    }
    function Decrease(){
        setCount(count-1);
    }
    return(
        <>
       <h1>{count}</h1>
       <button onClick={Increase}>
        +1
       </button>
       <button onClick={Decrease}>-1</button>
        </>

    );

}
export default Counter
