import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../hook/brand/add-brand-hook'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const AdminAddBrand = () => {
    const [islod, name, isPress, img, handilSubmit, onImageChange, onChangeName] = AddBrandHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <label for='upload-photo' style={{ cursor: 'pointer' }}>
                        <img src={img} alt="" height="100px" width="120px" />
                    </label>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        name='photo'
                        id='upload-photo'
                        onChange={onImageChange}
                    />
                    {
                        isPress ? islod === true ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : <h4>don</h4> : null
                    }
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
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
            <ToastContainer />

        </div>
    )
}

export default AdminAddBrand
