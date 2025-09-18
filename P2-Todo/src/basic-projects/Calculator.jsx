import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const handleClear = () =>{
    setInputValue('')
  }

  const display = (value) => setInputValue(inputValue + value)

  const calculate = () => setInputValue(eval(inputValue))
 
  return (
    <div>
      <form className="calculator">
        <input
          type="text"
          value={inputValue}
        />

        <span onClick={()=>handleClear}>c</span>
        
        <span onClick={()=> display("/")}>/</span>
        <span onClick={()=> display("*")}>*</span>
        <span onClick={()=> display("7")}>7</span>
        <span onClick={()=> display("8")}>8</span>
        <span onClick={()=> display("9")}>9</span>
        <span onClick={()=> display("-")}>-</span>
        <span onClick={()=> display("4")}>4</span>
        <span onClick={()=> display("5")}>5</span>
        <span onClick={()=> display("6")}>6</span>
        <span onClick={()=> display("+")}>
            +
        </span>

        <span onClick={()=> display("1")}>1</span>
        <span onClick={()=> display("2")}>2</span>
        <span onClick={()=> display("3")}>3</span>
        <span onClick={()=> display("0")}>0</span>
        <span onClick={()=> display("00")}>00</span>
        <span onClick={()=> display(".")}>.</span>
        <span onClick={()=> calculate()}>=</span>

      </form>
    </div>
  );
};

export default Calculator;
