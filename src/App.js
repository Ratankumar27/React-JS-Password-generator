import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passchar';

function App() {
let [checkup, setcheckup]=useState(false)
let [checklwr, setchecklwr]=useState(false)
let [checkno, setcheckno]=useState(false)
let [checksym, setchecksym]=useState(false)
let[pswdlen, setpswdlen]=useState(10)
let [movepsd, setmovepsd]=useState()

let generate=()=>{
  let charpass=""
  let finpass=""
 if(checkup || checklwr || checkno || checksym){
  if(checkup) charpass+=UC;
  if(checklwr) charpass+=LC;
  if(checkno)  charpass+=NC;
  if(checksym) charpass+=SC
  
  for( let i=0; i<pswdlen; i++){
    finpass+= charpass.charAt(Math.floor(Math.random()*charpass.length))
  }
  setmovepsd(finpass)
  
 }
else{
  alert("Select atleast one format");
 }
}
 
 let copy=()=>{
  navigator.clipboard.writeText(movepsd)
 }


  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordinput'>
          <input type='text' readOnly value={movepsd}/>
          <button onClick={copy}>Copy</button>
    </div>   

    <div className='passlen'>
      <label>Password length</label>
       <input type='number' max={20} min={8} value={pswdlen} onChange={(event)=>setpswdlen(event.target.value)}/>
    </div >
    
    <div className='passupper'>
      <label>Includ Uppercase letter </label>
       <input type='checkbox' checked={checkup} onChange={()=>setcheckup(!checkup)} />
    </div >

    <div className='passlwr'>
      <label>Includ Lowercase letters </label>
       <input type='checkbox'checked={checklwr} onChange={()=>setchecklwr(!checklwr)} />
    </div >

    <div className='passno'>
      <label>Include numbers</label>
       <input type='checkbox' checked={checkno} onChange={()=>setcheckno(!checkno)} />
    </div >

    <div className='passymb'>
      <label>Include symbols </label>
       <input type='checkbox' checked={checksym} onChange={()=>setchecksym(!checksym)}/>
    </div >
    
   <button className="btn" onClick={generate}>Generate Password</button>
    

    </div>
    
   

    </>
  );
}

export default App;
