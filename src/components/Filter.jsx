import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNews } from '../features/newsSlice';

const Filter = ({ data }) => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState("");
  let list = ["All"];
  for(let i = 0; i < data.length; i++){
    if(!(list.includes(data[i].source.name))){
        list.push(data[i].source.name);
    }
  }
  
  return (
    <div className="flex gap-5 items-center">
        <p>Filter:</p>
        <select className='bg-blue-400 pl-2 py-1 rounded' onChange={(e) => {
          dispatch(filterNews(e.target.value))
        }}>
          {
            list.map((item, index) => {
              return (
                <option key={index} value={item}>{item}</option>
              )
            })
          }
        </select>
      </div>
  )
}

export default Filter
