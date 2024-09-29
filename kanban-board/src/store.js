import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './DataReducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;