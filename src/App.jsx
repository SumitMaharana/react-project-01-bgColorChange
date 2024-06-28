import { useState } from "react";
function App() {
  const [color, setcolor] = useState("white");
  const [value,setvalue]=useState("Click");
  return (
    <>
      <div className="w-full h-screen p-4" style={{backgroundColor:color}}>
        <center>
          <h1>{value}</h1>
        </center>
          <center>
          <div className="w-4/5 bg-slate-400 flex flex-wrap justify-center rounded-full">
      <button className='p-2 bg-red-600 rounded-xl w-40 m-4' onClick={()=>{setcolor("red"),setvalue("red")}}>
        Red
      </button> 
      <button className='p-2 bg-green-500 rounded-xl w-40 m-4' onClick={()=>{setcolor("green")}}>
        Green
      </button>
      <button className='p-2 bg-yellow-500 rounded-xl w-40 m-4' onClick={()=>{setcolor("yellow")}}>
        Yellow
      </button>
          </div>
          </center>
      </div>
    </>
  );
}

export default App;
