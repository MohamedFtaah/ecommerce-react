import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllCategoryHook from '../../hook/category/all-category-page-hook'
const AllCategoryPage = () => {
    const [onPress, date, pageDate] = AllCategoryHook()
    return (
        <div style={{ minHeight: '670px' }}>

            <CategoryContainer date={date?.data} />
            <Pagination pageDate={pageDate} onPress={onPress} />
        </div>
    )
}

export default AllCategoryPage
