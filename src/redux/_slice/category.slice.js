import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchWrapper } from "../../helper/fetch-wrapper"


//create slice
const name = 'categories'
const initialState = createInitialState()
const extraActions = createExtraActions()
const extraReducers = createExtraReducers()
const slice = createSlice({ name, initialState, extraReducers })

//export
export const categoryActions = { ...slice.actions, ...extraActions }
export const categoriesSlice = slice.reducer

//implement

function createInitialState() {
    return {
        categories: []
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/categories`
    console.log(baseUrl)
    return {
        getAllCategories: getAllCategories(),
    }
    function getAllCategories() {
        return createAsyncThunk(
            `${name}/getAllCategories`,
            async () => {
                return await fetchWrapper.get(baseUrl)
                // const response = await axios.get(baseUrl)
                //     .then(response => {
                //         return response.data
                //     }, error => {
                //         console.log(error);
                //     });
                // return response

            }


        )
    }
    
}

function createExtraReducers() {
    return {
        ...getAll(),
    }

    function getAll() {
        const { pending, fulfilled, rejected } = extraActions.getAllCategories
        return {
            [pending]: (state) => {
                state.categories = [{ loading: true }]
            },
            [fulfilled]: (state, action) => {
                state.categories = action.payload
            },
            [rejected]: (state, action) => {
                state.categories = { error: action.error }
            }
        }
    }
    

}