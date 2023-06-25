import React from 'react'
import logo from "../src/assets/logo.png"
import "./index.css";

function Navbar() {
  return (
    <div>
        <div className="logo">
            <img src={logo} alt="logo pemkab" />
        </div>
        <h1 className="text-zinc-200 font-bold underline ">
            Hello world!
        </h1>
    </div>
  )
}

export default Navbar