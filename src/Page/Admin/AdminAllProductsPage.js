import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import ViewAllProductAdminHook from '../../hook/admin/view-all-product-admin-hook'
const AdminAllProductsPage = () => {
    const [item, onDeleteProduct, pageDate, onPress, show, handleShow, handleClose] = ViewAllProductAdminHook()

    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts handleShow={handleShow} handleClose={handleClose} show={show} onDeleteProduct={onDeleteProduct} item={item} />
                    {pageDate > 1 ? <Pagination pageDate={pageDate} onPress={onPress} /> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
