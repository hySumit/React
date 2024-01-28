import { useState, } from "react";
import DataDisplay from "./components/DataDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  
  
  async function fetchData() {
    

      setIsloading(true)
 

    setTimeout( async ()=>{

      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  
        let finalResponse = await response.json();
        
        setData(finalResponse);
        
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      }
      
      
      finally{
          setIsloading(false)
        }
    },2000)
      
    }

  return (
    <>
    <button disabled={isloading} onClick={(()=>{
      fetchData();

    })} > Click here to Load Data</button>
    {error ? (
      <h1>{error}</h1>
    ):(
      <div>
        {isloading ? (
          <h1>Data is Loading Please Wait</h1>
        ):(
          <DataDisplay data = {data}/>
        )}
      </div>
    )}
    </>
  )
}

export default App;
