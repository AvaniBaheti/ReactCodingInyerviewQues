import React, { useState } from 'react';
function Dynamicarray() {
  const [ams, seyams4] = useState(['Apple', 'Banana','chiku', 'Mango','Orange']);
  const [ans, seyans5] = useState(['Shake', 'Normal']);
  const [am, seAms] = useState(null);

  const [sn, seAns] = useState(null);

  const handleClick = (arr, a) => {
    if (arr === 'ams') {

      seAms(a);
    } else if (arr === 'ans') {
      seAns(a);
    
    
    }
  };

  return (

    <div>
      <div>
        <h2>am</h2>
        <ul>
          {ams.map((m, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  checked={am === m}
                  onChange={() => handleClick('ams', m)}

                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>a</h2>
        <ul>
          {ans.map((m, i) => (

            <li key={i}>
              <label>

                <input

                  type="radio"

                  checked={sn === m}
                  onChange={() => handleClick('ans', m)}

                />
                {m}
              </label>


            </li>
        
          ))}

        </ul>
      </div>

      <div>
        <h2>Khaoge ya Piyoge</h2>
        <ul>
          <li>{am}</li>
          <li>{sn}</li>

        </ul>

      </div>
    </div>
  );
}
export default Dynamicarray;