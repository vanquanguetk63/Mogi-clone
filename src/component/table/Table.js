import React from 'react';
import Row from '../row/Row';
import '../table/Table.css';

function Table(props) {
    var elmRow = {};


    return (
        <div style={{overflowY: 'auto'}} className="mytbl">
            <table  width='100%'>
                <tr className="tbl-post-title">
                    <th colSpan="10">Tất cả bài viết</th>
                </tr>
                <tr className="tbl-admin">
                    <th className="tbl-img">Hình ảnh</th>
                    <th className="tbl-title">Tiêu đề</th>
                    <th className="tbl-address">Địa chỉ</th>
                    <th className="tbl-price">Giá</th>
                    <th className="tbl-square">Diện tích</th>
                    <th className="tbl-bedroom">Số PN</th>
                    <th className="tbl-toilet">Số VS</th>
                    <th className="tbl-purpose">Mục đích</th>
                    <th className="tbl-approve">Trạng thái</th>
                    <th className="tbl-action">Thực thi</th>
                </tr>

                { props.data !== undefined ?  
                props.data.map((obj) => {
                    return(
                        <Row dataEvent={props.dataEvent} data={obj} onEvent={props.onEvent}/>
                    )
                })
                : '' }

            </table>
        </div>
    );
}

export default Table;