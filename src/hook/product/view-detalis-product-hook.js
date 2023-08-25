import { useEffect } from "react"
import { getAllProducts, getOneProducts, getProductsPyCategory } from "../../redux/reducer.js/productSlice"
import { useDispatch, useSelector } from "react-redux"
import mobile from '../../images/mobile.png'
import { getAllCategorys, getOneCategorys } from "../../redux/reducer.js/categorySlice"
import { getOneBrand } from "../../redux/reducer.js/brandSlice"

export default function ViewDetalisProductHook(id) {
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getOneProducts(`/api/v1/products/${id}`))

    }, [id])
    const oneProductData = useSelector(state => state.ProductsDate.OneProducts.data)
    const categoryData = useSelector(state => state.categorysDate.oneCategorys)
    const ProductOfCategory = useSelector(state => state.ProductsDate.productsPyCategory)
    const randomK = useSelector(state => state.ProductsDate.randomKay)

    let detalisProductData = []
    if (oneProductData) {
        detalisProductData = oneProductData

    } else {
        detalisProductData = []
    }
    useEffect(() => {
        if (detalisProductData.category) {
            if (detalisProductData.category) {
                dispatch(getOneCategorys(`/api/v1/categories/${detalisProductData.category}`))
            }
            if (detalisProductData.brand) {

                dispatch(getOneBrand(`/api/v1/brands/${detalisProductData.brand}`))
            }
            if (detalisProductData.category) {

                dispatch(getProductsPyCategory(`/api/v1/products/?Category${detalisProductData.category}`))
            }

        }


    }, [detalisProductData])
    // get data to image gallery
    let images = []
    if (detalisProductData.images) { images = detalisProductData.images.map((img) => { return { original: img } }) } else {
        images = [{ original: `${mobile}` }]
    }
    // get data to productDetalis 

    let categoryName = []
    if (categoryData) {
        categoryName = categoryData
    } else {
        categoryName = []
    }

    let brandName = []
    if (detalisProductData.brand) {
        brandName = detalisProductData.brand
    } else {
        brandName = []
    }
    //getProductsPyCategory
    let ProductOfCategorydata = []
    if (ProductOfCategory.data) {

        ProductOfCategorydata = ProductOfCategory.data
    } else {
        ProductOfCategorydata = []
    }

    return [detalisProductData, images, categoryName, brandName, ProductOfCategorydata, randomK]
}
