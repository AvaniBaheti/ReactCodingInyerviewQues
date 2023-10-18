import React, { useState } from 'react';

const Swapevenelem = () => {
  const a = ["apples", "bananas", "grapes", "oranges", "pears", "pineapple"];
  const m = ["potatoes", "beans", "carrots", "spinach", "kale", "broccoli"];

  const [amsa, seAns] = useState(a);
  const [ansa, seAms] = useState(m);

  const handleSwap = () => {
    const ans = [...amsa];
    const ams = [...ansa];

    for (let i = 0; i < Math.min(ans.length, ams.length); i += 2) {
      const am = ans[i];
      ans[i] = ams[i];
      ams[i] = am;
    }

    seAns(ans);
    seAms(ams);
  };

  return (
    <div>
      
        <ul>
          {amsa.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {ansa.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
     
      <button onClick={handleSwap}>Swap Odd Items</button>
    </div>
  );
};

export default Swapevenelem;
