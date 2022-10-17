import React, { useEffect, useState } from "react";




function Card(props){
    
  const [counterSeconds1, setCounter1] = useState(0);
  const [counterSeconds2, setCounter2] = useState(0);
  const [counterMinutes1, setCounter3] = useState(0);
  const [counterMinutes2, setCounter4] = useState(0);
  const [counterHours1, setCounter5] = useState(0);
  const [counterHours2, setCounter6] = useState(0);
 
  useEffect(()=> {
     
      const miTimeout = setInterval(()=>{
         
        setCounter1((prevCount) => prevCount + 1 );
 
      },-1000000)
      return () => clearInterval(miTimeout)
    },[]) 
        
 
 
 useEffect(() => {
 
   if(counterHours2 === 2 && counterHours1 === 4 && counterMinutes2 === 5 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
 
     setCounter1(0)
     setCounter2(0)
     setCounter3(0)
     setCounter4(0)
     setCounter5(0)
     setCounter6(0)
     return {handleReset}
    }
 
 
   if(counterHours1 === 9 && counterMinutes2 === 5 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
 
     setCounter1(0)
     setCounter2(0)
     setCounter3(0)
     setCounter4(0)
     setCounter5(0)
     setCounter6((prevCount) => prevCount +1)
     return
    }
 
 
 
 if(counterMinutes1 === 9 && counterMinutes2 === 5 &&  counterSeconds1 === 9 && counterSeconds2 === 5){
 
     setCounter1(0)
     setCounter2(0)
     setCounter3(0)
     setCounter4(0)
     setCounter5((prevCount) => prevCount +1)
     return
    } 
 
 if(counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
 
     setCounter1(0)
     setCounter2(0)
     setCounter3(0)
     setCounter4((prevCount) => prevCount +1)
     return
    }
 
   if(counterSeconds2 === 5 && counterSeconds1 === 9){
     setCounter1(0)
     setCounter2(0)
     setCounter3((prevCount) => prevCount +1)
     return
   }
 
   if(counterSeconds1 === 9){
     setCounter1(0)
     setCounter2((prevCount) => prevCount +1 )
     return
   }
 }, [counterSeconds1]) 
 
 useEffect(()=> console.log("actualizacion")) 
 
 const handleReset = () => {setCounter1(0)
   setCounter2(0)
   setCounter3(0)
   setCounter4(0)
   setCounter5(0)
   setCounter6(0)
   }
   
 
 
 
 
     return (
     <div className="container-fluid p-5">
         <div className="card-group" style = {{height: "100px"}}>
 
         <div className="card bg-dark text-primary me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterHours2}</h5>
         </div>
         </div>
 
         <div className="card bg-dark text-primary me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterHours1}</h5>
         </div>
         </div>
 
         <div className="card bg-dark text-warning me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterMinutes2}</h5>
         </div>
         </div>
 
         <div className="card bg-dark text-warning me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterMinutes1}</h5>
         </div>
         </div>
 
         <div className="card bg-dark text-danger me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterSeconds2}</h5>
         </div>
         </div>
 
         <div className="card bg-dark text-danger me-2">
         <div className="card-body">
           <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterSeconds1}</h5>
         </div>
         </div>
         </div>
         <a href="#" onClick={handleReset} className="btn btn-success d-flex justify-content-center mt-3">Reset Button</a>
     </div>
     );
 
     
 }
 
 
 
 
 export default Card;




















// CODIGO BIEN HECHO

/*import React, { useEffect, useState } from "react";
import "/workspace/react-hello/src/js/component/card.css"




function Card (props) {
  const[reloj] = "&";
  const[counterSeconds1, setCounter1] = useState(0);
  const[counterSeconds2, setCounter2] = useState(0);
  const[counterMinutes1, setCounter3] = useState(0);
  const[counterMinutes2, setCounter4] = useState(0);
  const[counterHours1, setCounter5] = useState(0);
  const[counterHours2, setCounter6] = useState(0); 


  

  useEffect(()=> {
  const miTimeout = setTimeout(()=>{

      if(counterHours2 === 1 && counterHours1 === 1 && counterMinutes2 === 5 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){

        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(0)
        setCounter5(0)
        setCounter6(0)
        return {miTimeout}
       }


      if(counterHours1 === 9 && counterMinutes2 === 5 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){

        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(0)
        setCounter5(0)
        setCounter6(counterHours2 + 1)
        return
       }



   if(counterMinutes1 === 9 && counterMinutes2 === 5 &&  counterSeconds1 === 9 && counterSeconds2 === 5){

        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(0)
        setCounter5(counterHours1 + 1)
        return
       } 

    if(counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){

        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(counterMinutes2 + 1)
        return
       }

   if(counterSeconds2 === 5 && counterSeconds1 === 9 ){
    setCounter1(0)
    setCounter2(0)
    setCounter3(counterMinutes1 + 1)
    return
   }

    if(counterSeconds1 === 9){
        setCounter1(0)
        setCounter2(counterSeconds2 + 1)
        return} 
    


       setCounter1(counterSeconds1 + 1);
    },1000)
  },[counterSeconds1]) 


    return (

      <div className="container-fluid p-5">
        
        <div className="contenedor card-group row bg-dark bg-opacity-75">

        <div className="card bg-dark text-primary me-1 ">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterHours2}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark text-primary me-1">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterHours1}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark text-warning me-1">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterMinutes2}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark text-warning me-1">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterMinutes1}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark text-danger me-1">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1 fs-1">{counterSeconds2}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark text-danger me-1">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">{counterSeconds1}</h5>
        </div>
      </div>

      <div className="cartas card bg-dark">
        <div className="cartas card-body">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1 text-light">{reloj}</h5>
        </div>
      </div> 
      
      </div>
      <a href="#" onClick={handleReset} className="btn btn-primary d-flex justify-content-center">Reset Button</a>
     
      </div>
    );
}

export default Card; */

