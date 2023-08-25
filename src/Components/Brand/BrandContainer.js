import React from 'react'
import BrandCard from './BrandCard'

import { Container, Row } from 'react-bootstrap';
const BrandContainer = ({ date }) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    date ? (date.map((date) => { return <BrandCard img={date.image} /> })) : null
                }


            </Row>
        </Container>
    )
}

export default BrandContainer
