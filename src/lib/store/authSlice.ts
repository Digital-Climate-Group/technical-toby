import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  		user: { email: string } | null;
 		isAuthenticated: boolean;
  		error: string | null;
        password: string
}

let authdb = [
    {user: {email: "admin@test.com"},
    isAuthenticated: false,
    error: "",
    password: "password123"}
] as AuthState[]

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    mydb: authdb
  },
  reducers: {
        userLogin: (state, action) => {
            let user = state.mydb.find((user) => user === action.payload)
            if (user) {
                user.isAuthenticated = true
                state.mydb = [...authdb, user]
            } else {
                // Set error message
            }
        }
  }
})

// Action creators are generated for each case reducer function
export const { userLogin } = authSlice.actions

export default authSlice.reducer