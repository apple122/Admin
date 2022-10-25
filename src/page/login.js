import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Logo_item1 from '../assets/imgs/machine-8.gif'
import Logo_item2 from '../assets/imgs/paper-8.gif'
import './Login.css'

const Login = () => {
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="group-columns">
                        <div className="form-group">
                            <img src={Logo} id="image"/>
                        </div>&nbsp;
                        <div className="form-group">
                            <label><strong>ຊື່ຜູ້ໃຊ້ງານ</strong></label>
                            <input type="text" className="form-control control-input" placeholder="ກະລຸນາປ່ອນ ຊື່ຜູ້ໃຊ້ງານ"/>
                        </div>
                        <div className="form-group">
                            <label><strong>ລະຫັດຜ່ານ</strong></label>
                            <input type="text" className="form-control control-input" placeholder="ກະລຸນາປ່ອນ ສະກັດຜ່ານ"/>
                        </div>
                        <div className="form-group">
                            <label className="label-float-right">ລືມລະຫັດຜ່ານ?</label>
                        </div>
                        <div className="form-group group-btn">
                            <Link to="/App" className="btn btn-primary form-control control-input">ເຂົ້າສູລະບົບ</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                   <div className="group-item">
                        <div className="item-background">   
                            <div className="item1-bac"></div>
                            <div className="item2-bac"></div>
                        </div>
                        <div className="item-image">
                            <img src={Logo_item2} id="logo-item2"/>
                            <img src={Logo_item1} id="logo-item1"/>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Login