import React from 'react'
import "./App.css";
import { useState } from 'react';

const App = () => {
  
  const cambios=[
    {
      moneda: "Cantidad",
      cambio: 0,
    },{
      moneda: "Peso argentino",
      cambio:0.22,
    },{
      moneda: "Euro",
      cambio:0.00024,
    },{
      moneda: "Peso mexicano",
      cambio:0.0043,
    },{
      moneda: "Dólar",
      cambio:0.00025
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
   setResultado4(q.target.value*cambios[4].cambio)
  }

 
  


  return (
    
<div>

    <div>
     
     <nav  className="navbar">
     <lo><button>opcion1</button></lo>
     <lo><button>opcion2</button></lo>
     <lo><button>opcion3</button></lo>
     
     </nav>
    
    

    <section className="title1" >
    <div className='video'>
    <iframe width="920px" height="680px" src="https://www.youtube.com/embed/aO2ByzUumaQ?si=vSr7RE3Xsn6wHxQm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>  
      <h1>Calculador de Divisas </h1>
      
    </section> 

    </div>
  

    <div className='caja1'>

    <div className='ban-g' name='Bner-v-1'>
      <h4>BannerGoogle</h4>
    </div>  

     <div className='calculador'>
    <label  htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/> <br></br>
        <div>
    <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1} readOnly/> <br></br>
        </div> 
    <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2} readOnly/> <br></br>

    <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={resultado3} readOnly/> <br></br>

    <label htmlFor="u4">{cambios[4].moneda}r</label>
        <input id="u4" type="number" value={resultado4} readOnly/> 
     </div>

    </div>
    
    <footer  className='footer1'>

      <form method='get' action='<a href="mailto:andesigner@gmail.com?Subject=Correo%20de%20prueba%20del%20mail"></a>' className='form'>
       <div className='form-n'>
       <label>Nombre</label> <br></br>
      <input className='put-space' id='f0' type="text"/>
      </div> 
       <div className='form-n'>
       <label>Email</label> <br></br>
      <input type='email' className='put-space' id='f1' />
      </div> 
       <div className='form-n'>
       <label>Telefono</label> <br></br>
      <input type='number' className='put-space' id='f2' />
      </div> 
       <div className='form-n'>
       <label>Observación</label> <br></br>
      <textarea className='put-space' id='f3' type="text"/>
      </div>
      <div>
      <br></br>
      <button type='submit'>hello</button>
      </div>
      </form>

      

       


     <a className="footer" href="https://www.juandev.site">By Juandev</a>

    </footer>
    
  </div>
    
  )
}

export default App

