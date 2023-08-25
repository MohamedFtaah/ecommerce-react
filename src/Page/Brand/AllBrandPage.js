import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllBrandPageHook from '../../hook/brand/all-brand-page-hook'
const AllBrand = () => {
    const [date, onPress, pageDate] = AllBrandPageHook()

    return (

        <div style={{ minHeight: '670px' }}>
            <BrandContainer date={date.data} />
            <Pagination pageDate={pageDate} onPress={onPress} />
        </div>
    )
}

export default AllBrand
