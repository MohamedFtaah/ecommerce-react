import { useDispatch, useSelector } from "react-redux"
import { getAllCategorys } from "../../redux/reducer.js/categorySlice"
import { useEffect } from "react"

export default function HomeCategoryHook() {
    const date = useSelector(state => state.categorysDate.categorys)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategorys(`/api/v1/categories?limit=5&page=${1}`))

    }, [dispatch])
    return [date]
}
