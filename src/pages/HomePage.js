import { Route, Routes, Navigate } from "react-router-dom";

import SideBar from "../component/SideBar";
import Dashboard from "./Dashboard.js";


function HomePage () {
    return (
        <>
        <Routes>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
        </>
    );
}

export default HomePage;
