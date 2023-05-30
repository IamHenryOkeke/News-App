import { useState, useEffect } from "react"
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
            data.articles.map((article, index) => {
              return (
                <div key={index} id={index}>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <p>{article.author === null ? "Unknown author" : article.author}</p>
                  <p>{article.publishedAt}</p>
                </div>
              )
            })
          )}
      </div>
    </div>
  )
}

export default App
