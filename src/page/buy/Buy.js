import { blue, yellow } from '@material-ui/core/colors';
import React, { Component } from 'react';
import Header from '../../component/header/Header';
import SearchControl from '../../component/search-control/SearchControl';
import '../buy/Buy.css';

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

                    <div className="row">
                        <div className="col-md-8">hh</div>
                        <div className="col-md-4">fff</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Buy;