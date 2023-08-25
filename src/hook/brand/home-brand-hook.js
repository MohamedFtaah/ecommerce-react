import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllbrand } from '../../redux/reducer.js/brandSlice';
export default function HomeBrandHook() {
    const date = useSelector(state => state.brandDate.brand)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllbrand(`/api/v1/brands?limit=6`))
    }, [dispatch])
    return [date]

}
