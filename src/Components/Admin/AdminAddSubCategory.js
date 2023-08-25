import React from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategorys } from '../../redux/reducer.js/categorySlice'
import { useState } from 'react'
import { creatSupCategory } from '../../redux/reducer.js/supCategorySlice'

const AdminAddSubCategory = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [category, setcategory] = useState('')

    const date = useSelector(state => state.categorysDate.categorys)
    useEffect(() => {
        dispatch(getAllCategorys(`/api/v1/categories`))

    }, [dispatch])

    const handilSubmit = (e) => {
        e.preventDefault();
        const formData = { name, category };

        dispatch(creatSupCategory(formData))
        console.log(category);
    }
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <select onChange={(e) => { setcategory(e.target.value) }} name="languages" id="lang" className="select mt-3 px-2 ">

                        {
                            date ? (date.data?.map((data) => {
                                return <option value={data._id} key={data._id}> {data.name}</option>
                            })) : null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handilSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
