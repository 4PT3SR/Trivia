import {
    configureStore
} from '@reduxjs/toolkit'
import quizReducer from './features/quiz/quizSlice'
import {quizApi} from './features/quiz/quizApi'

export const store = configureStore({
    reducer: {
        quiz:quizReducer,
        [quizApi.reducerPath]: quizApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quizApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType < typeof store.getState >
    // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
    export type AppDispatch = typeof store.dispatch