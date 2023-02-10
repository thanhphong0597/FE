import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { fetchWrapper } from "../../helper/fetch-wrapper"


//create slice , extraaction phai dc goi trc actra reducer
const name = 'products'
const initialState = createInitialState()
const reducers = createReducers()
const extraActions = createExtraActions()
const extraReducers = createExtraReducers()
const slice = createSlice({ name, initialState, reducers, extraReducers })

//export
export const productActions = { ...slice.actions, ...extraActions }
export const productsSlice = slice.reducer

//implement

function createInitialState() {
    return {
        allProducts: [],
        byIdproduct: {},
        filter: '',
        sizes:[],
        colors:[],
        stocks:[]

    }
}

function createReducers() {
    return {
        searchText,
        searchSize,
        addStocks,
    }
    function searchText(state, action) {
        state.filter = action.payload
    }
    function searchSize(state, action){
        state.size = action.payload
    }
    function addStocks(state, action){
        state.stocsk = action.payload
    }
}


function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/products`
    return {
        getAllProducts: getAllProducts(),
        getProductById: getProductById()

    }
    function getAllProducts() {
        return createAsyncThunk(
            `${name}/getAllProducts`,
            async () => {
                return await fetchWrapper.get(baseUrl)
            }
        )
    }
    function getProductById() {

        return createAsyncThunk(
            `${name}/getProductById`,
            async (id) => {
                return await fetchWrapper.get(`${baseUrl}/${id}`)
            }
        )
    }
}

function createExtraReducers() {
    return {
        ...getAll(),
        ...getProductById()
    }

    function getAll() {
        const { pending, fulfilled, rejected } = extraActions.getAllProducts
        return {
            [pending]: (state) => {
                state.allProducts = { loading: true }
            },
            [fulfilled]: (state, action) => {
                state.allProducts = action.payload
            },
            [rejected]: (state, action) => {
                state.allProducts = { error: action.error }
            }
        }
    }
    function getProductById() {
        const { pending, fulfilled, rejected } = extraActions.getProductById
        return {
            [pending]: (state) => {
                state.byIdproduct = { loading: true }
            
            },
            [fulfilled]: (state, action) => {
                state.byIdproduct = action.payload
                state.stocks = action.payload.stocks
                let sizes =[...new Set(action.payload.stocks.map(i=>i.size))]
                state.sizes = sizes
                let colors =[...new Set(action.payload.stocks.map(i=>i.color))]
                state.colors = colors
            },
            [rejected]: (state, action) => {
                state.byIdproduct = { error: action.error }
            }
        }
    }

}