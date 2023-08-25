import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({ date }) => {

    return (

        <Container >
            <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    date ? (date.map((date) => { return <CategoryCard title={date.name} img={date.image} background="#F4DBA4" /> })) : null
                }


            </Row>
        </Container>
    )
}

export default CategoryContainer
