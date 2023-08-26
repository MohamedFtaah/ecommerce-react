import React, { useState } from 'react'
import { Col, Card, Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import ViewAllProductAdminHook from '../../hook/admin/view-all-product-admin-hook'
const AdminAllProductsCard = ({ onDeleteProduct, item }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirmRemoval = () => {
        onDeleteProduct(item._id)
        handleClose()
        window.location.reload()

    }
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row onClick={() => { console.log(item._id) }} className="d-flex justify-content-center px-2">

                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                        <Link to={`/admin/editproducts/${item._id}`}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {item.title}{" "}
                            </div>
                        </Card.Title>
                        <Card.Text >
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.ratingsQuantity}</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">{item.price}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        لا تمسح
                    </Button>
                    <Button variant="primary" onClick={confirmRemoval}>
                        اتمام المسح </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    )
}

export default AdminAllProductsCard
