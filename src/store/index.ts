import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Define initial state
interface AppState {
  theme: {
    darkMode: boolean;
  };
}

const initialState: AppState = {
  theme: {
    darkMode: true
  }
};

// Create reducer
const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: {
          ...state.theme,
          darkMode: !state.theme.darkMode
        }
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store; 