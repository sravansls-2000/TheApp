import { configureStore } from '@reduxjs/toolkit'
import qouteReducer from './slices/quoteSlice'

const store = configureStore({
    reducer:{
   Qoute:qouteReducer
}
})

export default store