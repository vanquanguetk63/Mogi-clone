import React from 'react';
import '../filter/Filter.css';

function Filter(props) {
    return (
        <div className="filter-custom mt-3">
            <div className="title ml-3 mt-3">
                <b>Loại bất động sản</b>
            </div>

            <div className="content">
                <ul >
                    <li className="m-1">
                    <a> <i class="fal fa-chevron-circle-right"></i> Nhà </a>
                    </li>
                    <li className="m-1">
                        <a href="#"><i class="fal fa-chevron-circle-right"></i> Căn hộ </a>
                    </li>
                    <li className="m-1">
                        <a href="#"><i class="fal fa-chevron-circle-right"></i> Đất </a>
                    </li>
                    <li className="m-1">
                        <a href="#"><i class="fal fa-chevron-circle-right"></i> Mặt</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;