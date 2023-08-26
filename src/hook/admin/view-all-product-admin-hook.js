
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProducts } from '../../redux/reducer.js/productSlice';

export default function ViewAllProductAdminHook() {
    const dispatch = useDispatch()
    const allProductData = useSelector(state => state.ProductsDate.products)


    useEffect(() => {
        dispatch(getAllProducts(`/api/v1/products?limit=${10}`))

    }, [dispatch])

    const onPress = (page) => {
        dispatch(getAllProducts(`/api/v1/products?limit=${10}&page=${page}`))
    }
    let item = []
    let pageDate = 0;

    try {
        if (allProductData) {
            item = allProductData
            console.log(allProductData);
        } else {
            item = []
        }
        ////

        if (item.paginationResult) {
            pageDate = item.paginationResult.numberOfPages
        }
    } catch (e) {

    }

    //deleteProduct
    const onDeleteProduct = async (id) => {
        await dispatch(deleteProduct(id))

    }
    //




    return [item, onDeleteProduct, pageDate, onPress]
}
