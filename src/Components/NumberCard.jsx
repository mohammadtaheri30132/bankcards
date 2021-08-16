import React, {useState} from 'react';
import {toast} from "react-toastify";

const NumberCard = ({setsrc,setname}) => {

    const [cardNumber, setcardNumber] = useState("")
    const [warning, setWarning] = useState(true)
    const [error, serError] = useState(true)
    const [isCard, setIsCard] = useState(false)

    const handleinput = (e) => {
        let data =
            e.length % 5 !== 4
                ? e
                    .replace(/[^\dA-Z]/g, '')
                    .replace(/(.{4})/g, '$1-')
                    .trim()
                : e;

        if (data.length === 20) data = data.substring(0, data.length - 1);
        setcardNumber(data)
        let card = data.split('-').join('');
        const number = card.substring(6, -16);
        if (card.length >= 6) {
            if (number === '603799') {
                setsrc('/assets/img/banks/6037-99.svg')
                setname('بانک ملی')
                setIsCard(true)

            }
            if (number === '589210') {
                setsrc('/assets/img/banks/5892-10.svg')
                setname('بانک سپه')
                setIsCard(true)

            }
            if (number === '627961') {
                setsrc('/assets/img/banks/6279-61.svg')
                setname('بانک صنعت و معدن')
                setIsCard(true)

            }
            if (number === '603770' || number === '639217') {
                setsrc('/assets/img/banks/6037-70.svg')
                setname('بانک کشاورزی')
                setIsCard(true)

            }
            if (number === '628023') {
                setsrc('/assets/img/banks/6280-23.svg')
                setname('بانک مسکن')
                setIsCard(true)

            }
            if (number === '627760') {
                setsrc('/assets/img/banks/6277-60.svg')
                setname('پست بانک ایران')
                setIsCard(true)

            }
            if (number === '502908') {
                setsrc('/assets/img/banks/5029-08.png')
                setname('بانک توسعه تعاون')
                setIsCard(true)

            }
            if (number === '627412') {
                setsrc('/assets/img/banks/6274-12.svg')
                setname('بانک اقتصاد نوین')
                setIsCard(true)

            }
            if (number === '622106') {
                setsrc('/assets/img/banks/6221-06.svg')
                setname('بانک پارسیان')
                setIsCard(true)

            }
            if (number === '502229' || number === '639347') {
                setsrc('/assets/img/banks/5022-29.svg')
                setname('بانک پاسارگارد')
                setIsCard(true)

            }
            if (number === '627488') {
                setsrc('/assets/img/banks/6274-88.svg')
                setname('بانک کارآفرین')
                setIsCard(true)

            }
            if (number === '621986') {
                setsrc('/assets/img/banks/6219-86.svg')
                setname('بانک سامان')
                setIsCard(true)

            }
            if (number === '639346') {
                setsrc('/assets/img/banks/6393-46.svg')
                setname('بانک سینا')
                setIsCard(true)

            }
            if (number === '639607') {
                setsrc('/assets/img/banks/6396-07.svg')
                setname('بانک سرمایه')
                setIsCard(true)

            }
            if (number === '502806') {
                setsrc('/assets/img/banks/5028-06.svg')
                setname('بانک شهر')
                setIsCard(true)

            }
            if (number === '502938') {
                setsrc('/assets/img/banks/5029-38.svg')
                setname('بانک دی')
                setIsCard(true)

            }
            if (number === '603769') {
                setsrc('/assets/img/banks/6037-69.svg')
                setname('بانک صادرات')
                setIsCard(true)

            }
            if (number === '610433' || number === '991975') {
                setsrc('/assets/img/banks/6104-33.svg')
                setname('بانک ملت')
                setIsCard(true)

            }
            if (number === '627353') {
                setsrc('/assets/img/banks/6273-53.svg')
                setname('بانک تجارت')
                setIsCard(true)

            }
            if (number === '589463') {
                setsrc('/assets/img/banks/6273-53.svg')
                setname('بانک رفاه')
                setIsCard(true)

            }
            if (number === '627381') {
                setsrc('/assets/img/banks/6273-81.svg')
                setname('بانک انصار')
                setIsCard(true)

            }
            if (number === '639370') {
                setsrc('/assets/img/banks/6393-70.svg')
                setname('بانک مهر اقتصاد')
                setIsCard(true)

            }
            if (number === '639599') {
                setsrc('/assets/img/banks/6395-99.svg')
                setname('بانک قوامین')
                setIsCard(true)

            }
            if (number === '504172') {
                setsrc('/assets/img/banks/5041-72.svg')
                setname('بانک رسالت')
                setIsCard(true)

            }
            if (number === '505785') {
                setsrc('/assets/img/banks/5057-85.png')
                setname('بانک ایران زمین')
                setIsCard(true)

            }
            if (number === '639194' || number === '627884') {
                setsrc('/assets/img/banks/6391-94.svg')
                setname('بانک پارسیان')
                setIsCard(true)

            }
            if (number === '627648' || number === '207177') {
                setsrc('/assets/img/banks/6276-48.png')
                setname('توسعه صادرات ایران')
                setIsCard(true)

            }
            if (number === '606373') {
                setsrc('/assets/img/banks/6063-73.png')
                setname('قرض الحسنه مهر ایران')
                setIsCard(true)

            }
            if (number === '505416') {
                setsrc('/assets/img/banks/5054-16.png')
                setname('بانک گردشگری')
                setIsCard(true)

            }
            if (number === '636795') {
                setsrc('/assets/img/banks/6367-95.png')
                setname('بانک مرکزی')
                setIsCard(true)

            }
            if (number === '505801') {
                setsrc('/assets/img/banks/6367-95.png')
                setname('موسسه اعتباری کوثر')
                setIsCard(true)

            }
        } else {
            setIsCard(false)
            setsrc(null)
            setname('کارت بانکی شما')
            setWarning(true)
            serError(true)
        }
        if (typeof card === 'undefined' || card === null || card.length !== 16) {
            return false;
        }
        let cardTotal = 0;
        for (let i = 0; i < 16; i += 1) {
            const c = Number(card[i]);
            if (i % 2 === 0) {
                cardTotal += ((c * 2 > 9) ? (c * 2) - 9 : (c * 2));
            } else {
                cardTotal += c;
            }
        }
        if (cardTotal % 10 === 0 && isCard === true) {
            setWarning(false)
            serError(false)
        } else {
            if (data.length === 19) {
                toast.error("شماره کارت صحیح نمی باشد", {
                    bodyStyle:{
                        fontSize:"80%",
                        textAlign: 'right',
                        fontFamily:"iranyekan"
                    },
                    style:{
                        background:"#f50606 "
                    },
                    position: "bottom-center",
                    closeOnClick: true
                });
            }
            setWarning(false)
            serError(true)
        }

    }
    return (
        <>
            <input type="text" className="form-control card-number"
                   value={cardNumber}
                   onChange={e => handleinput(e.target.value)} placeholder="xxxx - xxxx - xxxx - xxxx"
                   maxLength='19'/>
            {
                warning ? (<i className="bi bi-info-circle-fill"/>) : error ? (
                    <i className="bi bi-x-circle-fill"/>) : (<i className="bi bi-check-circle-fill"/>)
            }
        </>

    );
};

export default NumberCard;
