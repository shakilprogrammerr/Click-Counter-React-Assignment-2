import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount]= useState(0)
  const [isDisabled, setDisabled] = useState(false)


const IncrementHandler = ()=>{
  if(count < 5){
    setCount(count + 1)
    
  }
}

const DecrementHandler = ()=>{
  if(count   > -5){
    setCount(count -1)
  }
}

 const resetBtn =  ()=>{
  setCount(0)
 }



  return (
    <>
      <section className="h-screen bg-[#4C4C4C]">
        
          <div className="flex justify-center items-center flex-col h-full gap-16">
          <h2 className="text-4xl font-bold text-[#FFA500]">Counter App</h2>
          <div className="h-[108px] w-[480px] bg-[#3C3C3C] rounded-[10px]">
            <div className="flex flex-col justify-center items-center h-full space-y-4 ">
              <h2 className="text-2xl font-bold text-[#C39947]">Count : {count} </h2>
              <div className="space-x-3">
                <button onClick={IncrementHandler} disabled={count === 5? true : false} className="py-[2px] px-[10px] text-[#C39947] hover:bg-[#FFA500] hover:text-black bg-white rounded-lg text-2xl font-semibold">+</button>
                <button onClick={DecrementHandler} disabled={count === -5? true : false} className="py-[2px] px-[10px] text-[#C39947] hover:bg-[#FFA500] hover:text-black bg-white rounded-lg text-2xl font-semibold">-</button>
                <button onClick={resetBtn}  className="py-[2px] px-[10px] text-[#C39947] hover:bg-[#FFA500] hover:text-black bg-white rounded-lg text-2xl font-semibold">Reset</button>
               
              </div>
            </div>
          </div>
          </div>
       

      </section>
    </>
  );
};

export default CounterApp;
