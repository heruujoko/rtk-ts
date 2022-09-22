import { configureStore, ThunkAction, Action, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listenerMiddleware, { setupMiddleware } from '../listener/middleware-setup';

setupMiddleware();
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().prepend(listenerMiddleware.middleware),
// });

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
    preloadedState
  })
}

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
