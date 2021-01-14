import React from 'react';
import '../card/Card.css';

function Card(props) {
    return (
        <div className="card-custom mr-3">
            <div className="card-img">
                <img src="https://cloud.mogi.vn/project/201710/23/428/f2ee634e7f1d493a83ccdb38094cafe1.jpg"/>
            </div>
            <div className="post-title ml-1">
                HXH QUANG TRUNG p.10 Gò Vấp 42m giá chỉ 4 tỷ fahdfjsdf
            </div>
            <div className="post-address ml-1">
                <b>42 m2</b> 3 PN 2 WC
            </div>
            <div className="post-price ml-1">
                4 tỷ 600 triệu
            </div>
        </div>
    );
}

export default Card;