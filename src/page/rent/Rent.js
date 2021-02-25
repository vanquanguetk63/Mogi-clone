import React, { useEffect, useState } from "react";
import SearchControl from "../../component/search-control/SearchControl";
import Item from "../../component/item/Item";
import ads from "../../img/right.jpg";
import "../rent/Rent.css";
import Filter from "../../component/filter/Filter";
import rent from "../../api/rent";
import buy from "../../api/buy";
import search from "../../api/search";
import { useHistory, useLocation } from "react-router-dom";

function Rent(props) {
  const [listItem, setListItem] = useState();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname.includes("search")) {
      let state = location.state;
      if (state === undefined) {
        history.push("/rent");
      } else {
        search
          .Search(state)
          .then((response) => {
            if (response === "is loaded") {
              // call api
              rent
                .GetToRent()
                .then((response) => {
                  setListItem(response);
                })
                .catch(console.error());
            } else {
              setListItem(response);
            }
          })
          .catch(console.error());
      }
    } else {
      rent
        .GetToRent()
        .then((response) => {
          console.log(response);
          setListItem(response);
        })
        .catch(console.error());
    }
  }, []);

  const Search = (data) => {
    if (
      data.search === "" &&
      data.idProvince === 0 &&
      data.idType === 0 &&
      data.price === 0
    ) {
      buy
        .GetToBuy()
        .then((response) => {
          this.setState({
            listItem: response,
          });
        })
        .catch(console.error());
    } else {
      search
        .Search(data)
        .then((response) => {
          setListItem(response);
        })
        .catch(console.error());
    }
  };

  return (
    <div className="container rent py-3">
      <SearchControl purpose="2" data={props.data} PassEvent={Search} dataSearch={location.state}/>
      <div className="row set-align">
        <div className="col-12 col-md-8">
          <div className="result mb-3">
            <div className="ml-2">1 - 15 trong 100.000 kết quả</div>
          </div>
          {listItem !== undefined
            ? listItem.map((obj) => <Item   state={props.data} key={obj.idPost} data={obj} />)
            : ""}
        </div>

        <div className="col-0 col-md-4">
          <div>
            <img className="img-ads" src={ads} alt=""></img>
          </div>

          {/* <Filter /> */}
        </div>
      </div>
    </div>
  );
}

export default Rent;
