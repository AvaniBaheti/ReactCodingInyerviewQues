import React, { useState } from 'react';

const Search = () => {
  const [ams, seAms] = useState(["Apple", "Mango", "Banana", "Sitaphal", "Nasberry"]);
  const [ans, seAns] = useState("");
  let am = ams.filter((elems) =>
    elems.toLowerCase().includes(ans.toLowerCase())
  );

  return (
    <>
      <input type="text" onChange={(e) => seAns(e.target.value)} />
      <ul>
        {am.map((elems) => (
          <li key={elems}>{elems}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;