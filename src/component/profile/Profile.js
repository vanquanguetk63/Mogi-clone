import React from 'react';
import avatar from "../../img/avatar.png";
import '../profile/Profile.css';

function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-avatar">
                <img className="img-avatar" src={avatar} alt=""></img>
            </div>

            <div className="profile-infor">
                Tran Van Quang
                <br/>
                Da tham gia: 22/12/2022
            </div>
        </div>
    );
}

export default Profile;