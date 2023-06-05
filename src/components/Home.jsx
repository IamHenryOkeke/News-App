import Articles from "./Articles";
import Filter from "./Filter";
import { useSelector } from 'react-redux';

const Home = ({data, loading, error}) => {

  const { newsItems} = useSelector((state => state.news));
  
  return (
    <div className="flex flex-col items-center gap-10 font-[Poppins]">
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
    </div>
  )
}

export default Home;
