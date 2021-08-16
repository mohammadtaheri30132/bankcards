import React, {useState} from 'react';

const ShabaNumber = () => {
    const [shaba, setshaba] = useState('')
    const [error, serError] = useState(true)
    const [warning, setWarning] = useState(true)

    const handleinput = (e) => {
        setshaba(e)
        if (e.length > 0 && e.length < 24) {
            serError(false)
            setWarning(true)
        } else if (e.length === 0) {
            serError(true)
        } else {
            serError(false)
            setWarning(false)
        }
    }
    return (

        <>
            <p className="subtitle card-numbers mb-0"><small>شماره شبا</small></p>
            <div className="d-flex card-numbers mb-3" dir="ltr">
                <span style={{marginTop: "2px"}}>IR </span>
                <input style={{fontSize: "14.8px"}} value={shaba} type="text" onChange={(e) => {
                    handleinput(e.target.value)
                }} maxLength="24" className="form-control card-number sheba-number"
                       placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"/>{
                warning ? (<i className="bi bi-info-circle-fill"/>) : error ? (
                    <i className="bi bi-x-circle-fill"/>) : (<i className="bi bi-check-circle-fill"/>)
            }
            </div>
        </>
    );
};

export default ShabaNumber;
