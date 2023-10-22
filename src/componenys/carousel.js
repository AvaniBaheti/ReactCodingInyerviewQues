import React, { useState } from 'react';

const ams = [
  {
    id: 1,
    abouy: "Hi I am 1"
  },
  {
    id: 2,
    abouy: "Hi I am 2"
  },
  {
    id: 3,
    abouy: "Hi I am 3"
  },
  {
    id: 4,
    abouy: "Hi I am 4"
  },
  {
    id: 5,
    abouy: "Hi I am 5"
  }
];

function Caraousel() {
  const [ans, setAns] = useState(0);

  const handleClick = () => {
    setAns((prevAns) => (prevAns === 0 ? ams.length - 1 : prevAns - 1));
  };

  const handleClicks = () => {
    setAns((prevAns) => (prevAns === ams.length - 1 ? 0 : prevAns + 1));
  };

  return (
    <div>
      <button onClick={handleClick}>
        Prev
      </button>
      <div>
        <h4>{ams[ans].abouy}</h4>
      </div>
      <button onClick={handleClicks}>
        Next
      </button>
    </div>
  );
}

export default Caraousel;