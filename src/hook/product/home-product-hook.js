
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/reducer.js/productSlice';
export default function HomeProductHook() {
  const dispatch = useDispatch()
  const allProductData = useSelector(state => state.ProductsDate.products?.data)

  useEffect(() => {

    dispatch(getAllProducts('/api/v1/products'))
  }, [dispatch])
  let item = []
  if (allProductData) {
    item = allProductData.slice(0, 4)
  } else {
    item = []
  }
  return [item]
}
