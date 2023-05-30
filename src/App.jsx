import { useState, useEffect } from "react"
import Articles from "./components/Articles";


const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null);
  const [error, setError] = useState("")

  const apiKey = import.meta.env.VITE_API_KEY;

  const getData = () => {
    fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`, {mode: 'cors'})
    .then((response) =>{
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setData(data)
      setLoading(false)
      setError("")
    }).catch((error) => {
       console.log(error.message)
       setError(`${error.message}`)
       setLoading(false)
    })
    
    
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-6xl text-red-800">Breaking news</h1>
      <div>
          {loading && (<p>
            Loading .....
          </p>)}
          {error && (<p>
            {error}
          </p>)}
          {data && (
           <Articles data={data.articles}/>
              )
            }
      </div>
    </div>
  )
}

export default App
