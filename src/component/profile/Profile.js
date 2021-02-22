import React from 'react';
import avatar from "../../img/avatar.png";
import validate from '../../lib/validate';
import '../profile/Profile.css';

function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-avatar">
                <img className="img-avatar" src={avatar} alt=""></img>
            </div>

            <div className="profile-infor">
                { props.data !== undefined ? props.data[0].nameUser : ""}
                <br/>
                Đã tham gia: { props.data !== undefined ? validate.validateDay(props.data[0].CreateAt) : "" }
            </div>
        </div>
    );
    
}

export default Profile;