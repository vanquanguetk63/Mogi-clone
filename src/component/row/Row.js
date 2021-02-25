import React, { useEffect, useState } from "react";
import "../row/Row.css";
import logo from "../../img/logo.svg";
import { Confirm } from "react-st-modal";
import validate from "../../lib/validate";
import admin from "../../api/admin";
import house from "../../api/house";

const Row = (props) => {
  const [img, setImg] = useState();

  useEffect(() => {
    house
      .GetImageById(props.data.idPost)
      .then((response) => setImg(response[0]))
      .catch(console.error());
  });

  async function onApprove() {
    const result = await Confirm("Đồng ý duyệt tin?", "Duyệt tin");

    if (result) {
      // Сonfirmation confirmed
      let data = {};
      data.approval = 1;
      data.id = props.data.idPost;
      admin
        .UpdatePost(data)
        .then((response) => {
          admin.GetPostIsNotApproved().then((response) => {
            props.onEvent(response);
          });
        })
        .catch(console.error());
    } else {
      // Сonfirmation not confirmed
    }
  }

  async function onNotApprove() {
    const result = await Confirm("Từ chối duyệt tin?", "Duyệt tin");

    if (result) {
      // Сonfirmation confirmed
      let data = {};
      data.approval = 0;
      data.id = props.data.idPost;
      admin
        .UpdatePost(data)
        .then((response) => {
          admin.GetPostIsNotApproved().then((response) => {
            props.onEvent(response);
          });
        })
        .catch(console.error());
    } else {
      // Сonfirmation not confirmed
    }
  }

  async function onDelete() {
    const result = await Confirm("Đồng ý xóa tin?", "Xóa tin");

    if (result) {
      // Сonfirmation confirmed
      let data = {};
      data.id = props.data.idPost;
      admin
        .DeletePost(data)
        .then((response) => {
          admin.GetPostIsApproved().then((response) => {
            props.onEvent(response);
          });
        })
        .catch(console.error());
    } else {
      // Сonfirmation not confirmed
    }
  }

  return (
    <>
      <tr className="myrow">
        <td>
          <img
            className="myrow-img"
            src={img !== undefined ? img.urlImage : logo}
          ></img>
        </td>
        <td>{props.data.title}</td>
        <td>{props.data.address}</td>
        <td>{validate.getNumberWithCommas(props.data.title)} VND</td>
        <td>
          {props.data.square} m<sup>2</sup>
        </td>
        <td>{props.data.bedroom}</td>
        <td>{props.data.toilet}</td>
        <td>{props.data.idPurpose === 1 ? "Cần bán" : "Cho thuê"}</td>
        <td>
          {props.data.approval === 2
            ? "Chưa được duyệt"
            : props.data.approval === 1
            ? "Đã được duyệt"
            : "Bị từ chối"}
        </td>
        <td className="row-check">
          <div>
            {props.dataEvent === 1 ? (
              <>
                <i
                  className="fas fa-check fa-lg py-1"
                  style={{ color: "blue" }}
                  onClick={onApprove}
                ></i>
                <i
                  className="fas fa-times fa-lg py-1"
                  style={{ color: "red" }}
                  onClick={onNotApprove}
                ></i>
              </>
            ) : (
              <>
                <i
                  className="fas fa-trash-alt fa-lg py-1"
                  style={{ color: "red" }}
                  onClick={onDelete}
                ></i>
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default Row;
