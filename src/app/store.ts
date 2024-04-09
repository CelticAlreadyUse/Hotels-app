import {configureStore} from '@reduxjs/toolkit'
import counterModals from '../feature/modals'
export const store = configureStore({
    reducer: {
        counter:counterModals
    },
  })

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch