import { createAction, createReducer } from '@reduxjs/toolkit';

// Define action creators
export const dataRequest = createAction('DATA_REQUEST'); // Action to initiate data request
export const dataSuccess = createAction('DATA_SUCCESS'); // Action when data is fetched successfully
export const dataFailure = createAction('DATA_FAILURE'); // Action when data fetch fails

export const selectDataRequest = createAction('SELECT_DATA_REQUEST'); // Action to initiate data selection
export const selectDataSuccess = createAction('SELECT_DATA_SUCCESS'); // Action when data is selected successfully
export const selectDataFailure = createAction('SELECT_DATA_FAILURE'); // Action when data selection fails


// Reducer for managing data
export const DataReducer = createReducer({}, (builder) => {
    builder
      .addCase(dataRequest, (state) => {
        state.loading = true; // Set loading to true while data is being fetched
      })
      .addCase(dataSuccess, (state, action) => {
        state.loading = false; // Stop loading once data is successfully fetched
        state.allTickets = action.payload.tickets; // Store fetched tickets data
        state.allUser = action.payload.users; // Store fetched users data
      })
      .addCase(dataFailure, (state) => {
        state.loading = false; // Stop loading in case of an error
        state.allTickets = []; // Clear tickets data on failure
        state.allUser = []; // Clear users data on failure
      });
  });
  
// Reducer for selecting data
export const SelectDataReducer = createReducer({}, (builder) => {
    builder
      .addCase(selectDataRequest, (state) => {
        state.loading = true; // Set loading to true while data is being selected
        state.selectedData = []; // Clear previously selected data
      })
      .addCase(selectDataSuccess, (state, action) => {
        state.loading = false; // Stop loading once data is selected successfully
        state.selectedData = action.payload.selectedData; // Store selected data
        state.user = action.payload.user; // Store user data if user grouping is selected
      })
      .addCase(selectDataFailure, (state, action) => {
        state.loading = false; // Stop loading in case of an error
        state.selectedData = []; // Clear selected data on failure
        state.message = action.payload.message; // Store error message for debugging
      });
  });
  