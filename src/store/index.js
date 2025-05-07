import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const initialState = {
    theme: {
        darkMode: true
    }
};
// Create reducer
const appReducer = (state = initialState, action) => {
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export default store;
