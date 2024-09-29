import { createAction, createReducer } from '@reduxjs/toolkit';

// Define action creators
export const dataRequest = createAction('DATA_REQUEST');
export const dataSuccess = createAction('DATA_SUCCESS');
export const dataFailure = createAction('DATA_FAILURE');

export const selectDataRequest = createAction('SELECT_DATA_REQUEST');
export const selectDataSuccess = createAction('SELECT_DATA_SUCCESS');
export const selectDataFailure = createAction('SELECT_DATA_FAILURE');

// Reducer for managing data
export const DataReducer = createReducer({}, (builder) => {
  builder
    .addCase(dataRequest, (state) => {
      state.loading = true;
    })
    .addCase(dataSuccess, (state, action) => {
      state.loading = false;
      state.allTickets = action.payload.tickets;
      state.allUser = action.payload.users;
    })
    .addCase(dataFailure, (state) => {
      state.loading = false;
      state.allTickets = [];
      state.allUser = [];
    });
});

// Reducer for selecting data
export const SelectDataReducer = createReducer({}, (builder) => {
  builder
    .addCase(selectDataRequest, (state) => {
      state.loading = true;
      state.selectedData = [];
    })
    .addCase(selectDataSuccess, (state, action) => {
      state.loading = false;
      state.selectedData = action.payload.selectedData;
      state.user = action.payload.user;
    })
    .addCase(selectDataFailure, (state, action) => {
      state.loading = false;
      state.selectedData = [];
      state.message = action.payload.message;
    });
});
