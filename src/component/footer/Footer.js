import React from 'react';
import '../footer/Footer.css';
import image from '../../image';

function Footer(props) {
    return (
        <div className="footer mt-5"> 
            <div className="container" style={{height:'100%'}} >
                <div className="row" style={{fontSize:'12px', textAlign:'inherit'}}>
                    <div className="col-md-3 mt-2">
                        <img className="img-logo" src={image.logo} alt=""></img> 
                        <div>
                            <p>
                            Đứng đầu các từ khóa liên quan đến phòng trọ cho thuê, nhà cho thuê, tìm người ở ghép
                            </p>
                            <p> 70.000+ tin bài trên hệ thống, và tiếp tục tăng</p>
                            <p>300.000+ khách truy cập và hơn 2 triệu lượt xem mỗi tháng</p>
                        </div>
                    </div> 

                    <div className="col-md-3 center  mt-2" style={{fontSize:'14px', textAlign:'left'}}>
                        <ul>
                            <li>
                                <b>VỀ MOGI</b>
                            </li>
                            <li>
                                <a href="#">Câu hỏi thường gặp</a>
                            </li>
                            <li>
                                <a href="#">Hướng dẫn đăng tin</a>
                            </li>
                            <li>
                                <a href="#">Bảng giá dịch vụ</a>
                            </li>
                            <li>
                                <a href="#">Quy định đăng tin</a>
                            </li>
                            <li>
                                <a href="#">Chính sách giải quyết khiếu nại</a>
                            </li>

                        </ul>
                    </div> 

                    <div className="col-md-3  mt-2" style={{fontSize:'14px', textAlign:'left'}}>
                    <ul>
                            <li>
                                <b>HỖ TRỢ KHÁCH HÀNG</b>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#">Thuê nhà</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ</a>
                            </li>
                            <li>
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#">Quy chế hoạt động</a>
                            </li>
                            <li>
                                <a href="#">Quy chế sử dụng</a>
                            </li>

                        </ul>
                    </div> 

                    <div className="col-md-3  mt-2" style={{fontSize:'14px', textAlign:'left'}}>
                    <ul>
                            <li>
                                <b>Về Mogi</b>
                            </li>
                            <li>
                                <a href="#">Mua nhà</a>
                            </li>
                            <li>
                                <a href="#">Thuê nhà</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ</a>
                            </li>
                            <li>
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#">Quy chế hoạt động</a>
                            </li>
                            <li>
                                <a href="#">Quy chế sử dụng</a>
                            </li>

                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default Footer