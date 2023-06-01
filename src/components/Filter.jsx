import { useState } from 'react';

const Filter = ({ data }) => {
  const [value, setValue] = useState("");
  const [sources, setSources] = useState(["All"])
  const [options, setOptions] = useState(data);
  let list = ["All"];
  for(let i = 0; i < data.length; i++){
    if(!(list.includes(data[i].source.name))){
        list.push(data[i].source.name);
    }
  }
  
  return (
    <div className="flex gap-5">
        <p>Filter:</p>
        <select defaultValue={value} onChange={(e) => {
          setValue(e.target.value);
        }}>
          {
            list.map((item, index) => {
              return (
                <option className="px-10 py-5" key={index} value={item}>{item}</option>
              )
            })
          }
        </select>
      </div>
  )
}

export default Filter
