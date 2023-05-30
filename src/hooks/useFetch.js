import { useState, useEffect } from "react"

const useFetch = () => {
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
  
  return {loading, error, data}
}

export default useFetch
