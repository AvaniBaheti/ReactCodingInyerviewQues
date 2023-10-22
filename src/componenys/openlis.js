import React, { useState } from 'react';
function Openlis() {

  const [ans, seAns] = useState(null);
  const [ams, setams] = useState(null);

 const arr = [
    { id: 1, name: 'elem 1', details: 'Details for elem 1' },
    { id: 2, name: 'elem 2', details: 'Details for elem 2' },
    { id: 3, name: 'elem 3', details: 'Details for elem 3' },

  ];
  const pn = {
    1: [
      { id: 11, name: 'Sub elem 1.1' },
      { id: 12, name: 'Sub elem 1.2' },

      { id: 13, name: 'Sub elem 1.3' },

    ],

    2: [
      { id: 21, name: 'Sub elem 2.1' },
      { id: 22, name: 'Sub elem 2.2' },
    ],

    3: [
      { id: 31, name: 'Sub elem 3.1' },
      { id: 32, name: 'Sub elem 3.2' },

    ],
  };

  return (
    <div>
      <h1>array1 </h1>
      <ul>
        {arr.map(elem => (
          <li key={elem.id}>
            <label>

              <input
                type="radio"
                name="parentelem"
                value={elem.id}

                onChange={() => seAns(elem.id)}
              />
              {elem.name}
            </label>

          </li>
        ))}
      </ul>
      {ans !== null && pn[ans] && (

        <div>
          <h4>Array2</h4>
          <ul>


            {pn[ans].map(subelem => (

              <li key={subelem.id}>
                <label>
                  <input


                    type="radio"
                    name="childelem"
                    value={subelem.id}
                    onChange={() => setams(subelem.id)}
                  />

                  {subelem.name}

                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {ams !== null && (
        <div>
          <h1>Selected arr</h1>

          <p>Parent elem: {arr.find(elem => elem.id === ans).name}</p>
          <p>Child elem: {pn[ans].find(subelem => subelem.id === ams).name}</p>
        </div>
      )}
    </div>
  );
}

export default Openlis;