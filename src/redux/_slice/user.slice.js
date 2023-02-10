import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchWrapper } from "../../helper/fetch-wrapper"



const name = 'users'
const initialState = createInitialState()
const extraActions = createExtraActions()
const extraReducers = createExtraReducers()
const slice = createSlice({name,initialState,extraReducers})


// export

export const userActions = {...slice.actions, ...extraActions}
export const userReducers = slice.reducer

//implementation

function createInitialState(){
    return{
        users:{}
    }
}

function createExtraActions(){
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`
    return {
        getAll: getAll()
    }

    function getAll(){
        return createAsyncThunk(
            `${name}/getall`,
            async()=>await fetchWrapper.get(baseUrl)
            
        )
    }
}

function createExtraReducers(){
    return {
        ...getAll()
    }
    function getAll(){
        var {pending, fulfilled, rejected} = extraActions.getAll
        return {
            [pending]:(state)=>{
                state.users={loading:true}
            },
            [fulfilled]:(state,action)=>{
                state.users=action.payload
            },
            [rejected]:(state,action)=>{
                state.users={error:action.error}
            }
        }
    }
}