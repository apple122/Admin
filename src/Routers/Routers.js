import React from "react";
import { Route, Routes } from "react-router-dom";
import Manage_data from "../page/Manage_data";
import Administrator from "../page/Administrator_status";
import Branch from "../page/branch";

const Rouert = () => {
    return (
        <>
            <Routes>
                <Route path="/Manage_data" element={<Manage_data/>} exact={true}/>
                <Route path="/Administrator" element={<Administrator/>}/>
                <Route path="/branch" element={<Branch/>}/>
            </Routes>
        </>
    )
}

export default Rouert