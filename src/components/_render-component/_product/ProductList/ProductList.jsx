import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsRemainSelector } from '../../../../redux/_selector/selectors'
import ProductDetail from '../ProductDetail/ProductDetail'
import './style.scss'
export const ProductList = () => {

    const data = useSelector(productsRemainSelector)

    return (
        <div className="productlist">
            {data.map(pro => {
                return <ProductDetail key={pro.id} data={pro} />
            })}
        </div>
    )
}