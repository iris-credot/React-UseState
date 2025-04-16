import React,{useState} from "react";

 export default function CCounter(){
    const [count, setCount] = useState(0);
    return(
        <div className="justify-center items-center">
            <h1 className="text-3xl mt-3">Count:{count}</h1>
            <button
  className="bg-green-800 text-white mx-4 p-2 mt-3"
  onClick={() => {
    if (count>=0 && count < 15) {
      setCount(count + 2);
    }
  }}
>
  {count < 15 ? 'Increase' : 'High score'}
</button> 
            <button className="bg-yellow-300 text-white mx-4 p-2 mt-3" 
            onClick={()=>{
                if(count> 0){
                setCount(count-1)
            }}}>
                     Reduce</button>
            <button className="bg-red-900 text-white mx-4 p-2 mt-3" onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
