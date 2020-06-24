import React from "react";
import { useHistory } from "react-router-dom";
import { projectRestClient } from "../../services/rest-client-service";
import { toastSuccess } from "../../services/toast-service";
import "./Dashboard.css";

const Dashboard = () => {
    const history = useHistory();

    const requestProtectedApi = async() => {
        try {
            const response = await projectRestClient().get("/users");
            console.log(response.data);
            toastSuccess("Request realizado com sucesso!")
        } catch (error){
            console.log("requestProtectedApi error: ", error);
        }
    }

    const logout = () => {
        localStorage.removeItem("user-tkn");
        history.push("/");
    }

    return (
        <div className="dashboard-container">
            <header>
                <strong>Sample Authentication</strong>
                <button onClick={() => logout()}>Logout</button>
            </header>
            <main>
                <button onClick={() => requestProtectedApi()}>Call Protected Api</button>
            </main>
        </div>
    )
}

export default Dashboard;