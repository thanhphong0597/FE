import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { history } from "../../helper";
import { fetchWrapper } from "../../helper/fetch-wrapper";

//create slice
const name = 'auth'
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducer();
const slice = createSlice({ name, initialState, reducers, extraReducers })

//export
export const authActions = { ...slice.actions, ...extraActions }
export const authReducer = slice.reducer

//implementation
function createInitialState() {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        error: null
    }
}
function createReducers() {
    return { logout }
    function logout(state) {
        state.user = null
        localStorage.removeItem('user')
        history.navigate('/')
    }
}
function createExtraReducer() {
    return {
        ...login()
    }
    function login() {
        var { pending, fulfilled, rejected } = extraActions.login

        return {
            [pending]: (state) => {
                state.error = null
            },
            [fulfilled]: (state, action) => {
                const user = action.payload
                //store user and jwt in localstorage
                localStorage.setItem('user', JSON.stringify(user))
                state.user = user

                //return url from location state or default to home '/'
                const { from } = history.location.state || { from: { pathname: '/' } }
                history.navigate(from)
            },
            [rejected]: (state, action) => {
                state.error = action.error
            }
        }
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users}`
    return {
        login: login()
    }
    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async({username,password})=>await fetchWrapper.post(`${baseUrl}/api/auth/login`,{username,password})
        )
    }
}