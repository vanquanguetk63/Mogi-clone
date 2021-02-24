import React, { useEffect, useState } from 'react';
import buy from '../../api/buy';
import rent from '../../api/rent';
import Card from '../card/Card';
import '../list/List.css';

function List(props) {
    const[listCard, setListCard] = useState();  

    useEffect(() => {
        if (props.purpose === '1') {
            buy.GetToBuyLimit()
            .then((response) => {
                setListCard(response);
            })
            .catch(console.error());
        } else {
            rent.GetToRentLimit()
            .then((response) => {
                setListCard(response);
            })
            .catch(console.error());
        }
    },[])




    return (
        <div className="list">
            <h4 className="ml-1">{props.title}</h4>
            <div className="row ml-1">
                { listCard !== undefined ?  
                listCard.map((obj) => {
                    return <Card key={obj.idPost} data={obj} purpose={props.purpose}></Card>
                })
                : ''}
                <a href={props.purpose === 1 ? '/buy' : '/rent'} className="see-all"><i className="fa fa-chevron-right "></i></a>
            </div>
        </div>
    );
}

export default List;