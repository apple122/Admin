import React, { useState } from "react";
import './Header.css'
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Header = () => {

    const [toggles, setToggles] = useState()
    function Toggle(){
      const slide = {
        display: "inline",
        left: "0%"
      }
      setToggles(slide)
    }
    
    function refreshPage() {
      window.location(false);
    }

    const Logout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື່ ບໍ່?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'ອອກຈາກລະບົບ!',
                'Your file has been Logout.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    return (
        <>
            <div className="nav-bar-header header-bar">
                <ul class="nav margin-nav-header">
                    <li class="nav-item">
                        <a class="nav-link enable" onClick={(e)=>Toggle()} tabindex="-1" aria-disabled="true"><i class="bi bi-menu-button-wide-fill"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-house-fill"></i> Ali ແອັດມີນ</a>
                    </li>
                </ul>
                <div className="search-float-left">
                    <input type="text" className="form-control border-input input-flex" placeholder="ຄົ້ນຫາ"/>
                    <Link className="Btn-flex btn btn-danger" onClick={() => Logout()} ><i class="bi bi-box-arrow-right"></i> Logout</Link>
                </div>
            </div>
            
            <div className="nav left-bar float-left menu-toggle" style={toggles}>
                <img src={Logo} width="50%" height="10%" className="Image-logo"/>
                <div className="nav-bar list-item-bar">
                    {/* <!-- As a link --> */}
                    <nav class="navbar navbar-light-active">
                        <div class="container-fluid">
                            <Link to="/Manage_data" class="navbar-brand" onClick={refreshPage}><i class="bi bi-house-fill"></i> ຈັດການຂໍ້ມູນ</Link>
                        </div>
                    </nav>
                    <nav class="navbar Logout-bar">
                        <div class="container-fluid">
                            <Link onClick={() => Logout()} class="navbar-brand btn-danger"><i class="bi bi-box-arrow-right"></i> Logout</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="respon-mobile"/>
        </>
    )
}

export default Header