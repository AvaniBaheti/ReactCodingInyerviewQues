import React, { useState, useCallback} from "react";
import debounce from "lodash.debounce";
function Debouncing() {
    const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState(""); // would be an API call normally

  const debouncedSave = useCallback(debounce((nextValue) => saveToDb(nextValue), 1000),[])

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
  };
  return (
    <main>
    <h1>Blog</h1>
    <textarea value={value} onChange={handleChange} rows={5} cols={50} />
    <section className="panels">
      <div>
        <h2>Editor (Client)</h2>
        {value}
      </div>
      <div>
        <h2>Saved (DB)</h2>
        {dbValue}
      </div>
    </section>
  </main>
  )
}



export default Debouncing