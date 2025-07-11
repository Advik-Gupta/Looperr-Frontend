import { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './index'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
