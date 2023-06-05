import { useParams } from "react-router-dom";

const ArticlesDetails = ({data}) => {
  let { index } = useParams();
  return (
    <div className='flex flex-col items-center'>
      {data &&
        <div>
          <img src={data[index].urlToImage} alt="" />
          <h1>{data[index].title}</h1>
          <p>{data[index].author}</p>
          <p>{(data[index].publishedAt).slice(0, 10)}</p>
          <span>{data[index].description}</span>
        </div>
      }
      
    </div>
  )
}

export default ArticlesDetails
