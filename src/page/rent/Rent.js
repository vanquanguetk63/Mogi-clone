import React from 'react';
import SearchControl from '../../component/search-control/SearchControl';
import Item from '../../component/item/Item';
import ads from "../../img/right.jpg";
import '../rent/Rent.css';
import Filter from '../../component/filter/Filter';


function Rent(props) {
    return (
        <div className="container rent py-3">
            <SearchControl/>
            <p>Link</p>
            <div className="row set-align">
                <div className="col-12 col-md-8">
                    <b>
                        <h5>
                        Thuê nhà đất 2021 giá rẻ tại Việt Nam, giá thuê mới nhất
                        </h5>
                    </b>

                    <div className="result mb-3">
                        <div className="ml-2">1 - 15 trong 100.000 kết quả</div>
                    </div>

                    <Item/>
                    <Item/>
                    <Item/>
                </div>

                <div className="col-0 col-md-4">
                    <div>
                        <img className="img-ads" src={ads} alt=""></img>
                    </div>
                    
                    <Filter/>
                </div>
            </div>
        </div>
    );
}

export default Rent;