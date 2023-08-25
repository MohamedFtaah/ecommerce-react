import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
import HomeProductHook from '../../hook/product/home-product-hook';
const HomePage = () => {
    const [item] = HomeProductHook()
    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <Silder />
            <HomeCategory />
            <CardProductsContainer item={item} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer item={item} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />

        </div>
    )
}

export default HomePage
