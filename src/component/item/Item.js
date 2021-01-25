import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../item/Item.css';


function Item(props) {
    const [favorite, isFavorite] = useState(false);

    const handleClick = () => {
        isFavorite(!favorite);
    }

    return (
        <div className="item-custom mb-3">
            <div className="row row-item">
                <div className="col-5 col-md-4 img-item ">
                    <img className="img" src="https://cloud.mogi.vn/images/2021/01/14/320/a377cfafecf744eb879e70d9c4ea0c1d.jpg">
                    </img>
                    <div className="num">
                        28
                    </div>
                </div>

                <div className="col-6 col-md-7 content-item mt-3">  
                    <div className="title">
                        <Link to="/house">
                            <p>Khai trương căn hộ mới 100% Lý Thường Kiệt - Quận 10 Gác cao 1M7</p>
                        </Link>
                    </div>

                    <div className="address">
                        <p>Quận 10, TPHCM</p>
                    </div>

                    <div className="infor">
                        <p><b>40m<sup>2</sup> </b> 1PN 1WC</p>
                    </div>

                    <div className="price">
                        <p>5 triệu 999 nghìn</p>
                    </div>

                    <div className="date">
                        <p>Hôm nay</p>
                    </div>

                </div>

                <div className="col-1 icon-item col-md-1">
                    <div className="up-item">
                        <i class="fa fa-star custom-star" aria-hidden="true"></i>
                    </div>

                    <div className="favorite" onClick={() => handleClick()}>
                        <i className={favorite ? "fas fa-heart custom-heart" : "far fa-heart"}  ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;