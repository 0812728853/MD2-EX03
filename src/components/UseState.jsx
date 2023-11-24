import React, { useState } from 'react'

function UseState() {
     const [click, setClick] = useState(0);
     const handleChangeClick = () =>{
         setClick(click + 1);
     }
     const [ text, setText] = useState(0);
    const value =document.getElementsByTagName("input")

     const handleChangeText = () => {
         setText()
     }




  return (
    <div>
         <h3>Ex01</h3>
        <div>Bạn đã click {click} lần</div>
        <button onClick={handleChangeClick}>Click để tăng số lần</button>
        <h3>Ex02</h3> 
        <input type="text" />
         <p>Số ký tự:{click}</p>
        <button onClick={handleChangeText}></button> 
         </div>
  )
}

export default UseState