import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllbrand } from '../../redux/reducer.js/brandSlice'
export default function AllBrandPageHook() {
    const date = useSelector(state => state.brandDate.brand)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllbrand(`/api/v1/brands?limit=${4}&page=${1}`))
    }, [dispatch])

    const onPress = (page) => {
        dispatch(getAllbrand(`/api/v1/brands?limit=${4}&page=${page}`))
    }

    let pageDate = 0;
    if (date.paginationResult) {
        pageDate = date.paginationResult.numberOfPages
    }
    return [date, onPress, pageDate]
}
