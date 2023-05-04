import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload;
        },
        changeTrigger: state => {
            state.trigger = !state.trigger;
        }
    }
});

const {reducer: carsReducer, actions} = slice;

const carsActions = {
    ...actions
};

export {
    carsReducer,
    carsActions
}

