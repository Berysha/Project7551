import React from "react"
import AdminNav from "../../components/nav/AdminNav"
import "./admind.css"

const AdminDashboard = () => {
    return (
        <div className="boja">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
                <AdminNav />
                </div>
            <div className="col">
            <p className="shegaw">Adminov Dashboard</p>
                <hr/>
            
            </div>
        </div>
    </div></div>
    )
}

export default AdminDashboard;