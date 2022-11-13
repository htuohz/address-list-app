import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import addressesReducer from "./addresses/addressesSlice"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    addresses: addressesReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
        preloadedState
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']