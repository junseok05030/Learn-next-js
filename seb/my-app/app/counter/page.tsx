"use client";
import { useState } from "react"; //useState문

 //클라이언트 렌더링.

export default function Counter() {

    const [value, setValue] = useState(0);

  //카운터의 기능
  // + > +1
  const plus = () => {
    setValue(value + 1);
  };
  // - > -1
  const minus = () => {
    setValue(value - 1);    
  };
  // reset > 0
  const reset = () => {
    setValue(0);
  };
  // 음수 막기



  return (

    <div>
      <h1>참을 수 없는 버@튼 : {value}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>
    </div>

  );
}
//onClick : 버튼 누르면 괄호 안에 함수 표시
