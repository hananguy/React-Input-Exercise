import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
        <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /></div>
      <label for="fruits">Please select a fruit</label>



      <select name="fruits" id="select-input" onChange={(e) => {
                                            setFruit(e.target.value);
                                            {console.log(`${name} selected ${fruit}`)}
                                        }      
                                           } 
        value={fruit}>
        <option value="">Please select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="kiwi">Kiwi</option>
      </select>
    </div>
  );
};
export default Exercise2;
