import React, { useEffect, useState } from "react";
import "../select/Select.css";

function Select(props) {
  const [name, setName] = useState();

  useEffect(() => {
    setName(props.name);
  })

  return (
      <div >
        <select  className="custom-select" style={{width:150}} >
          <option value='0'>{name === 'address' ? 'Tỉnh/TP' : name === 'type' ? 'Loại BĐS ' : 'Giá thuê'}</option>
          {props.data.length !== undefined ?
          props.data.map((obj, index) => {
            return <option key={index} value={name === 'address' ? obj.id : name === 'type' ? obj.idType : obj.value}>{name === 'address' ? obj._name : name === 'type' ? obj.nameType : obj.name}</option>
          }) : ''}
        </select>
      </div>
  );
}

export default Select;
