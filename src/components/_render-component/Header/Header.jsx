

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../redux/_slice/category.slice'
import { productActions } from '../../../redux/_slice/product.slice';
import { categoriesSelector } from '../../../redux/_selector/selectors';
import CategoryDetail from '../categoryDetail';
import './style.scss'
export default function Header() {
    const data = useSelector(categoriesSelector)
    return (
       
        <div className="header">
            <div className="header-logo"></div>

            <ul>
                {data.map(cat=>
                    <li key={`${cat.id}s`}>
                        {cat.name}
                    </li>
                    )}
            </ul>

            <div className="header-search">

            </div>

        </div>
    )
}



