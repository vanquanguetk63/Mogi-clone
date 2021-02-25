import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import buy from "../../api/buy";
import user from "../../api/user";
import validate from "../../lib/validate";
import "../item/Item.css";

function Item(props) {
  const [id, setId] = useState();
  const [favorite, isFavorite] = useState(false);
  const [time, setTime] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setId(props.data.idPost);
    let idPost = props.data.idPost;
    let data = {};
    data.id = idPost;
    buy
      .GetImageById(data)
      .then((response) => {
        setImg(response);
      })
      .catch(console.error());
    let day = validate.validateDay(props.data.CreateAt);
    setTime(day);
    validatePrice();

    if (props.data.isLogin === true) {
      let data2 = {};
      data2.id = props.state.currentUser[0].idUser;
      data2.idPost = props.data.idPost;
      user
        .CheckIdIsFavorite(data2)
        .then((response) => {
          console.log(response);
          if (response.data.length > 0) {
            isFavorite(true);
          }
        })
        .catch(console.error());
    }
  }, []);

  const handleClick = () => {
    if (props.data.isLogin === true) {
      let data2 = {};
      data2.id = props.state.currentUser[0].idUser;
      data2.idPost = props.data.idPost;
      if (!favorite === true) {
        user
          .SaveToFavorite(data2)
          .then((response) => {
            console.log(response);
            isFavorite(true);
          })
          .catch(console.error());
      } else {
        user
          .DeleteFromFavorite(data2)
          .then((response) => {
            isFavorite(false);
          })
          .catch(console.error());
      }
      isFavorite(!favorite);
    } else {
    }
  };

  const validatePrice = () => {
    let pri = validate.getNumberWithCommas(props.data.price);
    setPrice(pri);
  };

  return (
    <div className="item-custom mb-5 mt-5">
      <div className="row row-item">
        <div className="col-5 col-md-4 img-item">
          <img
            className="img"
            src={
              img !== undefined
                ? img[0].urlImage
                : "https://cloud.mogi.vn/images/2021/01/14/320/a377cfafecf744eb879e70d9c4ea0c1d.jpg"
            }
          ></img>
        </div>

        <div className="col-6 col-md-7 content-item mt-3">
          <div className="title mb-1">
            <Link
              to={{
                pathname: `/house/${id}`,
              }}
            >
              <p>
                <b>{props.data.title}</b>
              </p>
            </Link>
          </div>

          <div className="address ">
            <p>{props.data.address}</p>
          </div>

          <div className="infor">
            <p>
              <b>
                {props.data.square} m<sup>2</sup> &ensp;
              </b>{" "}
              {props.data.bedroom} PN &ensp; {props.data.toilet} WC
            </p>
          </div>

          <div className="price">
            <p>{price} VNĐ</p>
          </div>

          <div className="date" style={{ fontSize: "12px" }}>
            <p className="">Ngày đăng: {time !== undefined ? time : ""}</p>
          </div>
        </div>

        <div className="col-1 icon-item col-md-1">
          <div className="up-item">
            <i className="fa fa-star custom-star" aria-hidden="true"></i>
          </div>

          <div className="favorite" onClick={() => handleClick()}>
            <i
              className={
                favorite ? "fas fa-heart custom-heart" : "far fa-heart"
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
