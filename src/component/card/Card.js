import React, { useState } from "react";
import "../card/Card.css";
import image from "../../api/post";
import validate from "../../lib/validate";
import buy from "../../api/buy";
import { withRouter } from "react-router-dom";

function Card(props) {
  const [img, setImg] = useState();
  const [strPrice, setStrPrice ] = useState();

  useState(() => {
    let data = {};
    data.id = props.data.idPost;
    buy
      .GetImageById(data)
      .then((response) => {
        setImg(response[0]);
      })
      .then(console.error());

    let convertPrice = props.data.price * 1;
    let str = '';
    if (convertPrice > 1000000000) {
        str += convertPrice / 1000000000 + ' tỷ';
    } else if (convertPrice > 1000000) {
        str += convertPrice / 1000000 + ' triệu';
    }  
    
    setStrPrice(str);
  });

  const RedirectoHome = () => {
      props.history.push(`/house/${props.data.idPost}`)
  }

  return (
    <div className="card-custom mr-3" onClick={RedirectoHome}>
      <div className="card-img">
        <img
          src={
            img !== undefined
              ? img.urlImage
              : "https://cloud.mogi.vn/project/201710/23/428/f2ee634e7f1d493a83ccdb38094cafe1.jpg"
          }
          alt=""
        />
      </div>

      <div className="post-title ml-2 mt-2 mb-3">{props.data.title}</div>
      <div className="post-address ml-2 mb-3">
        <i className="fa fa-home mr-1" aria-hidden="true">
          {" "}
        </i>
        {props.data.square} m<sup>2</sup> &nbsp;
        <i className="fa fa-bed mr-1" aria-hidden="true"></i>{" "}
        {props.data.bedroom} PN &nbsp;
        <i className="fas fa-toilet mr-1"></i> {props.data.toilet} WC
      </div>
      <div className="post-price ml-2">
        <p>
          <i className="fas fa-money-bill-alt"></i>{" "}
          {strPrice} VNĐ
        </p>
      </div>
    </div>
  );
}

export default withRouter(Card);
