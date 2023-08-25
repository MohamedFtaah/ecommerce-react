import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategorys } from '../../redux/reducer.js/categorySlice'
export default function AllCategoryHook() {
    const date = useSelector(state => state.categorysDate.categorys)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategorys(`/api/v1/categories?limit=20&page=${1}`))

    }, [dispatch])

    const onPress = (page) => {
        dispatch(getAllCategorys(`/api/v1/categories?limit=20&page=${page}`))
    }

    let pageDate = 0;
    if (date.paginationResult) {
        pageDate = date.paginationResult.numberOfPages
    }

    return [onPress, date, pageDate]
}
