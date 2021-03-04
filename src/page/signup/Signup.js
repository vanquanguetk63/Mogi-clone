import React, { useEffect, useState } from "react";
import "../signup/Signup.css";
import "axios";
import User from "../../api/user";
import { Redirect, useHistory } from "react-router-dom";

function Signup(props) {
  const history = useHistory();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [msgValidation, setMsgValidation] = useState("");
  const [isDone, setIsDone] = useState();

  useEffect(() => {
    if (isDone === true) {
      User.SearchByPhone(phoneNumber)
        .then((response) => {
          if (response === true) {
            msg.errPhoneNumber = "Số điện thoại bị trùng.";
            setMsgValidation(msg);
          } else {
            msg.errPhoneNumber = "";
            setMsgValidation(msg);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [isDone]);

  const SignUp = () => {
    if (isDone === true) {
      let data = {};
      data.fullName = fullName;
      data.phoneNumber = phoneNumber;
      data.email = email;
      data.password = password;
      User.SignUp(data)
        .then((response) => {
          if (response === "success") {
            console.log("hehe");
            history.push({
              pathname: "/login",
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  var msg = {
    errName: "",
    errPhoneNumber: "",
    errEmail: "",
    errPassword: "",
    errRePassword: "",
    errIsDuplicate: "",
  };

  var phoneDuplicate = {};

  const listValidatePhone = [
    "086",
    "096",
    "097",
    "098",
    "032",
    "033",
    "034",
    "035",
    "036",
    "037",
    "038",
    "039",
    "088",
    "091",
    "094",
    "083",
    "084",
    "085",
    "081",
    "082",
    "089",
    "090",
    "093",
    "070",
    "079",
    "077",
    "076",
    "078",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    ValidateFullName();
    ValidatePhoneNumber();
    validateEmail();
    ValidatePassword();
    ValidateRePassword();
    setMsgValidation(msg);

    IsValidateForm();
  };

  /**
   * hàm xuống dòng khi enter trong 1 element trong form
   */
  const HandleEnter = (event) => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      if (index === 0) {
        ValidateFullName();
      }
      if (index === 1) {
        ValidatePhoneNumber();
      }
      if (index === 2) {
        validateEmail();
      }
      if (index === 3) {
        ValidatePassword();
      }
      if (index === 4) {
        ValidateRePassword();
      }

      setMsgValidation(msg);

      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  /**
   * Hàm validate Ho ten
   */
  const ValidateFullName = () => {
    let regex = /[0-9!@#\$%\^\&*\)\(+=._-]/g;
    let isContain = fullName.match(regex);
    if (isContain !== null) {
      msg.errName = "Họ và Tên không được chứa ký tự đặc biệt.";
      return;
    } else {
      msg.errName = "";
    }

    if (fullName.length <= 0 || fullName.length > 30) {
      msg.errName = "Độ dài Họ và Tên không hợp lệ.";
      return;
    } else {
      let myName = fullName.split(" ");
      let results = "";
      if (myName.length > 0) {
        for (let i = 0; i < myName.length; i++) {
          myName[i] = myName[i].toLowerCase();
          myName[i] = myName[i].charAt(0).toUpperCase() + myName[i].slice(1);
          if (i === myName.length - 1) {
            results += myName[i];
          } else {
            results += myName[i] + " ";
          }
        }
      } else {
        myName = myName.toLowerCase();
        myName = myName.charAt(0).toUpperCase() + myName.slice(1);
        results = myName;
      }
      setFullName(results);
      msg.errName = "";
    }
  };

  /**
   * Hàm validate phoneNumber
   */
  const ValidatePhoneNumber = (callback) => {
    if (phoneNumber.length <= 9 || phoneNumber.length > 12) {
      msg.errPhoneNumber = "Độ dài số điện thoại không hợp lệ.";
      return;
    }

    let regex = /[a-zA-Z!@#\$%\^\&*\)\(+=._-]/g;
    let isContain = phoneNumber.match(regex);

    if (isContain !== null) {
      msg.errPhoneNumber =
        "Số điện thoại không được chứ ký tự đặc biệt hoặc là chữ số.";
      return;
    }

    let firstNum =
      phoneNumber.charAt(0) + phoneNumber.charAt(1) + phoneNumber.charAt(2);
    let isValidate = listValidatePhone.filter((item) => item === firstNum);
    if (isValidate.length === 0) {
      msg.errPhoneNumber = "Số điện thoại không hợp lệ.";
      return;
    }

    msg.errPhoneNumber = "";
  };

  /**
   * Hàm validate Email
   */
  const validateEmail = () => {
    if (email.length <= 0 || email.length > 40) {
      msg.errEmail = "Độ dài Email không hợp lệ";
      return;
    }

    let regex = /[!#\$%\^\&*\)\(+=_-]/g;
    let checkEmail = email.match(regex);

    if (checkEmail !== null) {
      msg.errEmail = "Email không được chứa ký tự đặc biệt ngoại trừ @";
      return;
    }

    let myEmail = email.split("@");

    if (myEmail.length != 2) {
      msg.errEmail = "Email không hợp lệ";
      return;
    } else {
      if (myEmail[1].includes(".") === false) {
        msg.errEmail = "Email không hợp lệ";
        return;
      }
    }

    msg.errEmail = "";
  };

  /**
   * Hàm validate mật khẩu
   */
  const ValidatePassword = () => {
    if (password.length < 6 || password.length > 20) {
      msg.errPassword = "Độ dài mật khẩu phải > 6 và < 20";
      return;
    }

    let regex = /[A-Z!@#\$%\^\&*\)\(+=._-]/g;
    let checkPassword = password.match(regex);
    if (checkPassword !== null) {
      msg.errPassword = "Mật khẩu không được chứa chữ hoa và ký tự đặc biệt.";
      return;
    }

    msg.errPassword = "";
  };

  /**
   * Hàm validate nhập lại mật khẩu
   */
  const ValidateRePassword = () => {
    if (rePassword.length < 6 || rePassword.length > 20) {
      msg.errRePassword = "Độ dài mật khẩu phải > 6 và < 20";
      return;
    }

    let regex = /[A-Z!@#\$%\^\&*\)\(+=._-]/g;
    let checkPassword = rePassword.match(regex);
    if (checkPassword !== null) {
      msg.errRePassword = "Mật khẩu không được chứa chữ hoa và ký tự đặc biệt.";
      return;
    }

    if (password !== rePassword) {
      msg.errRePassword = "Mật khẩu không khớp.";
      return;
    }

    msg.errRePassword = "";
  };

  /**
   * Hàm check form
   */
  const IsValidateForm = () => {
    if (msgValidation.errName !== "") {
      setIsDone(false);
    }
    if (msgValidation.errPhoneNumber !== "") {
      setIsDone(false);
    }
    if (msgValidation.errEmail !== "") {
      setIsDone(false);
    }
    if (msgValidation.errPassword !== "") {
      setIsDone(false);
    }
    if (msgValidation.errRePassword !== "") {
      setIsDone(false);
    }

    setIsDone(true);
  };

  return (
    <div>
      <div className="signup-form">
        <div className="panel">
          <div className="panel-header">
            <div className="signup select">
              <p>Đăng ký</p>
            </div>
          </div>

          <div className="panel-body">
            <br />
            <form onSubmit={handleSubmit}>
              <div className="input-icons mb-2">
                <i className="fas fa-user icon"></i>
                <input
                  className="textfield"
                  value={fullName}
                  type="text"
                  placeholder="Họ và tên"
                  onKeyDown={HandleEnter}
                  onChange={(event) => setFullName(event.target.value)}
                ></input>
                <br />
                <span className="err">{msgValidation.errName}</span>
              </div>

              <div className="input-icons mb-2">
                <i className="fas fa-phone-square icon"></i>
                <input
                  className="textfield"
                  value={phoneNumber}
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  onKeyDown={HandleEnter}
                ></input>
                <br />
                <span className="err">{msgValidation.errPhoneNumber}</span>
              </div>

              <div className="input-icons mb-2">
                <i className="fas fa-at icon"></i>
                <input
                  className="textfield"
                  value={email}
                  type="text"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={HandleEnter}
                ></input>
                <br />
                <span className="err">{msgValidation.errEmail}</span>
              </div>

              <div className="input-icons mb-2">
                <i className="fas fa-lock icon "></i>
                <input
                  className="textfield"
                  value={password}
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyDown={HandleEnter}
                ></input>
                <br />
                <span className="err">{msgValidation.errPassword}</span>
              </div>

              <div className="input-icons">
                <i className="fas fa-lock icon "></i>
                <input
                  className="textfield"
                  value={rePassword}
                  type="password"
                  placeholder="Nhập lại Mật khẩu"
                  onChange={(event) => setRePassword(event.target.value)}
                  onKeyDown={HandleEnter}
                ></input>
                <br />
                <span className="err">{msgValidation.errRePassword}</span>
              </div>

              <button onClick={SignUp} className="btn-custom btn-signup mt-3">
                Đăng ký <i className="fas fa-angle-right ml-3"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
