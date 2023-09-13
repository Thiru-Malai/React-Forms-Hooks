import React from "react";
import {useState} from 'react'

function App1() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState({});
  const [cars, setCars] = useState("Volvo");
  const [address, setAddress] = useState("Hi")

  const handleCount = (event) =>{
    let value = count+1
    setCount(values=>(value))
  }

  function handleChange(event){
    let name = event.target.name
    let value = event.target.value;
    setInputs(values=>({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    alert("Username : " + inputs.username + " Age: " + inputs.age)
  }

  const handleCars = (event) => {
    event.preventDefault();
    setCars(event.target.value)
  }

  const handleAddress = (event) => {
    event.preventDefault()
    setAddress(event.target.value)
  }

  return (
      <>
        <p>useState Count:</p>

        <input type="text" value={count}></input>
        <button onClick={handleCount}>Click Me</button>
        <br></br>
        <br></br>
        
        <form onSubmit={handleSubmit}>
        
        <p>useState of Objects:</p>

        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}></input>
        <br></br>
        <input type="text" name="age" value={inputs.age || ""} onChange={handleChange}></input>
        <br></br>
        <input type="submit" value={"Submit"}></input>
        <br></br>

        <p>Select Box:</p>

        <select value={cars} onChange={handleCars}>
          <option value="BMW">BMW</option>
          <option value="AUDI">AUDI</option>
          <option value="RollsRoyace">Rolls Royace</option>
          <option value="Volvo">Volvo</option>
        </select>


        <p>Text Area</p>

        <textarea value={address} onChange={handleAddress} rows="4" cols="48">Hi</textarea>
        </form>
      </>
);
}

export default App1;
