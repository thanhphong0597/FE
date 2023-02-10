import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { productActions } from "../../../../redux/_slice/product.slice";
import { cartAllSelector, productByIdSelector, productColor, productSize, productStocks } from "../../../../redux/_selector/selectors";
import './style.scss'
import { CountCo } from "../_component/CountCo/CountCo";
import { useState } from "react";
import { cartActions } from "../../../../redux/_slice/cart.slice";
import { computeHeadingLevel } from "@testing-library/react";
import { number } from "yup";

export const ProductCart = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const colors = useSelector(productColor)
    const data = useSelector(productByIdSelector)
    const carts = useSelector(cartAllSelector)
    const stocks = useSelector(productStocks)
    const sizes = useSelector(productSize)
    const presentcart = useSelector(cartAllSelector)
    console.log(presentcart)
    useEffect(() => {
        dispatch(productActions.getProductById(id))
    }, [dispatch, id])
    const handleSizeClick = (e) => {
        let ini = stocks.filter(stock => (stock.size == e.target.value))
        let ina = ini.map(i => (i.color))
        setcolorState(ina)
        localStorage.setItem('size', e.target.value)
    }
    const handeColorClick = (e) => {
        localStorage.setItem('color', e.currentTarget.getAttribute("value"))


    }
    const handleBuyClick = () => {
        console.log({
            product: data.name,
            color: localStorage.getItem("color"),
            size: localStorage.getItem("size"),
            number: localStorage.getItem("count")
        })
        dispatch(cartActions.addCart({
            product: data.name,
            color: localStorage.getItem("color"),
            size: localStorage.getItem("size"),
            number: localStorage.getItem("count")
        }))
    }
    const [colorState, setcolorState] = useState([])
    console.log(sizes)
    return (
        <div className="productList">
            {Object.keys(data).length !== 9 ? (
                <div>loading...</div>
            ) : (
                <>
                    <div className="left">
                        <div className="bigImage"></div>
                        <div className="smallImage"></div>

                    </div>
                    <div className="right">
                        <p className="">{data.name}</p>
                        <div className="rate">Đánh Giá: </div>
                        <div className="price">
                            {data.price} $
                        </div>

                        <div className="size">
                            <ul>
                                {sizes.map(size => (<li key={size} onClick={handleSizeClick} value={size}> {size} </li>))}
                            </ul>
                        </div>
                        <div className="color">
                            <ul>
                                {
                                    colorState && colorState.map(color => (<li key={color} onClick={handeColorClick} value={color}> {color} </li>))
                                }
                            </ul>

                        </div>
                        <div className="number">
                            <p>Số lượng: </p>
                            <CountCo />
                            <Link to={`/Cart`}>
                                <p className="Buy" onClick={handleBuyClick}>Mua ngay</p>
                            </Link>

                        </div>
                    </div>
                </>
            )}

        </div>
    )
}