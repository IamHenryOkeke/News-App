import { useParams } from "react-router-dom";

const ArticlesDetails = ({data}) => {
  let { index } = useParams();
  if(data){
    return (
      <div className='flex flex-col gap-5 items-center lg:text-lg rounded-lg mx-4 lg:mx-72'>
          <img className='rounded-lg' src={data[index].urlToImage} alt="" />
          <h1 className="md:text-2xl lg:text-4xl">{data[index].title}</h1>
          <p>{(data[index].publishedAt).slice(0, 10)}</p>
          <p>by: {data[index].author}</p>
          <p>{data[index].description}</p>
          <p className="self-start">Source: {(data[index].source.name)}</p>
          <a href={data[index].url} className="text-blue-400 underline self-start hover:text-black">Read more</a>
      </div>
    )
  }
}

export default ArticlesDetails
