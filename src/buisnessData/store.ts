import { configureStore } from '@reduxjs/toolkit'
import { navBarDataReducer } from './slices/navBar.slice'
import { propertyDataReducer } from './slices/property.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    navBarData: navBarDataReducer,
    propertyData: propertyDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store