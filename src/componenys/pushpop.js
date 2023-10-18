import React, { useState } from 'react';

const AM = () => {
  const [ams, seAms] = useState(['am', 'a', 'm', 's' ,'n']);
  const [ans, seAns] = useState([]);

  const handleClick = (item) => {
    // Remove the item from the 'ams' list
    const updatedams = ams.filter((i) => i !== item);
    // Add the item to the 'ans' list
    seAns([...ans, item]);

    seAms(updatedams);
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <h2>Array K</h2>
        <ul>
          {ams.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                onChange={() => handleClick(item)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Array B</h2>
        <ul>
          {ans.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AM;