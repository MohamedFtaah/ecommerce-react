import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import ViewSearchProductHook from '../../hook/product/view-search-product-hook'
const ShopProductsPage = () => {
    const [item, pageDate, onPress, getProducts, itemLength] = ViewSearchProductHook()
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult onClick={getProducts} title={`${itemLength} نتجية بحث`} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <CardProductsContainer item={item} title="" btntitle="" />
                    </Col>
                </Row>
                {pageDate > 1 ? <Pagination pageDate={pageDate} onPress={onPress} /> : null}
            </Container>
        </div>
    )
}

export default ShopProductsPage
