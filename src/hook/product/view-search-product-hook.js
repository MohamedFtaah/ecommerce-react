
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/reducer.js/productSlice';

export default function ViewSearchProductHook() {
    const dispatch = useDispatch()

    let item = []; let limit = 8; let pageDate = 0; let itemLength = 0; let word = "", quertCat = "", quertbrand = "", priceFromWord = "", priceToWord = ""


    const getStorage = () => {
        if (localStorage.getItem('searchWord') != null) {
            word = localStorage.getItem('searchWord')
        }
        if (localStorage.getItem('catCheckd') != null) {
            quertCat = localStorage.getItem('catCheckd')
        }
        if (localStorage.getItem('brandCheckd') != null) {
            quertbrand = localStorage.getItem('brandCheckd')
        }
        if (localStorage.getItem('priceFrom') === null || localStorage.getItem('priceFrom') === "" || localStorage.getItem('priceFrom') <= 0) {
            priceFromWord = ""
        } else {
            priceFromWord = `&price[gt]=${localStorage.getItem('priceFrom')}`

        }
        if (localStorage.getItem('priceTo') === null || localStorage.getItem('priceTo') === "" || localStorage.getItem('priceTo') <= 0) {
            priceToWord = ""
        } else {

            priceToWord = `&price[lte]=${localStorage.getItem('priceTo')}`

        }

    }

    const allProductData = useSelector(state => state.ProductsDate.products)

    getStorage()

    const getProducts = async () => {


        sortData()
        await dispatch(getAllProducts(`/api/v1/products?sort=${sort}${priceFromWord}${priceToWord}&limit=${limit}&keyword=${word}&${quertCat}&${quertbrand}`))
    }


    useEffect(() => {
        getProducts()

    }, [dispatch])





    try {
        if (allProductData.results) {
            itemLength = allProductData.results
        } else { itemLength = 0 }
    } catch (e) { }


    try {
        if (allProductData.data) {
            item = allProductData.data

        }
        else { item = [] }
    } catch (e) { }

    try {
        if (allProductData.paginationResult) {
            pageDate = allProductData.paginationResult.numberOfPages
        } else { pageDate = 0 }
    } catch (e) { };
    const onPress = (page) => {

        getStorage();

        sortData();

        dispatch(getAllProducts(`/api/v1/products?${priceFromWord}${priceToWord}sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${quertCat}&${quertbrand}`));
    }

    // when user choose sort type
    let sortType = "", sort
    const sortData = () => {
        if (localStorage.getItem('sortType') != null) {
            sortType = localStorage.getItem('sortType')
        } else {
            sortType = ""
        }

        if (sortType === 'السعر من الاقل للاعلي') {
            sort = "+price"

        } else if (sortType === 'السعر من الاعلي للاقل') {
            sort = "-price"

        } else if (sortType === '') {
            sort = ''

        }
        console.log(sort);

    }

    return [item, pageDate, onPress, getProducts, itemLength]
}
