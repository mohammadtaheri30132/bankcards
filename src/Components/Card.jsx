import React, {useState} from 'react';
import ShabaNumber from "./Shba";
import NumberCard from "./NumberCard";

const Crad = () => {

    const [src, setsrc] = useState(null)
    const [name, setname] = useState('کارت شما')

    return (
        <div className="modal fade" id="addAccount" tabIndex={-1} aria-labelledby="addAccountLabel"
             aria-hidden="true">
            <div className="modal-dialog bank-card"
                 style={{backgroundImage: `url(${src})`}}>
                <div className="modal-content">
                    <div className="d-flex align-items-center mb-4">
                        <img src={src} alt=""/>
                        <div className="flex-fill ms-3">
                            <h5 className="mb-0">{name}</h5>
                            <small className="subtitle">اطلاعات کارت خود را وارد نمایید</small>
                        </div>
                        <button className="btn btn-outline-exchange btn-done"><i className="bi bi-check2"/></button>
                        <button className="btn btn-outline-exchange ms-2" data-bs-dismiss="modal"
                                aria-label="Close"><i className="bi bi-x"/></button>
                    </div>
                    <div className="d-flex card-numbers mb-4" dir="ltr">
                        <NumberCard setname={setname} setsrc={setsrc}/>
                    </div>
                    <ShabaNumber/>
                    <p className="info">در قسمت بالا، شماره کارت و شماره شبای بانک به نام خود را وارد
                        نمایید.</p>
                </div>
            </div>
        </div>
    );
};

export default Crad;
