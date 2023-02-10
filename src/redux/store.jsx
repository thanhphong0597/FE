import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./_slice/product.slice";
import { categoriesSlice } from "./_slice/category.slice";
import { cartsSlice } from "./_slice/cart.slice";




export const store = configureStore({
    reducer:{
        products:productsSlice,
        categories:categoriesSlice,
        carts:cartsSlice
    },
})