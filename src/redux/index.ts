import {
  configureStore,
  combineReducers
}                       from '@reduxjs/toolkit'
import logger           from 'redux-logger'
import userDataSlice    from './slices/userData'

export type State = ReturnType<typeof reducer>


const reducer = combineReducers({
  userData : userDataSlice.reducer
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
