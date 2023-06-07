import Articles from "./Articles";
import Filter from "./Filter";
import { useSelector } from 'react-redux';
import SignUp from "./SignUp";

const Home = ({data, loading, error}) => {

  const { newsItems} = useSelector((state => state.news));
  
  return (
    <div className="flex flex-col items-center gap-5 mt-4"> 
      <h1 className="text-2xl lg:text-6xl text-red-800 text-center">Breaking news</h1>
      {
        newsItems && (
          <Filter data={newsItems}/>        
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
           <Articles data={data}/>
              )
            }
      </div>
      <SignUp/>
    </div>
  )
}

export default Home;
