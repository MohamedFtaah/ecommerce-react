import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({ item, onDeleteProduct, show, handleShow, handleClose }) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                {item.data?.length >= 1 ? item?.data.map((item) => {
                    return <AdminAllProductsCard handleShow={handleShow} handleClose={handleClose} show={show} onDeleteProduct={onDeleteProduct} key={item._id} item={item} />
                }) : <h4>no data f</h4>}

            </Row>

        </div>
    )
}

export default AdminAllProducts
