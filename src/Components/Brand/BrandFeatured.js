import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'


const BrandFeatured = ({ title, btntitle }) => {
    const [date] = HomeBrandHook()

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {date.data ?
                    date.data?.map(
                        (date) => {

                            return <BrandCard key={date._id} img={date.image} />
                        }
                    ) : null
                }
            </Row>
        </Container>
    )
}

export default BrandFeatured
