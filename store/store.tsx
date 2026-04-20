// store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import authReducer from './slices/authSlice'
import favoritesReducer from './slices/favoriteSlice'
import quizReducer from './slices/quizSlice'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    auth: authReducer,
    favorites: favoritesReducer,
    quiz: quizReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch