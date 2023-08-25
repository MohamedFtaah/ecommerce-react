import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorys } from "../../redux/reducer.js/categorySlice";
import { getAllbrand } from "../../redux/reducer.js/brandSlice";
import ViewSearchProductHook from "./view-search-product-hook";
import { useState } from "react";

export default function SidefilterShearchHook() {
    const [item, pageDate, onPress, getProducts, itemLength] = ViewSearchProductHook()

    const dispatch = useDispatch()

    let allBrandData = []; let allCategoryData = [];
    const CategoryData = useSelector(state => state.categorysDate.categorys)
    const BrandData = useSelector(state => state.brandDate.brand)
    useEffect(() => {
        dispatch(getAllCategorys(`/api/v1/categories`))
        dispatch(getAllbrand(`/api/v1/brands`))

    }, [dispatch])

    try {
        if (CategoryData) {
            allCategoryData = CategoryData
        } else {
            allCategoryData = []
        }
    } catch (e) { }
    try {
        if (BrandData) {
            allBrandData = BrandData
        } else {
            allBrandData = []
        }
    } catch (e) { }
    // checke box Category

    var quertCat = ""

    const [catData, setCatData] = useState([])
    const clickCategory = (e) => {
        let value = e.target.value

        if (e.target.checked === true) {

            setCatData([...catData, value])
            console.log(catData);
        } else if (e.target.checked === false) {
            setCatData(catData.filter((i) => { return i !== value }))
            console.log(catData);

        } else if (e.target.checked === ('0')) {
            catData = []
        }

    }
    useEffect(() => {
        quertCat = catData.map(val => "category[in][]=" + val).join("&")
        localStorage.setItem('catCheckd', quertCat)
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [catData])
    // checke box brand


    var quertbrand = ""

    const [brandData, setbrandData] = useState([])
    const clickBrand = (e) => {
        let value = e.target.value

        if (e.target.checked === true) {

            setbrandData([...brandData, value])
            console.log(brandData);
        } else if (e.target.checked === false) {
            setbrandData(brandData.filter((i) => { return i !== value }))
            console.log(brandData);

        } else if (e.target.checked === ('0')) {
            brandData = []
        }

    }
    useEffect(() => {
        quertbrand = brandData.map(val => "brand[in][]=" + val).join("&")
        localStorage.setItem('brandCheckd', quertbrand)
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [brandData])



    const [From, setFrom] = useState(0)
    const [To, setTo] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem('priceFrom', e.target.value)
        setFrom(e.target.value)
    }

    const priceTo = (e) => {
        localStorage.setItem('priceTo', e.target.value)
        setTo(e.target.value)

    }
    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [From, To])

    return [allCategoryData, allBrandData, clickCategory, clickBrand, priceTo, priceFrom]
}
