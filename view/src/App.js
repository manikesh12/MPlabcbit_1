import React, { useState } from 'react';
import "./App.css";
import Axios from "axios";
function App()
{
const[sname,setStudentName]=useState("");
const[tech,setTechnology]=useState("");
const[section,setSection]=useState("");
  const submitReview=()=>{

 Axios.post('http://localhost:9000/student',
 {
name:sname,
tech:tech,
section:section
 } ).then(()=>{
  alert("sucess");
 })
  }
return(
<div className="App">
<h1><b> Crud Application </b></h1>
<div className='information'>
<label><b> Student Name</b></label>
  <input type="text" name="sname" onChange={(e)=>{
setStudentName(e.target.value);

  }}required />
  <label><b> Technology</b></label>
  <input type="text" name="tech" onChange={(e)=>{
setTechnology(e.target.value);

  }} required />
  <label><b> Section</b></label>
  <input type="text" name="section"onChange={(e)=>{
setSection(e.target.value);

  }} required />
  <button onClick={submitReview}> <b> Submit </b></button>
</div>
</div>

);



}

export default App