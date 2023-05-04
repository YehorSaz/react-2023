import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: []
};

const slice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setComments: (state,action) => {
            state.comments = action.payload;
        },
        create: (state, action) => {
            state.comments.push(action.payload.comment);
        }
    }
});

const {reducer: commentReducer, actions} = slice;

const commentsActions = {
    ...actions
}

export {
    commentReducer,
    commentsActions
}