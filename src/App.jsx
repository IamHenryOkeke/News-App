// import { useState } from "react";
import Articles from "./components/Articles";
import useFetch from "./hooks/useFetch";
import Filter from "./components/Filter";


const App = () => {
  const {data, loading, error} = useFetch();
  return (
    <div className="flex flex-col items-center gap-10 font-[Poppins]">
      <h1 className="text-6xl text-red-800">Breaking news</h1>
      {
        data && (
          <Filter data={data.articles}/>        
        )
      }
      <div>
          {loading && (<p>
            Loading.....
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
