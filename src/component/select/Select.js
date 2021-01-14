import React from "react";
import '../select/Select.css';

function Select(props) {
  return (
    <div >
      <select  className="custom-select" style={{width:150}}>
        <option value="0">Toàn quốc</option>
        <option value="1">Audi</option>
      </select>
    </div>
  );
}

export default Select;
