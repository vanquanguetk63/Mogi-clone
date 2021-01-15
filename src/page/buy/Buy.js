import { blue, yellow } from '@material-ui/core/colors';
import React, { Component } from 'react';
import Header from '../../component/header/Header';
import Item from '../../component/item/Item';
import SearchControl from '../../component/search-control/SearchControl';
import '../buy/Buy.css';
import Footer from "../../component/footer/Footer";


class Buy extends Component {
    render() {
        return (
            <>
                <div>
                    <Header/>
                </div>

                <div className="container mt-1">
                    <div className="control-search">
                        <SearchControl/>
                    </div>
                    
                    <div>
                        <p>Link</p>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <b><h5>Thuê nhà đất 2021 giá rẻ tại Việt Nam, giá thuê mới nhất</h5></b>

                            <div className="result">
                                <div className="ml-2">
                                    1 - 15 trong 100.000 kết quả
                                </div>
                                <button className="btn btn-save mr-2">
                                <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i>
                                Lưu tìm kiếm
                                </button>


                            </div>

                            <div className="mt-3">
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                            </div>
                        </div>

                        <div className="col-4">
                            Right
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Buy;