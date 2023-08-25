import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/register-auth-hook'
import { ToastContainer } from 'react-toastify'

const RegisterPage = () => {
  const [ChangName, ChangMail, ChangPass, ChangConfirmPass, ChangPhone, name, mail, pass, confirmPass, phone, loading, onSupmt] = RegisterHook()
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            value={name}
            onChange={ChangName}
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            onChange={ChangMail}
            value={mail}
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            onChange={ChangPass}
            value={pass}
            placeholder="كلمه السر..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />

          <input
            onChange={ChangConfirmPass}
            value={confirmPass}
            placeholder=" تاكيد كلمه السر..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={ChangPhone}

            placeholder="رقم الهاتف .."
            type='number'
            className="user-input text-center mx-auto"
          />
          <button onClick={onSupmt} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>
    </Container>
  )
}

export default RegisterPage
