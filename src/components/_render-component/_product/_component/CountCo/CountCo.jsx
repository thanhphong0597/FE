import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productSize } from '../../../../../redux/_selector/selectors';
import { productActions } from '../../../../../redux/_slice/product.slice';
import './style.scss'

export const CountCo = () => {
    const [num, setNum] = useState(1)
    useEffect(() => {
        !localStorage.getItem("count") && localStorage.setItem('count', 1)
    }, [])

    function handleMinus() {
        setNum(prevNum => {
            localStorage.setItem('count', prevNum > 1 ? prevNum - 1 : prevNum)
            return prevNum > 1 ? prevNum - 1 : prevNum;
        }
        )
    };

    function handlePlus() {
       
        setNum(prevNum => {
            localStorage.setItem('count', prevNum + 1)
            return prevNum + 1
        });

    };
    return (
        <div className="CountCo">
            <button onClick={handleMinus} className='minus'> - </button>
            <input type="number" name="" id="" readOnly value={num} />
            <button onClick={handlePlus} className='plus'> + </button>
        </div>
    )
}