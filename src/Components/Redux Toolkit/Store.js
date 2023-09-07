import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './ThemeSlices';

const Store = configureStore({
    reducer: ThemeReducer

})


export default Store;