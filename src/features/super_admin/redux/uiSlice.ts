import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addUser: false,
}
export const superAdminUiSlice = createSlice({
    name: 'superAdminUi',
    initialState,
    reducers:{
        toggleAddUser: (state) => {
            state.addUser = !state.addUser
            console.log(state.addUser)
        }
    }
})

export const { toggleAddUser} = superAdminUiSlice.actions

export default superAdminUiSlice.reducer