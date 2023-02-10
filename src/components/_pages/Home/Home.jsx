
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { categoryActions } from '../../../redux/_slice/category.slice'
import { productActions } from '../../../redux/_slice/product.slice'
import { userActions } from '../../../redux/_slice/user.slice'
import { Banner } from '../../_render-component/Banner/Banner'
import { ProductList } from '../../_render-component/_product/ProductList/ProductList'
import './style.scss'
export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(productActions.getAllProducts())
    dispatch(categoryActions.getAllCategories())
    // dispatch(userActions.getAll())
  },[dispatch])

  return (

    <div className='home'>
      <Banner/>
      <ProductList/>
    </div>

  )

}
