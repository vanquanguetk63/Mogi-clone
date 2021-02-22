import React, { useEffect, useState } from "react";
import SlideShow from "../../component/slideshow/SlideShow";
import "../house/House.css";
import home from "../../img/home.jpg";
import ads from "../../img/right.jpg";
import Profile from "../../component/profile/Profile";
import house from "../../api/house";
import validate from "../../lib/validate";

function House(props) {
  const [id, setId] = useState();
  const [data, setData] = useState();
  const [collection, setCollection] = useState();

  useEffect(() => {
    setId(props.match.params.id);
    house
      .GetHouseByID(props.match.params.id)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch(console.error());
    house
      .GetImageById(props.match.params.id)
      .then((response) => {
        setCollection(response);
      })
      .catch(console.error());
  }, []);

  return (
    <div>
      <div className="container house">
        <div>
          <br />
        </div>
        {data !== undefined ? (
          <div className="row">
            <div className="col-12 col-md-8 ">
              <SlideShow input={collection} />
              <br />
              <div>
                <b style={{fontSize: '20px'}}>
                  <p>{data[0].title}</p>
                </b>
                <p>{data[0].address}</p>
                <p>{data[0].price}</p>
              </div>

              <div className="content">
                <div className="title">
                  <b>
                    <p style={{fontSize: '20px'}}>Thông tin chính</p>
                  </b>
                </div>
                <div>
                  <ul>
                    <li>
                      <span className="row1">Diện tích đất</span>
                      <span className="row1-content">
                        {data[0].square}m<sup>2</sup> 
                      </span>
                    </li>
                    <li>
                      <span className="row1">Nhà tắm</span>
                      <span className="row1-content">{data[0].toilet}</span>
                    </li>
                    <li>
                      <span className="row1">Ngày đăng</span>
                      <span className="row1-content">{validate.validateDay(data[0].CreateAt)}</span>
                    </li>
                    <li>
                      <span className="row1">Phòng ngủ</span>
                      <span className="row1-content">{data[0].bedroom}</span>
                    </li>
                    <li>
                      <span className="row1">Pháp lý</span>
                      <span className="row1-content">sổ hồng</span>
                    </li>
                    <li>
                      <span className="row1">Mã bất động sản</span>
                      <span className="row1-content">21129940</span>
                    </li>
                  </ul>
                </div>

                <div className="description">
                  <div className="title">
                    <b>
                      <p style={{fontSize: '20px'}}>Giới thiệu</p>
                    </b>
                  </div>
                  <div className="content" dangerouslySetInnerHTML={{__html: data[0].description}}></div>
                </div>
                <br></br>
                <div className="mb-2">
                  <button type="button" class="btn btn-outline-warning btn-sm">
                    Báo cáo vi phạm{" "}
                    <i
                      class="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>

                <div>
                  <Profile data={data}/>
                </div>
              </div>
            </div>

            <div className="col-0 col-md-4 hh">
              <div className="contact">
                <div className="contact-user">
                  <Profile data={data}/>
                </div>
                <br />
                <div className="phone-message">
                  <div className="phone">
                    <button className="btn btn-outline-secondary  mr-2">
                      <i class="fa fa-phone mr-1" aria-hidden="true"></i>
                      {data[0].phoneUser}
                    </button>
                    <button className="btn btn-outline-secondary ">
                      <i class="far fa-envelope mr-1"></i>
                      Gửi tin nhắn
                    </button>
                  </div>
                </div>

                <div className="save-post mt-2">
                  <button className="btn btn-outline-secondary save">
                    <i class="far fa-save mr-1"></i>
                    Lưu tin
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <br />
    </div>
  );
}

export default House;
