import React from 'react';
import '../card/Card.css';

function Card(props) {
    return (
        <div className="card-custom mr-3">
            <div className="card-img">
                <img src="https://cloud.mogi.vn/project/201710/23/428/f2ee634e7f1d493a83ccdb38094cafe1.jpg"/>
            </div>
    
            <div className="post-title ml-2 mt-2 mb-2">
                <p>HXH QUANG TRUNG p.10 Gò Vấp 42m giá chỉ 4 tỷ fahdfjsdf</p>
            </div>
            <div className="post-address ml-2">
                <p>
                    <i class="fa fa-home mr-1" aria-hidden="true"> </i>42 m<sup>2</sup> &nbsp;
                    <i class="fa fa-bed mr-1" aria-hidden="true"></i> 3 PN &nbsp;
                    <i class="fas fa-toilet mr-1"></i> 2 WC
                </p>
            </div>
            <div className="post-price ml-2">
                <p>
                <i class="fas fa-money-bill-alt"></i> 4 tỷ 600 triệu
                </p>
            </div>
        </div>
    );
}

export default Card;