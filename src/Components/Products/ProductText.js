import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ViewDetalisProductHook from '../../hook/product/view-detalis-product-hook'

const ProductText = () => {
  const { id } = useParams()
  const [detalisProductData, images, categoryName, brandName] = ViewDetalisProductHook(id)

  return (

    <div >
      <Row className="mt-2">
        <div className="cat-text">{categoryName.data?.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">{detalisProductData.title}
            <div className="cat-rate d-inline mx-3">{detalisProductData.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brandName.data?.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">

          {detalisProductData.availableColors?.length >= 1 ? (detalisProductData.availableColors.map((item) => {
            return (<div
              className="color ms-2 border"
              style={{ backgroundColor: ` ${item} ` }}></div>)
          })) : null}

        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {detalisProductData.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{detalisProductData.price} جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText
