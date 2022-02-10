import { AppDispatch, RootState } from './../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const useAppDixpatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;