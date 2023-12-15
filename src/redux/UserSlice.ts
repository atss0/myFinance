import { createSlice } from '@reduxjs/toolkit'

interface User {
    id: number;
    user_code: string;
    name: string;
    image: string;
    cover: string;
    email: string;
}

export type UserState = {
    user: User | null;
    token: any;
}

const initialState: UserState = {
    user: null,
    token: null
}

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
})

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer