import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem('reply') ? [...JSON.parse(localStorage.getItem('reply'))] : []

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment(state, action) {
            const { content, writer, postId, responseTo, commentId } = action.payload
            state.push({ content, writer, postId, responseTo, commentId })
        }
    }

    
})
export const { addComment } = commentSlice.actions
export default commentSlice.reducer