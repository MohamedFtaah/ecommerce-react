import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import { useParams } from 'react-router-dom';
import EditProductsHook from '../../hook/admin/edit-product-hook';
const AdminAddProducts = () => {
    const { id } = useParams()
    const [handilSubmit, handilChangColor, selectColor, removeColor, Colors, prandDate, brandID, onRemove, onSelect, options, date, CategoryID, qty, price, quantity, detalis, title, changeQty, changePrice, changeQuantity, changeDetalis, changeTitle, changeBrandID, changeCategoryID, images, setImages, show, isPress, islod,] = EditProductsHook(id)
    return (
        <div onClick={() => { console.log(CategoryID); }}>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>

                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        max={4}

                    />

                    <input
                        value={title}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                        onChange={changeTitle}
                    />
                    <textarea
                        value={detalis}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        onChange={changeDetalis}
                    />
                    <input
                        value={quantity}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        onChange={changeQuantity}
                    />
                    <input
                        value={price}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                        onChange={changePrice}
                    />
                    <input
                        value={qty}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        onChange={changeQty}
                    />
                    <select
                        value={CategoryID}
                        onChange={changeCategoryID}
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            date ? (date.data?.map((data) => { return <option key={data._id} value={data._id}>{data.name}</option> })) : null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}

                    />
                    <select
                        value={brandID}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 "
                        onChange={changeBrandID}
                    >

                        <option value="0">الماركة</option>
                        {
                            prandDate ? (prandDate.data?.map((data) => { return <option key={data._id} value={data._id}>{data.name}</option> })) : null
                        }


                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            Colors?.length >= 1 ? (Colors.map((color, i) => { return (<div onClick={() => removeColor(color)} key={i} className="color ms-2 border  mt-1" style={{ backgroundColor: color }}></div>) })) : null
                        }

                        <img onClick={selectColor} src={add} alt="" width="30px" height="35px" className="" style={{ cursor: 'pointer' }} />
                        {
                            show ? <CompactPicker onChangeComplete={handilChangColor} /> : null

                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handilSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {isPress ? islod === true ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : <h4>don</h4> : null}

            <ToastContainer />

        </div>
    )

}

export default AdminAddProducts
