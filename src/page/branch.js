import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Insert_branch from "../Management/Insert_branch";
import Update_branch from "../Management/Update-branch";


const branch = () => {

    let x = 1
    const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

    const Alert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

    const Alererror = () => {
        Swal.fire({
            title: 'Eroror!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

    return (
        <>
            <div className="container-content">
                <div className="container-full">
                    <div className="card card-boder">
                        <div className="card-body">
                            <nav class="nav">
                                <Link to="/Manage_data" class="nav-link">ຜູ້ບໍລິຫານ</Link>
                                <Link to="/Administrator" class="nav-link">ສະຖານະຜູ້ຂາຍ</Link>
                                <Link to="/branch" class="nav-link active">ສາຂາ</Link>
                            </nav>
                        </div>
                    </div>&nbsp;
                    <div className="group-option-table">
                        <div className="group-seacrh-table"><input type="text" className="form-control border-input" placeholder="ຄົ້ນຫາ"/></div> 
                        <div className="btn-float-left"><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Insert_branch"><i class="bi bi-cloud-plus-fill"></i> ເພີມຂໍ້ມູນ</button></div>
                    </div> &nbsp;
                    <label className="label-table-amount"><strong>ລວມທັ້ງໝົດ 8 ຄົນ</strong></label>
                    <div className="card">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ລຳດັບ</th>
                                <th scope="col">ສະຂາ</th>
                                <th>ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {names.map(item => {
                                    return (
                                        <tr className="hover-table">
                                            <th scope="row">{x++}</th>
                                            <td>@mdo</td>
                                            <td>
                                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Update_branch"><i class="bi bi-pencil-square"></i></a> &nbsp;
                                                <a href="#" className="btn btn-danger" onClick={() => Alererror()}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                                
                            </tbody>
                        </table>

                        {/* Modol popup */}
                            <Insert_branch />
                            <Update_branch />
                        {/* Modol popup */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default branch