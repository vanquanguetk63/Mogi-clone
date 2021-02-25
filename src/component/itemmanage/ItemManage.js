import React, { useEffect, useState } from "react";
import "../itemmanage/ItemManage.css";
import logo from "../../img/logo.svg";
import house from "../../api/house";
import validate from "../../lib/validate";
import { Link, useHistory } from "react-router-dom";

const ItemManage = (props) => {
  const [img, setImg] = useState();
  const history = useHistory();

  useEffect(() => {
    house
      .GetImageById(props.data.idPost)
      .then((response) => setImg(response[0]));
  }, []);

  return (
    <div className="item-manage" style={{ cursor: "pointer" }} target="_blank" onClick={() => window.open(`/house/${props.data.idPost}`, "_blank")}>
      <div className="item-img">
        <img
          className="mng-img"
          src={img !== undefined ? img.urlImage : logo}
        ></img>
      </div>
      <div className="mng-content">
        <div>
          <p>{props.data.title}</p>
        </div>
        <div>
          <p style={{ fontSize: "12px" }}>{props.data.address}</p>
        </div>
        <div>
          <p>
            {validate.getNumberWithCommas(props.data.price)} VNĐ | Mã tin:{" "}
            {props.data.idPost}{" "}
          </p>
        </div>
        <div style={{ fontSize: "12px" }}>
          <p>Ngày đăng: {validate.validateDay(props.data.CreateAt)}</p>
        </div>
      </div>

      <div className="mng-action">
        {/* <i className="fas fa-edit fa-lg py-1" style={{color: 'green'}}></i>      */}
      </div>
    </div>
  );
};

export default ItemManage;
