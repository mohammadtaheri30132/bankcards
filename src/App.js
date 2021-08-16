import React from 'react'
import Crad from "./Components/Card";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addAccount">
                <i className="bi bi-plus-square me-1"/> افزودن حساب
            </button>
            <Crad/>
        </>

    );
}

export default App;
