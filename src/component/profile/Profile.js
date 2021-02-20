import React from 'react';
import avatar from "../../img/avatar.png";
import '../profile/Profile.css';

function Profile(props) {
    const validateDay = () => {
        // let day = props.data.currentUser[0].CreateAt.slice(0,10);
        // day = reverseString(day);
        // return day;
    }

    function reverseString(str) {
        var newString = str.split('-');
        var rvsStr = '';
        for (var i = newString.length - 1; i >= 0; i--) { 
            if (i === 0) {
                rvsStr += newString[i]; 
            } else {
                rvsStr += newString[i] + '/'; 
            }
        }
        return rvsStr; 
    }

    return (
        <div className="profile">
            <div className="profile-avatar">
                <img className="img-avatar" src={avatar} alt=""></img>
            </div>

            <div className="profile-infor">
                {/* {props.data.currentUser[0].idUser} */}
                <br/>
                Đã tham gia: 
                <br/>
                { validateDay() }
            </div>
        </div>
    );
    
}

export default Profile;