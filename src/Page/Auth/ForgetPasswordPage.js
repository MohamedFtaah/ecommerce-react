import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify'
import ForgetPpasswordHook from '../../hook/auth/forget-password-hook';

const ForgetPasswordPage = () => {
    const [mail, ChangMail, onSupmt] = ForgetPpasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">تسجيل الدخول</label>
                    <input
                        value={mail}
                        onChange={ChangMail}
                        placeholder="ادخل الايميل..."
                        type="text"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSupmt} className="btn-login mx-auto mt-4">ارسال الكود</button>
                </Col>


            </Row>
            <ToastContainer></ToastContainer>

        </Container>
    )
}

export default ForgetPasswordPage
