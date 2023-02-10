import { createSelector } from "@reduxjs/toolkit"



export const categoriesSelector = x=>x.categories.categories

export const productsSelector = x=>{
    return x.products.allProducts
}
export const productByIdSelector = x=>x.products.byIdproduct

export const searchTextSelector = x=>x.products.filter

export const productsRemainSelector = createSelector(
    productsSelector,searchTextSelector,
    (products,filter)=>{
        let i = 0;
        let data = []
        for (i; i<products.length; i++) {
            if(products[i].name.includes(filter)) data.push(products[i])
            
        }
        return data
    }
)

export const productSize = x=>x.products.sizes
export const productColor = x=>x.products.colors
export const productStocks = x=>x.products.stocks
export const cartAllSelector = x=>x.carts.allCarts
export const cartNowSelector = x=>x.carts.presentCart




