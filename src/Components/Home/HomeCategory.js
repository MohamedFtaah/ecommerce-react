import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../hook/category/home-category-hook';


const HomeCategory = () => {

    const [date] = HomeCategoryHook()

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    date.data ? (date.data?.slice(0, 5).map((date) => { return <CategoryCard key={date._id} title={date.name} img={date.image} background="#F4DBA4" /> })) : null
                }
            </Row>
        </Container>
    )
}

export default HomeCategory
