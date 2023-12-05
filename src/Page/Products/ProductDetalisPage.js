import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewDetalisProductHook from '../../hook/product/view-detalis-product-hook'
import { useParams } from 'react-router-dom'
const ProductDetalisPage = () => {
    const { id } = useParams()

    const [detalisProductData, , , , ProductOfCategorydata, randomK] = ViewDetalisProductHook(id)

    if (detalisProductData) {
        var rateAvg = detalisProductData.ratingsAverage
        var rateQtr = detalisProductData.ratingsQuantity
    }


    return (

        <div onClick={() => {
            console.log()

        }} style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer id={id} rateAvg={rateAvg} rateQtr={rateQtr} />
                <CardProductsContainer item={ProductOfCategorydata.slice(randomK, randomK + 4)} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
