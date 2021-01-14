import React from 'react';
import Card from '../card/Card';
import '../list/List.css';

function List(props) {
    return (
        <div className="list">
            <h2>Title</h2>
            <div className="row ml-1">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <a className="see-all"><i className="fa fa-chevron-right "></i></a>
                
            </div>
        </div>
    );
}

export default List;