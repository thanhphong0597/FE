import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { fetchWrapper } from "../../helper/fetch-wrapper"


//create slice , extraaction phai dc goi trc actra reducer
const name = 'carts'
const initialState = createInitialState()
const reducers = createReducers()
const extraActions = createExtraActions()
const extraReducers = createExtraReducers()
const slice = createSlice({ name, initialState, reducers, extraReducers })

//export
export const cartActions = { ...slice.actions, ...extraActions }
export const cartsSlice = slice.reducer

//implement

function createInitialState() {
    return {
        allCarts: [
            
        ],
        presentCart: {},

    }
}

function createReducers() {
    return {
        addCart,
    }
    
    function addCart(state, action){
        // state.allCarts = [... state.allCarts, action.payload]
        state.allCarts = state.allCarts.concat(action.payload);
    }
}


function createExtraActions() {
    // 
}

function createExtraReducers() {
    // return {
    //     ...getAll(),
    //     ...getProductById()
    // }

    // function getAll() {
    //     const { pending, fulfilled, rejected } = extraActions.getAllProducts
    //     return {
    //         [pending]: (state) => {
    //             state.allProducts = { loading: true }
    //         },
    //         [fulfilled]: (state, action) => {
    //             state.allProducts = action.payload
    //         },
    //         [rejected]: (state, action) => {
    //             state.allProducts = { error: action.error }
    //         }
    //     }
    // }
    // function getProductById() {
    //     const { pending, fulfilled, rejected } = extraActions.getProductById
    //     return {
    //         [pending]: (state) => {
    //             state.byIdproduct = { loading: true }
            
    //         },
    //         [fulfilled]: (state, action) => {
    //             state.byIdproduct = action.payload
    //             state.stocks = action.payload.stocks
    //             let sizes =[...new Set(action.payload.stocks.map(i=>i.size))]
    //             state.sizes = sizes
    //             let colors =[...new Set(action.payload.stocks.map(i=>i.color))]
    //             state.colors = colors
    //         },
    //         [rejected]: (state, action) => {
    //             state.byIdproduct = { error: action.error }
    //         }
    //     }
    // }

}