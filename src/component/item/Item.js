import React from 'react';
import '../item/Item.css';

function Item(props) {
    return (
        <div className="item-custom mb-3">
            <div className="row">
                <div className="col-4 img-item">
                    <img className="img" src="https://cloud.mogi.vn/images/2021/01/14/320/a377cfafecf744eb879e70d9c4ea0c1d.jpg">
                    </img>
                    <div className="num">
                        28
                    </div>
                </div>

                <div className="col-8 content-item mt-1">
                    <div className="title">
                        <p>Khai trương căn hộ mới 100% Lý Thường Kiệt - Quận 10 Gác cao 1M7</p>
                    </div>

                    <div className="address">
                        <p>Quận 10, TPHCM</p>
                    </div>

                    <div className="infor">
                        <p><b>40m2 </b> s1PN 1WC</p>
                    </div>

                    <div className="price">
                        <p>5 triệu 999 nghìn</p>
                    </div>

                    <div className="date">
                        <p>Hôm nay</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Item;