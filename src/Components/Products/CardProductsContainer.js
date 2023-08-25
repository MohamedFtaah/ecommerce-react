import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'


const CardProductsContainer = ({ item, title, btntitle, pathText }) => {

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-content-between'>

                {item ? item.map((item) => { return <ProductCard key={item._id} item={item} /> })
                    : <h4>NO data Find</h4>}

            </Row>
        </Container>
    )
}

export default CardProductsContainer
