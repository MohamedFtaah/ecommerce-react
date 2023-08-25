import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminAddCategory = () => {

    const [islod, name, isPress, img, handilSubmit, onImageChange, onChangeName] = AddCategoryHook();


    return (

        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <label for='upload-photo'
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={img} alt="" height="100px" width="120px" />
                    </label>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        name='photo'
                        id='upload-photo'
                        onChange={onImageChange}
                    />

                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        value={name}
                        onChange={onChangeName}

                    />

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handilSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>

            </Row>
            {
                isPress ? islod === true ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : <h4>don</h4> : null
            }
            <ToastContainer />

        </div>

    )
}

export default AdminAddCategory
