import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './syyle.css';
function Syar() {
  const [ans, seAns] = useState(null);
  const [color, seColor] = useState(null);
  var arr=Array(5).fill(0);
  return (
    <>
      {arr.map((star, index) => {
        const ams = index + 1;
        return (
          <label key={ams}>
            <input
              type="radio"
              name="rate"
              value={ams}
              onClick={() => {
                seAns(ams);
                seColor(ams);
              }}
            />
            <FaStar
              size={50}
              color={ams <= (color || ans) ? 'yellow' : 'black'}
            />
          </label>
        );
      })}
      <p>Selected Rating: {ans}</p>
    </>
  );
}
export default Syar;