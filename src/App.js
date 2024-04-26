import React from 'react'
import "./App.css";
import { useState } from 'react';

const App = () => {
  
  const cambios=[
    {
      moneda: "Cantidad",
      cambio:0,
    },{
      moneda: "Peso argentino",
      cambio:4.46,
    },{
      moneda: "Euro",
      cambio:4000,
    },{
      moneda: "Peso mexicano",
      cambio:227.13,
    },{
      moneda: "Dólar",
      cambio:3800
    }
  ]
   
  
  const [cantidad, setCantidad] = useState (0);
  
  const  [resultado1, setResultado1] = useState (0);
  const  [resultado2, setResultado2] = useState (0);
  const  [resultado3, setResultado3] = useState (0);
  const  [resultado4, setResultado4] = useState (0);
   
  


  const modificar =(q)=>{
   setCantidad(q.target.value);
   setResultado1(q.target.value*cambios[1].cambio)
   setResultado2(q.target.value*cambios[2].cambio)
   setResultado3(q.target.value*cambios[3].cambio)
   setResultado4
   (q.target.value*cambios[4].cambio)
  }


  return (
    <>
    
    <div className='caja1'>

    <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/> <br></br>

    <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1} readOnly/> <br></br>

    <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2} readOnly/> <br></br>

    <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={resultado3} readOnly/> <br></br>

    <label htmlFor="u4">{cambios[4].moneda}r</label>
        <input id="u4" type="number" value={resultado4} readOnly/> 


    </div>
    
    
    
    
    
    </>
  )
}

export default App

