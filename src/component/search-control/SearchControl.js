import React, { useEffect, useState } from "react";
import "../search-control/SearchControl.css";
import Search from "../search/Search";

function SearchControl(props) {
  const [search, setSearch] = useState('');
  const [idProvince, setIdProvince] = useState(0);
  const [idType, setIdType] = useState(0);
  const [price, setPrice] = useState(0);

  const SetData = () => {
    let data = {};
    data.search = search;
    data.idProvince = idProvince;
    data.idType = idType;
    data.price = price;
    data.purpose = props.purpose;
    props.PassEvent(data);
  }

  const SetSearch = (value) => {
    setSearch(value);
  }


  return (
    <div className="search-control">
      <div className="search">
        <Search PassValue={SetSearch} PassEvent={SetData} />
      </div>
      <div className="filter">
        <i className="fas fa-map-marker-alt icon"></i>
        <select className="custom-select" onChange = {(event) => setIdProvince(event.target.value)}>
          <option value="0">Thành phố</option>
          {props.data.listProvince.length !== 0
            ? props.data.listProvince.map((obj) => {
                return (
                  <option key={obj.id} value={obj.id}>
                    {obj._name}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
      <div className="filter">
        <i className="fas fa-home icon"></i>
        <select className="custom-select" onChange = {(event) => setIdType(event.target.value)}>
          <option value="0">Loại bất động sản</option>
          {props.data.listType1.length !== undefined
            ? props.purpose === "1"
              ? props.data.listType1.map((obj) => {
                  return (
                    <option key={obj.idType} value={obj.idType}>
                      {obj.nameType}
                    </option>
                  );
                })
              : props.data.listType2.map((obj) => {
                  return (
                    <option key={obj.idType} value={obj.idType}>
                      {obj.nameType}
                    </option>
                  );
                })
            : ""}
        </select>
      </div>
      <div className="filter">
        <i className="fas fa-dollar-sign icon"></i>
        <select className="custom-select" onChange = {(event) => setPrice(event.target.value)}>
          <option value="0">Giá cả</option>
          {props.data.priceForBuy.length !== undefined
            ? props.purpose === "1"
              ? props.data.priceForBuy.map((obj) => {
                  return (
                    <option key={obj.id} value={obj.value}>
                      {obj.name}
                    </option>
                  );
                })
              : props.data.priceForRent.map((obj) => {
                  return (
                    <option key={obj.id} value={obj.value}>
                      {obj.name}
                    </option>
                  );
                })
            : ""}
        </select>
      </div>
    </div>
  );
}

export default SearchControl;
