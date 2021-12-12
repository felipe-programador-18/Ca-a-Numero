import React, {useState} from 'react';
import './App.css';


function App() {
   const [start , setStart] = useState("Entrada")
   const [draw, setDraw] = useState(150)
   const [numberpal, setNumberPal] = useState(1)

   const [min, setMin] = useState(1)
   const [max, setMax] = useState(300) 
  
   const getStarted = () =>{
     setStart("Rodando");
     setDraw(150);
     setNumberPal(1);
     setMin(1);
     setMax(300)

     if(start === "Entrada"){
       return <button onClick={getStarted} >começar a jogar</button>
     }
   }

   const Menor = () =>{
     setNumberPal(numberpal +1)
     setMax(draw)
     
     const Receve = parseInt((draw - min)/ 2) + min
     setDraw(Receve);
   }

   const Maior = () => {
     setNumberPal (numberpal +1)
     setMin(draw)

     const Receve = parseInt((max - min) / 2) +draw
     setDraw(Receve);
   }


   const Acertou = () =>{
     setStart("Fim")
   };

     if(start === "Fim"){
       return (
         <div>
         <p>Acertei com número de {draw} com o número de {numberpal} chotes</p>
         <button onClick={getStarted}>Começar denovo</button>
         </div>
       )
     }
   



  return (

    <div className='App'>
     
    <p>The you number is : {draw}</p>

    <button onClick={Menor}>Decrement</button>
    <button onClick={Acertou}>Accept</button>
    <button onClick={Maior}>Increased</button>    
  
    </div>
  );
}

export default App;
